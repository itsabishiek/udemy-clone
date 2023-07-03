import Course from "../models/course.model.js";

const getAllCourses = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.category && { category: q.category }),
    ...((q.min || q.max) && {
      coursePrice: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };

  try {
    const courses = await Course.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(courses);
  } catch (error) {
    next(error);
  }
};

export { getAllCourses };
