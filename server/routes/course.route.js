import { Router } from "express";
import {
  createCourse,
  getCourse,
  updateCourseDetails,
} from "../controllers/course.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = Router();

router.post("/create", verifyToken, createCourse);
router.get("/:id", verifyToken, getCourse);
router.put("/:id", verifyToken, updateCourseDetails);

export default router;
