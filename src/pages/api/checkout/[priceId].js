import { SITE_URL } from "src/core/utils/index";
import { stripe } from "src/pricing/utils/stripe";

export default async function handler(req, res) {
  const { priceId } = req.query;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${SITE_URL}/success`,
      cancel_url: `${SITE_URL}/pricing`,
    });
    res.send({ id: session.id });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
}
