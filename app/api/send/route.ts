import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'logangillingham11@live.com',
      subject: `New Wii Menu Message from ${name}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.redirect(new URL('/?sent=true', req.url), 303);
  } catch (error) {
    return NextResponse.json({ error });
  }
}