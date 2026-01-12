export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.json();
    const { name, email, type, message } = data;

    if (!name || !email || !message) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            { status: 400 }
        );
    }

    // Create Transporter
    const transporter = nodemailer.createTransport({
        host: import.meta.env.SMTP_HOST,
        port: parseInt(import.meta.env.SMTP_PORT || "587"),
        secure: false, // true for 465, false for other ports
        auth: {
            user: import.meta.env.SMTP_USER,
            pass: import.meta.env.SMTP_KEY,
        },
    });

    const mailOptions = {
        from: `"Enak Contact Form" <${import.meta.env.SMTP_USER}>`,
        to: "info@babysitter-enak.com",
        replyTo: email,
        subject: `【お問い合わせ】${type} - ${name}様より`,
        text: `
ウェブサイトのお問い合わせフォームより新しいメッセージが届きました。

【お名前】
${name}

【メールアドレス】
${email}

【お問い合わせ種別】
${type}

【お問い合わせ内容】
${message}
    `,
        html: `
<div style="font-family: sans-serif; padding: 20px; color: #333;">
  <h2>新しいお問い合わせがありました</h2>
  <hr style="border: 0; border-bottom: 1px solid #eee; margin: 20px 0;">
  
  <p><strong>お名前:</strong> ${name}</p>
  <p><strong>メールアドレス:</strong> ${email}</p>
  <p><strong>お問い合わせ種別:</strong> ${type}</p>
  
  <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
    <strong>お問い合わせ内容:</strong><br>
    <pre style="white-space: pre-wrap; font-family: sans-serif; margin-top: 10px;">${message}</pre>
  </div>
</div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(
            JSON.stringify({
                message: "Email sent successfully",
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Email send error:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to send email",
                error: error instanceof Error ? error.message : "Unknown error",
            }),
            { status: 500 }
        );
    }
};
