import React from "react";
import "./CreateCourseIntent.css";

const CreateCourseIntent = () => {
  return (
    <div className="createCourseContent">
      <span>
        The following descriptions will be publicly visible on your{" "}
        <a href="#">Course Landing Page</a> and will have a direct impact on
        your course performance. These descriptions will help learners decide if
        your course is right for them.
      </span>

      <div className="courseIntent">
        <h3>What will students learn in your course?</h3>
        <span>
          You must enter at least 4{" "}
          <a href="#">learning objectives or outcomes</a> that learners can
          expect to achieve after completing your course.
        </span>

        <div className="courseIntentInputs">
          <input
            type="text"
            placeholder="Example: Define the roles and responsibilities of a project manager"
          />
          <input
            type="text"
            placeholder="Example: Estimate project timelines and budgets"
          />
          <input
            type="text"
            placeholder="Example: Identify and manage project risks"
          />
          <input
            type="text"
            placeholder="Example: Complete a case study to manage a project from conception to completion"
          />
        </div>
      </div>

      <div className="courseIntent">
        <h3>
          What are the requirements or prerequisites for taking your course?
        </h3>
        <span>
          List the required skills, experience, tools or equipment learners
          should have prior to taking your course. If there are no requirements,
          use this space as an opportunity to lower the barrier for beginners.
        </span>

        <div className="courseIntentInputs">
          <input
            type="text"
            placeholder="Example: No programming experience needed. You will learn everything you need to know"
          />
        </div>
      </div>

      <div className="courseIntent">
        <h3>Who is this course for?</h3>
        <span>
          Write a clear description of the <a href="#">intended learners</a> for
          your course who will find your course content valuable. This will help
          you attract the right learners to your course.
        </span>

        <div className="courseIntentInputs">
          <input
            type="text"
            placeholder="Example: Beginner Python developer curious about data science"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateCourseIntent;
