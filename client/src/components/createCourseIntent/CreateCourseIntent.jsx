import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./CreateCourseIntent.css";

const CreateCourseIntent = ({
  requirements,
  setRequirements,
  courseLearning,
  setCourseLearning,
}) => {
  const handleAddLearningField = () => {
    const newVal = [...courseLearning, []];
    setCourseLearning(newVal);
  };
  const handleAddRequireField = () => {
    const newVal = [...requirements, []];
    setRequirements(newVal);
  };

  const handleChangeLearning = (onChangeVal, i) => {
    const inputData = [...courseLearning];
    inputData[i] = onChangeVal.target.value;
    setCourseLearning(inputData);
  };
  const handleChangeRequire = (onChangeVal, i) => {
    const inputData = [...requirements];
    inputData[i] = onChangeVal.target.value;
    setRequirements(inputData);
  };

  const handleDeleteLearning = (i) => {
    const deleteVal = [...courseLearning];
    deleteVal.splice(i, 1);
    setCourseLearning(deleteVal);
  };
  const handleDeleteRequire = (i) => {
    const deleteVal = [...requirements];
    deleteVal.splice(i, 1);
    setRequirements(deleteVal);
  };

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
          {courseLearning.map((item, i) => (
            <div key={i} className="courseIntentInput">
              <input
                type="text"
                placeholder="Example: Define the roles and responsibilities of a project manager"
                value={item}
                onChange={(e) => handleChangeLearning(e, i)}
              />
              <button onClick={() => handleDeleteLearning(i)}>
                <AiOutlineClose size={15} />
              </button>
            </div>
          ))}

          <button onClick={handleAddLearningField}>
            Add more to your response
          </button>
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
          {requirements?.map((item, i) => (
            <div key={i} className="courseIntentInput">
              <input
                type="text"
                placeholder="Example: No programming experience needed. You will learn everything you need to know"
                value={item}
                onChange={(e) => handleChangeRequire(e, i)}
              />
              <button onClick={() => handleDeleteRequire(i)}>
                <AiOutlineClose size={15} />
              </button>
            </div>
          ))}

          <button onClick={handleAddRequireField}>
            Add more to your response
          </button>
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
