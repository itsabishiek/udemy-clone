import React, { useState } from "react";
import "./Review.css";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";

const ReviewInput = () => {
  const { courseId } = useParams();
  const [ratingCount, setRatingCount] = useState(1);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePostReview = async () => {
    try {
      setLoading(true);
      await newRequest.post("/reviews", {
        courseId,
        review,
        starRating: ratingCount,
      });

      setReview("");
      window.location.reload();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="reviewInput">
      <div className="reviewInputHeader">
        <h2>Add a review</h2>
        <div className="reviewInputRating">
          <i>Rate this course</i>
          <div>
            {[...Array(5)].map((item, i) => {
              i += 1;
              return (
                <button
                  type="button"
                  key={i}
                  className={i <= ratingCount ? "ratingOn" : "ratingOff"}
                  onClick={() => setRatingCount(i)}
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <textarea
        placeholder="Write your opinion!"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button className="reviewSubmit" onClick={handlePostReview}>
        {loading ? "..." : "Submit"}
      </button>
    </div>
  );
};

export default ReviewInput;
