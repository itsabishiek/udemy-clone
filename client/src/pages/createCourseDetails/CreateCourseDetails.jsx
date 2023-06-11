import React, { useEffect, useState } from "react";
import CreateCourseSidebar from "../../components/createCourseSidebar/CreateCourseSidebar";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import CreateCourseLanding from "../../components/createCourseLanding/CreateCourseLanding";
import CreateCourseIntent from "../../components/createCourseIntent/CreateCourseIntent";
import CreateCoursePricing from "../../components/createCoursePricing/CreateCoursePricing";

import "./CreateCourseDetails.css";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";

const CreateCourseDetails = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [page, setPage] = useState(0);
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState({
    title: "",
    type: "",
    category: "",
    subtitle: "",
    description: "",
    language: "",
    level: "",
    primaryCourseTitle: "",
    coverImage: "",
    promoVideo: "",
    coursePrice: "",
    userId: "",
  });

  const handleChange = (e) => {
    setCourseDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getCreatedCourse = async () => {
    try {
      const res = await newRequest.get(`/course/create/${courseId}`);
      setCourseDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(courseDetails);

  useEffect(() => {
    getCreatedCourse();
    setCourseDetails((prev) => ({
      ...prev,
      title: courseDetails.title,
      type: courseDetails.type,
      category: courseDetails.category,
      subtitle: courseDetails.subtitle,
      description: courseDetails.description,
      language: courseDetails.language,
      level: courseDetails.level,
      primaryCourseTitle: courseDetails.primaryCourseTitle,
      coverImage: courseDetails.coverImage,
      promoVideo: courseDetails.promoVideo,
      coursePrice: courseDetails.coursePrice,
      userId: courseDetails.userId,
    }));
  }, []);

  const pageTitles = ["Intended learners", "Course landing page", "Pricing"];

  const pageDisplay = () => {
    if (page === 0) {
      return <CreateCourseIntent />;
    } else if (page === 1) {
      return (
        <CreateCourseLanding
          courseDetails={courseDetails}
          handleChange={handleChange}
        />
      );
    } else if (page === 2) {
      return (
        <CreateCoursePricing
          courseDetails={courseDetails}
          handleChange={handleChange}
        />
      );
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
