import { Router } from "express";
import { createInstructor } from "../controllers/instructor.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = Router();

router.post("/", verifyToken, createInstructor);

export default router;
