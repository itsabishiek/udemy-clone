import React, { useState } from "react";
import CreateCourseSidebar from "../../components/createCourseSidebar/CreateCourseSidebar";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import CreateCourseLanding from "../../components/createCourseLanding/CreateCourseLanding";
import CreateCourseIntent from "../../components/createCourseIntent/CreateCourseIntent";
import CreateCoursePricing from "../../components/createCoursePricing/CreateCoursePricing";

import "./CreateCourseDetails.css";

const CreateCourseDetails = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [page, setPage] = useState(0);

  const pageTitles = ["Intended learners", "Course landing page", "Pricing"];

  const pageDisplay = () => {
    if (page === 0) {
      return <CreateCourseIntent />;
    } else if (page === 1) {
      return <CreateCourseLanding />;
    } else if (page === 2) {
      return <CreateCoursePricing />;
    }
  };

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
        <CreateCourseSidebar setPage={setPage} />
      </div>
      <div className="createCourseRight">
        <div className="createCourseRightHeader">
          <h2>{pageTitles[page]}</h2>
        </div>
        <hr />

        {pageDisplay()}
      </div>
    </div>
  );
};

export default CreateCourseDetails;
