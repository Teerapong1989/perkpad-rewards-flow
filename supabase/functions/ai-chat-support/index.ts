import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
  'Access-Control-Max-Age': '86400',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  console.log('Chat support function called:', req.method);
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('OpenAI API key status:', openAIApiKey ? 'Present' : 'Missing');
    console.log('OpenAI API key length:', openAIApiKey ? openAIApiKey.length : 0);
    console.log('OpenAI API key starts with sk-:', openAIApiKey ? openAIApiKey.startsWith('sk-') : false);
    
    if (!openAIApiKey) {
      console.error('OpenAI API key not configured');
      return new Response(JSON.stringify({ 
        message: 'OpenAI API key is not configured. Please check your Supabase secrets.'
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const requestBody = await req.json();
    console.log('Request body:', requestBody);
    
    const { message, sessionId } = requestBody;
    
    if (!message || !sessionId) {
      console.error('Missing required fields:', { message: !!message, sessionId: !!sessionId });
      return new Response(JSON.stringify({ 
        message: 'Please provide both a message and session ID.'
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    console.log('Supabase client created successfully');

    // Store user message (non-blocking)
    console.log('Storing user message...');
    try {
      await supabase
        .from('chat_messages')
        .insert({
          session_id: sessionId,
          message: message,
          is_ai_response: false
        });
      console.log('User message stored successfully');
    } catch (dbError) {
      console.error('Error storing user message (continuing):', dbError);
    }

    // Get recent conversation history for context
    console.log('Fetching conversation history...');
    let conversationHistory = [];
    try {
      const { data: recentMessages, error: fetchError } = await supabase
        .from('chat_messages')
        .select('message, is_ai_response')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true })
        .limit(8);

      if (fetchError) {
        console.error('Error fetching conversation history (continuing):', fetchError);
      } else {
        console.log('Conversation history fetched:', recentMessages?.length || 0, 'messages');
        conversationHistory = recentMessages?.map(msg => ({
          role: msg.is_ai_response ? 'assistant' : 'user',
          content: msg.message
        })) || [];
      }
    } catch (historyError) {
      console.error('Error in conversation history fetch (continuing):', historyError);
    }

    console.log('Calling OpenAI API...');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a helpful customer support assistant for Perkpad, a digital loyalty program platform. 

ABOUT PERKPAD:
- Perkpad helps businesses create digital loyalty programs for their customers
- Customers earn stamps/points when they visit participating businesses
- They can redeem rewards like discounts, free items, or special offers
- The platform includes features like streak tracking, XP systems, challenges, and gift box rewards
- Businesses can manage multiple locations, create custom rewards, and track customer engagement
- The platform supports various business types: cafes, restaurants, retail stores, salons, auto repair, pet groomers, and more

YOUR ROLE:
- Answer questions about how Perkpad works for both businesses and customers
- Help troubleshoot common issues with loyalty programs
- Explain features like earning stamps, redeeming rewards, streak bonuses, and challenges
- Provide guidance on setting up loyalty programs for business owners
- Be friendly, helpful, and concise (max 2-3 sentences per response)
- If you don't know something specific, offer to connect them with our support team

TONE: Professional yet friendly, like a knowledgeable support representative.`
          },
          ...conversationHistory,
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 300
      }),
    });

    console.log('OpenAI API response status:', response.status);
    console.log('OpenAI API response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error details:', {
        status: response.status,
        statusText: response.statusText,
        errorText: errorText,
        headers: Object.fromEntries(response.headers.entries())
      });
      
      return new Response(JSON.stringify({ 
        message: 'Sorry, I am having trouble processing your request right now. Please try again in a moment.'
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const aiResponse = await response.json();
    console.log('OpenAI response received successfully');
    
    const aiMessage = aiResponse.choices[0].message.content;

    // Store AI response (non-blocking)
    console.log('Storing AI response...');
    try {
      await supabase
        .from('chat_messages')
        .insert({
          session_id: sessionId,
          message: aiMessage,
          is_ai_response: true
        });
      console.log('AI response stored successfully');
    } catch (dbError) {
      console.error('Error storing AI response (continuing):', dbError);
    }

    console.log('Returning successful response');
    return new Response(JSON.stringify({ 
      message: aiMessage,
      sessionId: sessionId 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in AI chat support function:', error);
    
    // Return a user-friendly error message
    return new Response(JSON.stringify({
      message: 'Sorry, I am having trouble processing your request right now. Please try again in a moment.'
    }), {
      status: 200, // Return 200 to avoid triggering client-side error handling
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});