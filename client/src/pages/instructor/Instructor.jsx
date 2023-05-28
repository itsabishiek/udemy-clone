import React from "react";
import { IoSearchSharp } from "react-icons/io5";

import "./Instructor.css";
import { Link } from "react-router-dom";

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
    </div>
  );
};

export default Instructor;
