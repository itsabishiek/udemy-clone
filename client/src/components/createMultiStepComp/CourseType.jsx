import React from "react";
import { ImDisplay } from "react-icons/im";
import { FaListAlt } from "react-icons/fa";

import "./CreateMultiStepComp.css";

const CourseType = ({ type, setType }) => {
  return (
    <div className="courseType">
      <h1>
        First, let&apos;s find out what type of course you&apos;re making.
      </h1>

      <div className="courseTypeCards">
        <div
          className="courseTypeCard"
          onClick={() => setType("Course")}
          style={
            type === "Course"
              ? { border: "2px solid black" }
              : { border: "1px solid #d1d7dc" }
          }
        >
          <ImDisplay fontSize="30px" />
          <h3>Course</h3>
          <p>
            Create rich learning experiences with the help of video lectures,
            quizzes, coding exercises, etc.
          </p>
        </div>
        <div
          className="courseTypeCard"
          onClick={() => setType("Practise Test")}
          style={
            type === "Practise Test"
              ? { border: "2px solid black" }
              : { border: "1px solid #d1d7dc" }
          }
        >
          <FaListAlt fontSize="30px" />
          <h3>Pratice Test</h3>
          <p>
            Help students prepare for certification exams by providing pratice
            questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseType;
