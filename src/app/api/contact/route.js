// For App Router: app/api/contact/route.js
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, project } = body;

    // Basic validation
    if (!name || !email || !project) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.RESEND_TO_EMAIL],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }
            .project-description { min-height: 100px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>You have received a new inquiry from your website.</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${email}</div>
              </div>
              
              ${
                company
                  ? `
              <div class="field">
                <span class="label">Company:</span>
                <div class="value">${company}</div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <span class="label">Project Description:</span>
                <div class="value project-description">${project}</div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                <p>This email was sent from your website contact form at ${new Date().toLocaleString()}.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Optional: Send confirmation email to the user
    // await resend.emails.send({
    //   from: process.env.RESEND_FROM_EMAIL,
    //   to: [email],
    //   subject: "Thank you for contacting us!",
    //   html: `
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //       <style>
    //         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    //         .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    //         .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    //         .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    //       </style>
    //     </head>
    //     <body>
    //       <div class="container">
    //         <div class="header">
    //           <h1>Thank you for reaching out!</h1>
    //         </div>
    //         <div class="content">
    //           <p>Hi ${name},</p>

    //           <p>Thank you for contacting us about your digital learning project. We've received your inquiry and will get back to you within 24 hours.</p>

    //           <p><strong>Your message:</strong></p>
    //           <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; margin: 15px 0;">
    //             ${project}
    //           </div>

    //           <p>We're excited to learn more about your project and discuss how we can help bring your digital learning vision to life.</p>

    //           <p>Best regards,<br>
    //           The Karanji Infotech Team</p>
    //         </div>
    //       </div>
    //     </body>
    //     </html>
    //   `,
    // });

    return NextResponse.json(
      {
        message: "Email sent successfully",
        id: emailData.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

// For Pages Router: pages/api/contact.js
// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const { name, email, company, project } = req.body;

//     // Basic validation
//     if (!name || !email || !project) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ error: 'Invalid email format' });
//     }

//     // Send email using Resend (same logic as above)
//     const emailData = await resend.emails.send({
//       // ... same email configuration
//     });

//     res.status(200).json({
//       message: 'Email sent successfully',
//       id: emailData.id
//     });

//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// }
