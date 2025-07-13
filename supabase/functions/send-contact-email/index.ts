import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  inquiryType?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, subject, message, inquiryType }: ContactEmailRequest = await req.json();

    console.log("Sending contact email from:", email, "to: support@perkpad.io");

    // Email to support@perkpad.io (notification)
    const supportEmailResponse = await resend.emails.send({
      from: "Perkpad Contact Form <noreply@perkpad.io>",
      to: ["support@perkpad.io"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ''}
          </div>
          
          <div style="background-color: #fff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Subject</h3>
            <p style="font-weight: 600;">${subject}</p>
            
            <h3 style="color: #374151;">Message</h3>
            <div style="white-space: pre-wrap; line-height: 1.6;">${message}</div>
          </div>
          
          <div style="background-color: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;">
              <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            This email was automatically generated from the Perkpad contact form.<br>
            Reply directly to this email to respond to the customer.
          </p>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the customer
    });

    // Confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Perkpad Support <support@perkpad.io>",
      to: [email],
      subject: "We received your message - Perkpad Support",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #6366f1; margin: 0;">Thank you for contacting Perkpad!</h1>
          </div>
          
          <div style="background-color: #f0f9ff; border-left: 4px solid #6366f1; padding: 20px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #1e40af;">Hi ${name},</h2>
            <p style="color: #374151; line-height: 1.6;">
              We've received your message and our support team will get back to you within <strong>24 hours</strong>.
            </p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ''}
            <div style="background-color: #fff; padding: 15px; border-radius: 6px; margin-top: 10px;">
              <div style="white-space: pre-wrap; color: #4b5563; line-height: 1.5;">${message}</div>
            </div>
          </div>
          
          <div style="background-color: #ecfdf5; border: 1px solid #10b981; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #047857;">In the meantime...</h3>
            <p style="color: #065f46; margin-bottom: 15px;">Check out these helpful resources:</p>
            <ul style="color: #065f46; line-height: 1.6;">
              <li><a href="https://app.perkpad.io" style="color: #6366f1;">Access your Perkpad dashboard</a></li>
              <li><a href="https://app.perkpad.io" style="color: #6366f1;">Browse our help center</a></li>
              <li><a href="https://app.perkpad.io" style="color: #6366f1;">Schedule a demo call</a></li>
            </ul>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <div style="text-align: center;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong>The Perkpad Support Team</strong><br>
              <a href="mailto:support@perkpad.io" style="color: #6366f1;">support@perkpad.io</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Support email sent:", supportEmailResponse);
    console.log("Customer email sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully",
        supportEmailId: supportEmailResponse.data?.id,
        customerEmailId: customerEmailResponse.data?.id
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);