import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    courseId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    starRating: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
  },
  { timestamps: true }
);

export default model("Review", reviewSchema);
