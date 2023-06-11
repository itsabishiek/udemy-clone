import React from "react";
import "./CreateMultiStepComp.css";

const CourseCategory = ({ category, setCategory }) => {
  console.log(category);

  return (
    <div className="courseCateogry">
      <h1>What category best fits the knowledge you&apos;ll share?</h1>
      <p>
        If you&apos;re not sure about the right category, you can change it
        later.
      </p>

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="Business">Business</option>
        <option value="Development">Development</option>
        <option value="Finance & Accounting">Finance & Accounting</option>
        <option value="IT & Software">IT & Software</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Music">Music</option>
        <option value="Photography & Video">Photography & Video</option>
      </select>
    </div>
  );
};

export default CourseCategory;
