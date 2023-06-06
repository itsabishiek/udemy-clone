import User from "../models/user.model.js";

const createInstructor = async (req, res, next) => {
  try {
    const { teachOnUdemy } = req.body;
    if (teachOnUdemy) {
      await User.findByIdAndUpdate(
        req.body.userId,
        {
          $set: {
            isInstructor: true,
          },
        },
        {
          new: true,
        }
      );
    }
    res.status(200).send("Now, you are an instructor!");
  } catch (error) {
    next(error);
  }
};

export { createInstructor };
