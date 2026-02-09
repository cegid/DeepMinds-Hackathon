import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, customerInfo, total } = body;

    // Here you would typically:
    // 1. Validate the order data
    // 2. Save to database
    // 3. Process payment
    // 4. Send confirmation email

    // For now, we'll simulate a successful order
    const orderId = `ORD-${Date.now()}`;

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      orderId,
      message: 'Commande créée avec succès',
      order: {
        id: orderId,
        items,
        total,
        status: 'pending',
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Erreur lors de la création de la commande' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Get all products
  const products = [
    {
      id: 1,
      name: 'Amlou Traditionnel',
      description: 'Pâte à tartiner marocaine authentique',
      variants: [
        { size: '250g', price: 12.99, oldPrice: 15.99 },
        { size: '500g', price: 22.99, oldPrice: 28.99 },
        { size: '1kg', price: 39.99, oldPrice: 49.99 },
      ],
      inStock: true,
      rating: 4.9,
      reviews: 527,
    },
  ];

  return NextResponse.json({ products });
}
