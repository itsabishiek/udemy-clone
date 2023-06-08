import { Router } from "express";
import { createCourse } from "../controllers/course.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = Router();

router.post("/create", verifyToken, createCourse);

export default router;
