import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Verify reCAPTCHA
    const recaptchaVerification = await verifyRecaptcha(body.captchaToken);
    if (!recaptchaVerification.success) {
      return NextResponse.json(
        { error: 'Invalid CAPTCHA' },
        { status: 400 }
      );
    }

    // Process form submission (e.g., send email, save to database, etc.)
    // Add your logic here

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

async function verifyRecaptcha(token: string) {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  return response.json();
} 