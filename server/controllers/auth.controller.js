import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();

    const token = jwt.sign(
      {
        id: newUser.id,
        isInstructor: newUser.isInstructor,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = newUser._doc;
    const expiryDate = new Date(Number(new Date()) + 2592000000);
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: expiryDate,
      })
      .status(200)
      .send(info);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong email or password!"));

    const token = jwt.sign(
      {
        id: user.id,
        isInstructor: user.isInstructor,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    const expiryDate = new Date(Number(new Date()) + 2592000000);
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: expiryDate,
      })
      .status(200)
      .send(info);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res
      .clearCookie("accessToken", { sameSite: "none", secure: true })
      .status(200)
      .send("User has been logged out!");
  } catch (error) {
    next(error);
  }
};

export { register, login, logout };
