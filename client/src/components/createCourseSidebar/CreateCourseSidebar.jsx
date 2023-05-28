import React from "react";
import { BsCircle } from "react-icons/bs";

import "./CreateCourseSidebar.css";
import { Link } from "react-router-dom";

const CreateCourseSidebar = () => {
  return (
    <div className="createCourseSidebar">
      <div className="createSidebarItems">
        <h3>Plan a course</h3>
        <Link to="/" className="createSidebarItem">
          <BsCircle />
          <p>Intended learners</p>
        </Link>
        <Link to="/" className="createSidebarItem">
          <BsCircle />
          <p>Course structure</p>
        </Link>
        <Link to="/" className="createSidebarItem">
          <BsCircle />
          <p>Setup & test video</p>
        </Link>
      </div>
      <div className="createSidebarItems">
        <h3>Create your content</h3>
        <Link to="/" className="createSidebarItem">
          <BsCircle />
          <p>Film & edit</p>
        </Link>
        <Link to="/" className="createSidebarItem">
          <BsCircle />
          <p>Curriculum</p>
        </Link>
        <Link to="/" className="createSidebarItem">
          <BsCircle />
          <p>Captions</p>
        </Link>
      </div>
      <div className="createSidebarItems">
        <h3>Publish your course</h3>
        <Link to="/" className="createSidebarItem">
          <BsCircle />
          <p>Course landing page</p>
        </Link>
        <Link to="/" className="createSidebarItem">
          <BsCircle />
          <p>Pricing</p>
        </Link>
        <Link to="/" className="createSidebarItem">
          <BsCircle />
          <p>Promotions</p>
        </Link>
      </div>

      <button>Submit for review</button>
    </div>
  );
};

export default CreateCourseSidebar;
