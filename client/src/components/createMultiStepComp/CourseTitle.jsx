import React from "react";
import "./CreateMultiStepComp.css";

const CourseTitle = ({ title, setTitle }) => {
  return (
    <div className="createCourseTitle">
      <h1>How about a working title?</h1>
      <p>
        It&apos;s ok if you can&apos;t think of a good title now. You can change
        it later.
      </p>
      <div className="createCourseSearch">
        <input
          type="text"
          placeholder="e.g. Learn Photoshop CS6 from Scratch"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>60</p>
      </div>
    </div>
  );
};

export default CourseTitle;
