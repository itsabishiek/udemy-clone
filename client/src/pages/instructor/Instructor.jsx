import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./Instructor.css";

const Instructor = () => {
  return (
    <div className="instructor">
      <div className="instructorTop">
        <h1>Courses</h1>
        <Link to="/course/create">
          <button>New course</button>
        </Link>
      </div>
      <div className="instructorFilter">
        <div className="instructorFilterSearch">
          <input type="text" placeholder="Search for courses" />
          <span>
            <IoSearchSharp color="white" fontSize="18px" />
          </span>
        </div>
        <div className="instructorFilterSelect">
          <select>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>

      <div className="coursePreview">
        <div className="coursePreviewLeft">
          <img
            src="https://s.udemycdn.com/course/200_H/placeholder.jpg"
            alt=""
          />
          <div className="coursePreviewLeftInner">
            <h3>Learn Typescript with ease.</h3>
            <p>Public</p>
          </div>
        </div>

        <div className="coursePreviewRight">
          <h3>Finish your course</h3>
          <div className="coursePreviewRightInner"></div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
