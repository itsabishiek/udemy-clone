import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import instructorRoute from "./routes/instructor.route.js";
import createCourseRoute from "./routes/course.route.js";
import allCoursesRoute from "./routes/courses.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";

dotenv.config();
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected!");
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://udemyion.vercel.app"],
    credentials: true,
  })
);

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/instructor", instructorRoute);
app.use("/api/course", createCourseRoute);
app.use("/api/courses", allCoursesRoute);
app.use("/api/orders", orderRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong!";

  return res.status(errStatus).send(errMessage);
});

app.get("/", (req, res) => {
  res.send("Hi, This is Udemy Server! ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
