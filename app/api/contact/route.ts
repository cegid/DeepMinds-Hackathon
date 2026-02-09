import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save contact message to database
    // 2. Send notification email to admin
    // 3. Send confirmation email to customer

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: 'Message envoyé! Nous vous répondrons sous 24h.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
