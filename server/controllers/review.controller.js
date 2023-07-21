import Review from "../models/review.model.js";
import Course from "../models/course.model.js";
import createError from "../utils/createError.js";

const createReview = async (req, res, next) => {
  try {
    if (req.isInstructor) {
      return next(createError(403, "Instructors can't create reviews!"));
    }

    const newReview = new Review({
      userId: req.userId,
      courseId: req.body.courseId,
      review: req.body.review,
      starRating: req.body.starRating,
    });

    const isReviewed = await Review.findOne({
      userId: req.userId,
      courseId: req.body.courseId,
    });

    if (isReviewed) {
      return next(
        createError(403, "You have already created a review for this course!")
      );
    }

    const savedReview = await newReview.save();

    await Course.findByIdAndUpdate(req.body.courseId, {
      $inc: { totalStars: req.body.starRating, starNumber: 1 },
    });

    res.status(201).send(savedReview);
  } catch (error) {
    next(error);
  }
};

const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ courseId: req.params.courseId });

    res.status(200).send(reviews);
  } catch (error) {
    next(error);
  }
};

const deleteReview = async (req, res, next) => {
  try {
    await Review.findByIdAndDelete(req.params.id);

    res.status(200).send("Review has been deleted!");
  } catch (error) {
    next(error);
  }
};

export { createReview, getReviews, deleteReview };
