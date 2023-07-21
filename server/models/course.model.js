import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  language: {
    type: String,
    required: false,
  },
  level: {
    type: String,
    required: false,
  },
  primaryCourseTitle: {
    type: String,
    required: false,
  },
  coverImage: {
    type: String,
    required: false,
  },
  promoVideo: {
    type: String,
    required: false,
  },
  coursePrice: {
    type: Number,
    required: false,
  },
  userId: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: false,
  },
  totalStars: {
    type: Number,
    default: 0,
  },
  starNumber: {
    type: Number,
    default: 0,
  },
});

export default model("Course", courseSchema);
