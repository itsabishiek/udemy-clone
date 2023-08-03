import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Trusted from "../../components/trusted/Trusted";
import CourseCard from "../../components/courseCard/CourseCard";
import newRequest from "../../utils/newRequest";
import Carousel from "better-react-carousel";
import Slide from "../../components/slide/Slide";
import Loader from "../../components/loader/Loader";

import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const courses = await newRequest.get(`/courses`);
      setCourses(courses.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="home">
      <div className="homeBanner">
        <img
          src="	https://img-c.udemycdn.com/notices/web_carousel_slide/image/187c1cf3-014b-498c-989a-ea00c7a9ee6b.png"
          alt=""
        />
      </div>
      <div className="homeBannerContents">
        <h1>A sale as big as your dreams</h1>
        <p>
          Courses start at ₹389 through May 24. Opportunities like this only
          come once in a season.
        </p>
      </div>

      <div className="homeContents">
        <div style={{ padding: "0px 24px" }}>
          <div className="mobileSearch">
            <input type="text" placeholder="What do you want to learn?" />
            <AiOutlineSearch fontSize="20px" />
          </div>
        </div>

        <div className="courseText">
          <h1>A board selection of courses</h1>
          <p>
            Choose from over 210,000 online video courses with new additions
            published every month
          </p>
        </div>

        <div>
          <h2 style={{ marginBottom: "10px", padding: "0px 24px" }}>
            Students are viewing
          </h2>

          {courses.length === 0 ? (
            <Loader />
          ) : (
            <Slide>
              {courses?.map((course) => (
                <Carousel.Item key={course._id}>
                  <CourseCard course={course} />
                </Carousel.Item>
              ))}
            </Slide>
          )}
        </div>

        <Trusted />
      </div>
    </div>
  );
};

export default Home;
