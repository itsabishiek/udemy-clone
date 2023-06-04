import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
    },
    isInstructor: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
