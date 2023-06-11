import Course from "../models/course.model.js";
import createError from "../utils/createError.js";

const createCourse = async (req, res, next) => {
  try {
    if (!req.isInstructor)
      return next(createError(403, "Only Instructors can create the courses."));

    const newCourse = new Course({
      userId: req.userId,
      ...req.body,
    });

    const savedCourse = await newCourse.save();

    res.status(201).send(savedCourse);
  } catch (error) {
    next(error);
  }
};

const getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) return next(createError(404, "Course not found!"));
    res.status(200).send(course);
  } catch (error) {
    next(error);
  }
};

const updateCourseDetails = async (req, res, next) => {
  try {
    const updateCourseDetails = await Course.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).send(updateCourseDetails);
  } catch (error) {
    next(error);
  }
};

export { createCourse, getCourse, updateCourseDetails };
