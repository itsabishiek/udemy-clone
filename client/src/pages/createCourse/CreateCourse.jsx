import React from "react";
import "./CreateCourse.css";
import { Link } from "react-router-dom";

const CreateCourse = () => {
  return (
    <div className="createCourse">
      <Link to="/course/create/123">Create Details</Link>
    </div>
  );
};

export default CreateCourse;
