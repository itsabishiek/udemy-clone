import React from "react";
import { BsCircle } from "react-icons/bs";

import "./CreateCourseSidebar.css";

const CreateCourseSidebar = ({ setPage, handleSubmit }) => {
  return (
    <div className="createCourseSidebar">
      <div className="createSidebarItems">
        <h3>Plan a course</h3>
        <div className="createSidebarItem" onClick={() => setPage(0)}>
          <BsCircle />
          <p>Intended learners</p>
        </div>
        <div className="createSidebarItem">
          <BsCircle />
          <p>Course structure</p>
        </div>
        <div className="createSidebarItem">
          <BsCircle />
          <p>Setup & test video</p>
        </div>
      </div>
      <div className="createSidebarItems">
        <h3>Create your content</h3>
        <div className="createSidebarItem">
          <BsCircle />
          <p>Film & edit</p>
        </div>
        <div className="createSidebarItem">
          <BsCircle />
          <p>Curriculum</p>
        </div>
        <div className="createSidebarItem">
          <BsCircle />
          <p>Captions</p>
        </div>
      </div>
      <div className="createSidebarItems">
        <h3>Publish your course</h3>
        <div className="createSidebarItem" onClick={() => setPage(1)}>
          <BsCircle />
          <p>Course landing page</p>
        </div>
        <div className="createSidebarItem" onClick={() => setPage(2)}>
          <BsCircle />
          <p>Pricing</p>
        </div>
        <div className="createSidebarItem">
          <BsCircle />
          <p>Promotions</p>
        </div>
      </div>

      <button onClick={handleSubmit}>Submit for review</button>
    </div>
  );
};

export default CreateCourseSidebar;
