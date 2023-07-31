import React from "react";
import Loading from "../loader/Loading";

import "./CreateCoursePricing.css";

const CreateCoursePricing = ({
  courseDetails,
  handleChange,
  handleSubmit,
  submitting,
}) => {
  return (
    <div className="createCourseContent">
      <div className="createCoursePricing">
        <h3>Course Price Tier</h3>
        <span>
          {`Please select the price tier for your course below and click 'Save'. The
        list price that students will see in other currencies is determined
        using the `}{" "}
          <a href="#">price tier matrix.</a>
        </span>
        <span>
          If you intend to offer your course for free, the total length of video
          content must be less than 2 hours.
        </span>

        <div className="createCoursePricingInputs">
          <select>
            <option value="inr">INR</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
          <select
            name="coursePrice"
            value={courseDetails.coursePrice}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="799">₹799 (tier 1)</option>
            <option value="999">₹999 (tier 2)</option>
            <option value="1299">₹1299 (tier 3)</option>
            <option value="1699">₹1699 (tier 4)</option>
          </select>
          <button onClick={handleSubmit}>
            {submitting ? <Loading width={20} height={20} /> : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCoursePricing;
