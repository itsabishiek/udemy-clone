import React, { useEffect, useState } from "react";
import ReviewInput from "./ReviewInput";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import "./Review.css";
import ReviewItem from "./ReviewItem";

const Review = () => {
  const { courseId } = useParams();
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const res = await newRequest.get(`/reviews/${courseId}`);
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, [courseId]);

  return (
    <div className="reviews">
      {reviews.length !== 0 && (
        <>
          <h2>Reviews</h2>

          <div className="reviewItems">
            {reviews?.map((item) => (
              <ReviewItem
                key={item._id}
                item={item}
                reviews={reviews}
                setReviews={setReviews}
              />
            ))}
          </div>
        </>
      )}

      <ReviewInput />
    </div>
  );
};

export default Review;
