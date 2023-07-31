import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import getCurrentUser from "../../utils/getCurrentUser";

import "./Instructor.css";
import Loader from "../../components/loader/Loader";

const Instructor = () => {
  const currentUser = getCurrentUser();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCourses = async () => {
    try {
      setLoading(true);
      const courses = await newRequest.get(
        `/courses?userId=${currentUser._id}`
      );

      setCourses(courses.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="instructor">
      <div className="instructorTop">
        <h1>Courses</h1>
        <Link to="/course/create">
          <button>New course</button>
        </Link>
      </div>
      <div className="instructorFilter">
        <div className="instructorFilterSearch">
          <input type="text" placeholder="Search for courses" />
          <span>
            <IoSearchSharp color="white" fontSize="18px" />
          </span>
        </div>
        <div className="instructorFilterSelect">
          <select>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>

      <div className="coursesList">
        {courses.length === 0 ? (
          <>
            {loading ? (
              <Loader />
            ) : (
              <div className="coursesFallback">
                <h3>Created courses will appear here.</h3>
                <Link to="/course/create">Start Course</Link>
              </div>
            )}
          </>
        ) : (
          <>
            {courses.map((course) => (
              <Link
                to={`/course/create/${course._id}`}
                className="coursePreview"
                key={course._id}
              >
                <div className="coursePreviewLeft">
                  <img
                    src="https://s.udemycdn.com/course/200_H/placeholder.jpg"
                    alt=""
                  />
                  <div className="coursePreviewLeftInner">
                    <h3>{course.title}</h3>
                    <p>Public</p>
                  </div>
                </div>

                <div className="coursePreviewRight">
                  <h3>Finish your course</h3>
                  <div className="coursePreviewRightInner"></div>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Instructor;
