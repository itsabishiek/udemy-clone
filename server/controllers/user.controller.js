import User from "../models/user.model.js";

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);

    const { password, ...info } = user._doc;
    res.status(200).send(info);
  } catch (error) {
    next(error);
  }
};

export { getUser };
