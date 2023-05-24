import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = () => {
  return (
    <Link to="/course/123" className="courseCard">
      <img
        src="https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg"
        alt=""
      />
      <h3 className="courseTitle">
        {`React - The Complete Guide (incl Hooks, React Router)`}
      </h3>
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
        <h3>₹399</h3>
        <h3 className="courseActualPrice">₹3999</h3>
      </div>
    </Link>
  );
};

export default CourseCard;
