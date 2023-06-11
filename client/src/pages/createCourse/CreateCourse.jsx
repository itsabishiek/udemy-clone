import React, { useState } from "react";
import CourseType from "../../components/createMultiStepComp/CourseType";
import CourseTitle from "../../components/createMultiStepComp/CourseTitle";
import CourseCategory from "../../components/createMultiStepComp/CourseCategory";
import newRequest from "../../utils/newRequest";

import "./CreateCourse.css";

const CreateCourse = () => {
  const [page, setPage] = useState(0);
  const [type, setType] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleCreateCourse = async () => {
    try {
      const res = await newRequest.post("/course/create", {
        title: title,
        type: type,
        category: category,
      });

      window.location.href = `/course/create/${res.data._id}`;
    } catch (error) {
      console.log(error);
    }
  };

  const pageDisplay = () => {
    if (page === 0) {
      return <CourseType type={type} setType={setType} />;
    } else if (page === 1) {
      return <CourseTitle title={title} setTitle={setTitle} />;
    } else if (page === 2) {
      return <CourseCategory category={category} setCategory={setCategory} />;
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
              setPage((prev) => prev + 1);
              if (page === 2) {
                handleCreateCourse();
              }
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
