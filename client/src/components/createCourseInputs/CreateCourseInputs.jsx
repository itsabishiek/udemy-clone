import React from "react";
import "./CreateCourseInputs.css";

const CreateCourseInputs = ({ courseDetails, handleChange }) => {
  return (
    <div className="createCourseInputs">
      <div className="createCourseInput">
        <h4>Course title</h4>
        <input
          type="text"
          placeholder="Insert your course title"
          name="title"
          value={courseDetails.title}
          onChange={handleChange}
        />
        <div className="helperText">
          Your title should be a mix of attention-grabbing, informative, and
          optimized for search
        </div>
      </div>
      <div className="createCourseInput">
        <h4>Course subtitle</h4>
        <input
          type="text"
          placeholder="Insert your course subtitle"
          name="subtitle"
          value={courseDetails.subtitle}
          onChange={handleChange}
        />
        <div className="helperText">
          Use 1 or 2 related keywords, and mention 3-4 of the most important
          areas that you&apos;ve covered during your course.
        </div>
      </div>
      <div className="createCourseInput">
        <h4>Course description</h4>
        <textarea
          type="text"
          placeholder="Insert your course description"
          name="description"
          value={courseDetails.description}
          onChange={handleChange}
        />
      </div>
      <div className="createCourseInput">
        <h4>Basic Info</h4>
        <div className="basicInfo">
          <select
            name="language"
            value={courseDetails.language}
            onChange={handleChange}
          >
            <option value="English (US)">{`English (US)`}</option>
            <option value="Tamil">Tamil</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Japanese">Japanese</option>
          </select>
          <select
            name="level"
            value={courseDetails.level}
            onChange={handleChange}
          >
            <option value="Beginner Level">Beginner Level</option>
            <option value="Intermediate Level">Intermediate Level</option>
            <option value="Expert Level">Expert Level</option>
            <option value="All Levels">All Levels</option>
          </select>
          <select
            name="category"
            value={courseDetails.category}
            onChange={handleChange}
          >
            <option value="Development">Development</option>
            <option value="Business">Business</option>
            <option value="IT & Software">IT & Software</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Music">Music</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>
      </div>
      <div className="createCourseInput">
        <h4>What is primarily taught in your course?</h4>
        <input
          type="text"
          placeholder="e.g. Landscape Photography"
          name="primaryCourseTitle"
          value={courseDetails.primaryCourseTitle}
          onChange={handleChange}
        />
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
