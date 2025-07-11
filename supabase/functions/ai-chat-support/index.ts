import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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
    
    if (!openAIApiKey) {
      console.error('OpenAI API key not configured');
      throw new Error('OpenAI API key not configured');
    }

    const requestBody = await req.json();
    console.log('Request body:', requestBody);
    
    const { message, sessionId } = requestBody;
    
    if (!message || !sessionId) {
      throw new Error('Message and session ID are required');
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store user message
    await supabase
      .from('chat_messages')
      .insert({
        session_id: sessionId,
        message: message,
        is_ai_response: false
      });

    // Get recent conversation history for context
    const { data: recentMessages } = await supabase
      .from('chat_messages')
      .select('message, is_ai_response')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })
      .limit(10);

    // Build conversation context
    const conversationHistory = recentMessages?.map(msg => ({
      role: msg.is_ai_response ? 'assistant' : 'user',
      content: msg.message
    })) || [];

    // Create AI response
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
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
- Be friendly, helpful, and concise
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
        max_tokens: 500
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const aiResponse = await response.json();
    const aiMessage = aiResponse.choices[0].message.content;

    // Store AI response
    await supabase
      .from('chat_messages')
      .insert({
        session_id: sessionId,
        message: aiMessage,
        is_ai_response: true
      });

    return new Response(JSON.stringify({ 
      message: aiMessage,
      sessionId: sessionId 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in AI chat support:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to process chat message',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});