import React, { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";
import { Link } from "react-router-dom";
import moment from "moment";
import "./CourseEnrolled.css";
import Loader from "../../components/loader/Loader";

const CourseEnrolled = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const getEnrolledCourses = async () => {
    try {
      setLoading(true);
      const res = await newRequest.get("/orders");

      setEnrolledCourses(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnrolledCourses();
  }, []);

  // console.log(enrolledCourses);

  return (
    <div className="courseEnrolled">
      <h2>Courses Enrolled</h2>

      <div className="enrolledCoursesItems">
        {enrolledCourses.length !== 0 ? (
          <>
            {enrolledCourses.map((course) => (
              <Link
                to={`/course/${course.courseId}`}
                className="enrolledCoursesItem"
                key={course._id}
              >
                <div className="enrolledCoursesLeft">
                  <img src={course.img} alt="" />
                  <div>
                    <h3>{course.title}</h3>
                    <i>{moment(course.updatedAt).fromNow()}</i>
                  </div>
                </div>
                <h3>₹{course.price}</h3>
              </Link>
            ))}
          </>
        ) : (
          <>
            {loading ? (
              <Loader />
            ) : (
              <div
                style={{
                  display: "flex",
                  height: "100px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>No Courses Enrolled Yet!</h3>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseEnrolled;
