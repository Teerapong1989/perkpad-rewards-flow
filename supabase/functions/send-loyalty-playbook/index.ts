import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PlaybookEmailRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: PlaybookEmailRequest = await req.json();

    console.log("Sending loyalty playbook to:", email);

    const emailResponse = await resend.emails.send({
      from: "PerkPad <noreply@perkpad.io>",
      to: [email],
      subject: "🎁 Your FREE Small Business Loyalty Playbook is here!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="background: linear-gradient(135deg, #f97316, #ea580c); width: 80px; height: 80px; border-radius: 20px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 32px;">🎁</span>
            </div>
            <h1 style="color: #1e293b; margin: 0; font-size: 28px; font-weight: bold;">Your Loyalty Playbook is Ready!</h1>
          </div>
          
          <div style="background: linear-gradient(to right, #fef2f2, #fff7ed); border: 1px solid #fecaca; border-radius: 12px; padding: 20px; margin-bottom: 30px;">
            <h2 style="color: #dc2626; margin: 0 0 10px 0; font-size: 18px; font-weight: bold;">
              Small Business Loyalty Playbook 
              <span style="font-size: 14px; font-weight: normal; color: #7f1d1d;">(normally $47) FREE</span>
            </h2>
            <p style="color: #7f1d1d; margin: 0; font-size: 14px;">
              Your complete guide to building customer loyalty and increasing repeat business.
            </p>
          </div>
          
          <div style="background: #f8fafc; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 20px;">What's Inside:</h3>
            <ul style="color: #475569; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li>7 proven strategies to increase customer retention by 25%</li>
              <li>The psychology behind customer loyalty programs</li>
              <li>How to design rewards that actually drive repeat visits</li>
              <li>Case studies from successful small businesses</li>
              <li>Templates and worksheets to implement immediately</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <a href="https://tally.so/r/nGVLNp?email=${encodeURIComponent(email)}" 
               style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">
              📚 Download Your FREE Playbook + Start Setup
            </a>
          </div>
          
          <div style="background: #f1f5f9; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
            <p style="color: #475569; margin: 0; font-size: 14px; text-align: center;">
              <strong>BONUS:</strong> Early access to new customer retention tools (value $197)
            </p>
          </div>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              You're receiving this because you requested our Small Business Loyalty Playbook.<br>
              Questions? Reply to this email - we're here to help!
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Playbook email sent successfully",
      email_id: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-loyalty-playbook function:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ 
        error: message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);