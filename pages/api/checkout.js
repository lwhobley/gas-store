import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return res.status(200).json({ url: null, error: 'Stripe not configured' });
  }

  const stripe = new Stripe(stripeKey, { apiVersion: '2024-06-20' });

  const { items } = req.body;
  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'No items in cart' });
  }

  try {
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${item.name} — Size ${item.selectedSize}${item.selectedColor && item.selectedColor !== 'Default' ? ` / ${item.selectedColor}` : ''}`,
          images: [item.thumbnail],
          metadata: {
            printful_product_id: String(item.id),
            size: item.selectedSize,
            color: item.selectedColor || 'Default',
          },
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || req.headers.origin}/`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'NZ', 'DE', 'FR', 'ES', 'IT', 'NL', 'SE', 'NO', 'DK', 'FI', 'BE', 'AT', 'CH', 'PT', 'IE'],
      },
      metadata: {
        order_source: 'GAS_store',
        item_count: String(items.length),
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    return res.status(500).json({ error: err.message });
  }
}
