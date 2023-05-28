import React from "react";
import "./CreateCourseInputs.css";

const CreateCourseInputs = () => {
  return (
    <div className="createCourseInputs">
      <div className="createCourseInput">
        <h4>Course title</h4>
        <input type="text" placeholder="Insert your course title" />
        <div className="helperText">
          Your title should be a mix of attention-grabbing, informative, and
          optimized for search
        </div>
      </div>
      <div className="createCourseInput">
        <h4>Course subtitle</h4>
        <input type="text" placeholder="Insert your course subtitle" />
        <div className="helperText">
          Use 1 or 2 related keywords, and mention 3-4 of the most important
          areas that you&apos;ve covered during your course.
        </div>
      </div>
      <div className="createCourseInput">
        <h4>Course description</h4>
        <textarea type="text" placeholder="Insert your course description" />
      </div>
      <div className="createCourseInput">
        <h4>Basic Info</h4>
        <div className="basicInfo">
          <select>
            <option value="english">{`English (US)`}</option>
            <option value="tamil">Tamil</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="japanese">Japanese</option>
          </select>
          <select placeholder="-- Select level --">
            <option value="tamil">Beginner Level</option>
            <option value="spanish">Intermediate Level</option>
            <option value="french">Expert Level</option>
            <option value="japanese">All Levels</option>
          </select>
          <select placeholder="-- Select Category --">
            <option value="development">Development</option>
            <option value="business">Business</option>
            <option value="it_software">IT & Software</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="music">Music</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
        </div>
      </div>
      <div className="createCourseInput">
        <h4>What is primarily taught in your course?</h4>
        <input type="text" placeholder="e.g. Landscape Photography" />
      </div>

      <div className="createCourseUpload">
        <h4>Course image</h4>
        <div className="selectImage">
          <img
            src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
            alt=""
          />
          <div className="imgSelect">
            <span>
              Upload your course image here. It must meet our course image
              quality standards to be accepted. Important guidelines: 750x422
              pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
            </span>
            <input type="file" />
          </div>
        </div>
      </div>

      <div className="createCourseUpload">
        <h4>Promotional video</h4>
        <div className="selectImage">
          <img
            src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
            alt=""
          />
          <div className="imgSelect">
            <span>
              Your promo video is a quick and compelling way for students to
              preview what they&apos;ll learn in your course. Students
              considering your course are more likely to enroll if your promo
              video is well-made. Learn how to make your promo video awesome!
            </span>
            <input type="file" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourseInputs;
