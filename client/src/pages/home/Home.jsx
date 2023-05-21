import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Home.css";
import Trusted from "../../components/trusted/Trusted";

const Home = () => {
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
        <div className="mobileSearch">
          <input type="text" placeholder="What do you want to learn?" />
          <AiOutlineSearch fontSize="20px" />
        </div>

        <div className="courseText">
          <h1>A board selection of courses</h1>
          <p>
            Choose from over 210,000 online video courses with new additions
            published every month
          </p>
        </div>

        <Trusted />
      </div>
    </div>
  );
};

export default Home;
