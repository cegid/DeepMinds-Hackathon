import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Email invalide' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save email to database
    // 2. Send welcome email
    // 3. Add to mailing list (e.g., Mailchimp, SendGrid)

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: 'Inscription réussie! Vous recevrez nos offres exclusives.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'inscription' },
      { status: 500 }
    );
  }
}
