import Stripe from "stripe";
import Course from "../models/course.model.js";
import Order from "../models/order.model.js";

const createPaymentIntent = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    const stripe = new Stripe(process.env.STRIPE_KEY);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: course.coursePrice * 100,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    const newOrder = new Order({
      courseId: course._id,
      img: course.coverImage,
      title: course.title,
      buyerId: req.userId,
      sellerId: course.userId,
      price: course.coursePrice,
      payment_intent: paymentIntent.id,
    });

    await newOrder.save();

    res.status(201).send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    next(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.sellerId ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (error) {
    next(error);
  }
};

const confirmPayment = async (req, res, next) => {
  try {
    await Order.findOneAndUpdate(
      { payment_intent: req.body.payment_intent },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed!");
  } catch (error) {
    next(error);
  }
};

export { getOrders, createPaymentIntent, confirmPayment };
