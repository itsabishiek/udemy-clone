import React from "react";
import { Link } from "react-router-dom";

import "./CreateCourse.css";

const CreateCourse = () => {
  return (
    <div className="createCourse">
      <Link to="/course/create/123">Create Details</Link>
    </div>
  );
};

export default CreateCourse;
