import React, { useState } from "react";
import CourseType from "../../components/createMultiStepComp/CourseType";
import CourseTitle from "../../components/createMultiStepComp/CourseTitle";
import CourseCategory from "../../components/createMultiStepComp/CourseCategory";
import { useNavigate } from "react-router-dom";

import "./CreateCourse.css";

const CreateCourse = () => {
  const [page, setPage] = useState(0);
  const router = useNavigate();

  const pageDisplay = () => {
    if (page === 0) {
      return <CourseType />;
    } else if (page === 1) {
      return <CourseTitle />;
    } else if (page === 2) {
      return <CourseCategory />;
    }
  };

  return (
    <div className="createCourse">
      <div className="createCourseProgress">
        <div
          style={{
            width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <div className="createCourseInner">
        <div className="createCourseContent">{pageDisplay()}</div>

        <div className="createCreateBottom">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
          >
            Previous
          </button>

          <button
            onClick={() => {
              if (page === 2) {
                router("/course/create/12332");
              }
              setPage((prev) => prev + 1);
            }}
            className="black"
          >
            {page === 2 ? "Create Course" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
