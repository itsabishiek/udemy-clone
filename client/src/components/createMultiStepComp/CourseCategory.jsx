import React from "react";
import "./CreateMultiStepComp.css";

const CourseCategory = () => {
  return (
    <div className="courseCateogry">
      <h1>What category best fits the knowledge you&apos;ll share?</h1>
      <p>
        If you&apos;re not sure about the right category, you can change it
        later.
      </p>

      <select>
        <option value="business">Business</option>
        <option value="development">Development</option>
        <option value="finance_accounting">Finance & Accounting</option>
        <option value="it_software">IT & Software</option>
        <option value="design">Design</option>
        <option value="marketing">Marketing</option>
        <option value="lifestyle">Lifestyle</option>
        <option value="music">Music</option>
        <option value="photography_video">Photography & Video</option>
      </select>
    </div>
  );
};

export default CourseCategory;
