import { Router } from "express";
import {
  createCourse,
  getCourse,
  updateCourseDetails,
} from "../controllers/course.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = Router();

router.post("/create", verifyToken, createCourse);
router.get("/create/:id", verifyToken, getCourse);
router.put("/create/:id", verifyToken, updateCourseDetails);

export default router;
