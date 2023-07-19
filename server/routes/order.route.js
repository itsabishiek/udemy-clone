import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  confirmPayment,
  createPaymentIntent,
  getOrders,
} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, createPaymentIntent);
router.put("/", verifyToken, confirmPayment);

export default router;
