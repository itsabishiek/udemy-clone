import React, { useEffect, useState } from "react";
import "./Review.css";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import moment from "moment";
import newRequest from "../../utils/newRequest";
import getCurrentUser from "../../utils/getCurrentUser";

const ReviewItem = ({ item, reviews, setReviews }) => {
  const currentUser = getCurrentUser();
  const [userData, setUserData] = useState();

  const getUserByReview = async () => {
    try {
      const res = await newRequest.get(`/users/${item?.userId}`);
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await newRequest.delete(`/reviews/${reviewId}`);

      setReviews(reviews.filter((item) => item._id !== reviewId));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserByReview();
  }, []);

  return (
    <div className="reviewItem">
      <div className="reviewItemTop">
        <div className="reviewItemInner">
          <div className="reviewUserAvatar">{userData?.name[0]}</div>
          <div>
            <h4>{userData?.name}</h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div>
                {Array(item.starRating)
                  .fill()
                  .map((item, i) => (
                    <AiFillStar
                      key={i}
                      style={{ marginTop: 7 }}
                      color="#e59819"
                    />
                  ))}
              </div>
              <i>{moment(item.createdAt).fromNow()}</i>
            </div>
          </div>
        </div>

        {currentUser._id === item.userId ? (
          <AiFillDelete
            size="20px"
            style={{ cursor: "pointer" }}
            onClick={() => handleDeleteReview(item._id)}
          />
        ) : (
          <BsThreeDotsVertical size="20px" style={{ cursor: "pointer" }} />
        )}
      </div>

      <div className="reviewContent">
        <p>{item.review}</p>
      </div>

      <div className="reviewItemBottom">
        <p>Helpful?</p>
        <FiThumbsUp style={{ cursor: "pointer" }} />
        <FiThumbsDown style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default ReviewItem;
