import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course._id}`} className="courseCard">
      <img src={course?.coverImage} alt="" />
      <h3 className="courseTitle">{course.title}</h3>
      <p className="courseAuthor">Steve Harrington</p>
      <div className="rating">
        <span className="ratingCount">4.9</span>
        <div>
          {Array(5)
            .fill()
            .map((item, i) => (
              <AiFillStar key={i} style={{ marginTop: 7 }} color="#e59819" />
            ))}
        </div>
        <span>{`(185,205)`}</span>
      </div>
      <div className="coursePrice">
        <h3>₹{course.coursePrice}</h3>
        <h3 className="courseActualPrice">₹1399</h3>
      </div>
    </Link>
  );
};

export default CourseCard;
