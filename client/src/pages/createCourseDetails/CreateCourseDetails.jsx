import React, { useState } from "react";
import CreateCourseSidebar from "../../components/createCourseSidebar/CreateCourseSidebar";
import CreateCourseInputs from "../../components/createCourseInputs/CreateCourseInputs";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import "./CreateCourseDetails.css";

const CreateCourseDetails = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="createCourseDetails">
      <div className="hammenu">
        <AiOutlineMenuUnfold
          fontSize="20px"
          onClick={() => setShowMenu(!showMenu)}
        />
        <button>Submit for review</button>
      </div>
      <div
        className="createCourseLeft"
        style={showMenu ? { display: "none" } : { display: "flex" }}
      >
        <CreateCourseSidebar />
      </div>
      <div className="createCourseRight">
        <div className="createCourseRightHeader">
          <h2>Course landing page</h2>
        </div>
        <hr />
        <div className="createCourseContent">
          <span>
            Your course landing page is crucial to your success on Udemy. If
            it&apos;s done right, it can also help you gain visibility in search
            engines like Google. As you complete this section, think about
            creating a compelling Course Landing Page that demonstrates why
            someone would want to enroll in your course.{" "}
            <a href="#">Learn more about creating your course landing page</a>{" "}
            and <a href="#">course title standards</a>.
          </span>

          <CreateCourseInputs />
        </div>
      </div>
    </div>
  );
};

export default CreateCourseDetails;
