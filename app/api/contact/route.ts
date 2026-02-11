import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Veuillez entrer une adresse e-mail valide' },
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
      message: 'Votre message a été envoyé avec succès. Nous reviendrons vers vous bientôt.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
