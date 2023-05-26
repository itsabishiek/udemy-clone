import React from "react";
import {
  AiFillStar,
  AiOutlineCalendar,
  AiOutlineFile,
  AiOutlineFileDone,
  AiOutlineTrophy,
} from "react-icons/ai";
import {
  MdLanguage,
  MdOutlineClosedCaption,
  MdSubtitles,
} from "react-icons/md";
import { BsCheck2, BsCode, BsPlayBtn } from "react-icons/bs";
import { RiFolderDownloadLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import "./CourseDetails.css";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  return (
    <div className="courseDetails">
      <div className="courseDetailsHeader">
        <div className="courseDetailsHeaderInner">
          <h1 className="courseTitle">
            {`React - The Complete Guide (incl Hooks, React Router, Redux)`}
          </h1>
          <p className="courseShortDesc">
            Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
            Redux, React Routing, Animations, Next.js and way more!
          </p>
          <div className="courseRating">
            <span className="ratingCount">4.9</span>
            <div>
              {Array(5)
                .fill()
                .map((item, i) => (
                  <AiFillStar
                    key={i}
                    style={{ marginTop: 7 }}
                    color="#e59819"
                  />
                ))}
            </div>
            <p className="courseTotRating">{`(185,205) ratings`}</p>
            <p className="courseTotStudents">738,422 students</p>
          </div>

          <div className="courseAuthor">
            Created by <p>Steve Harrington</p>
          </div>

          <div className="courseDetailsOthers">
            <div className="courseOthersItem">
              <AiOutlineCalendar />
              <p>Last updated 5/2023</p>
            </div>
            <div className="courseOthersItem">
              <MdLanguage />
              <p>English</p>
            </div>
            <div className="courseOthersItem">
              <MdSubtitles />
              <p>{`English [CC], Bulgarian [Auto]`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="courseDetailsContent">
        <div className="courseContentLeft">
          <div className="courseLearning">
            <h2>{`What you'll learn`}</h2>
            <div className="courseLearningInner">
              <div className="courseLearingItem">
                <BsCheck2 style={{ marginTop: 5 }} />
                <p>Build powerful, fast, user-friendly and reactive web apps</p>
              </div>
              <div className="courseLearingItem">
                <BsCheck2 style={{ marginTop: 5 }} />
                <p>
                  Provide amazing user experiences by leveraging the power of
                  JavaScript with ease
                </p>
              </div>
              <div className="courseLearingItem">
                <BsCheck2 style={{ marginTop: 5 }} />
                <p>
                  Apply for high-paid jobs or work as a freelancer in one the
                  most-demanded sectors you can find in web dev right now
                </p>
              </div>
              <div className="courseLearingItem">
                <BsCheck2 style={{ marginTop: 5 }} />
                <p>Learn all about React Hooks and React Components</p>
              </div>
            </div>
          </div>

          <div className="courseIncludes">
            <h2>This course includes:</h2>
            <div className="courseIncludesInner">
              <div className="courseIncludesHolder">
                <div className="courseIncludesItem">
                  <BsPlayBtn fontSize="20px" />
                  <p>48 hours on-demand video</p>
                </div>
                <div className="courseIncludesItem">
                  <RiFolderDownloadLine fontSize="20px" />
                  <p>95 downloadedable resources</p>
                </div>
                <div className="courseIncludesItem">
                  <FaMobileAlt fontSize="20px" />
                  <p>Access on mobile and TV</p>
                </div>
                <div className="courseIncludesItem">
                  <AiOutlineTrophy fontSize="20px" />
                  <p>Cerficate of completion</p>
                </div>
              </div>
              <div className="courseIncludesHolder">
                <div className="courseIncludesItem">
                  <AiOutlineFile fontSize="20px" />
                  <p>50 articles</p>
                </div>
                <div className="courseIncludesItem">
                  <BsCode fontSize="20px" />
                  <p>13 coding exercises</p>
                </div>
                <div className="courseIncludesItem">
                  <AiOutlineFileDone fontSize="20px" />
                  <p>Assignments</p>
                </div>
                <div className="courseIncludesItem">
                  <MdOutlineClosedCaption fontSize="20px" />
                  <p>Closed captions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="courseRequirements">
            <h2>Requiements</h2>
            <ul>
              <li>
                JavaScript + HTML + CSS fundamentals are absolutely required
              </li>
              <li>
                {`You DON'T need to be a JavaScript expert to succeed in this
                course!`}
              </li>
              <li>
                ES6+ JavaScript knowledge is beneficial but not a must-have
              </li>
              <li>
                NO prior React or any other JS framework experience is required!
              </li>
            </ul>
          </div>

          <div className="courseDescription">
            <h2>Description</h2>
            <p>
              {`This course is fully up-to-date with React 18 (the latest version
              of React)! It was completely updated and re-recorded from the
              ground up - it teaches the very latest version of React with all
              the core, modern features you need to know! --- This course also
              comes with two paths which you can take: The "complete" path (full
              >40h course) and the "summary" path (~4h summary module) - you can
              choose the path that best fits your time requirements! :-) ---
              React.js is THE most popular JavaScript library you can use and
              learn these days to build modern, reactive user interfaces for the
              web. This course teaches you React in-depth, from the ground up,
              step by step by diving into all the core basics, exploring tons of
              examples and also introducing you to advanced concepts as well.
              You'll get all the theory, tons of examples and demos, assignments
              and exercises and tons of important knowledge that is skipped by
              most other resources - after all, there is a reason why this
              course is that huge! :) And in case you don't even know why you
              would want to learn React and you're just here because of some ad
              or "the algorithm" - no worries: ReactJS is a key technology as a
              web developer and in this course I will also explain WHY it's that
              important!`}
            </p>
          </div>
        </div>

        <div className="courseContentRightWrapper">
          <div className="courseContentRight">
            <div className="courseContentRightImg">
              <img
                src="	https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg"
                alt=""
              />
            </div>

            <div className="courseDetailsHeaderMobile">
              <div className="courseDetailsHeaderInner">
                <h1 className="courseTitle">
                  {`React - The Complete Guide (incl Hooks, React Router, Redux)`}
                </h1>
                <p className="courseShortDesc">
                  Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
                  Redux, React Routing, Animations, Next.js and way more!
                </p>
                <div className="courseRating">
                  <span className="ratingCount">4.9</span>
                  <div>
                    {Array(5)
                      .fill()
                      .map((item, i) => (
                        <AiFillStar
                          key={i}
                          style={{ marginTop: 7 }}
                          color="#e59819"
                        />
                      ))}
                  </div>
                  <p className="courseTotRating">{`(185,205) ratings`}</p>
                  <p className="courseTotStudents">738,422 students</p>
                </div>

                <div className="courseAuthor">
                  Created by <p>Steve Harrington</p>
                </div>

                <div className="courseDetailsOthers">
                  <div className="courseOthersItem">
                    <AiOutlineCalendar />
                    <p>Last updated 5/2023</p>
                  </div>
                  <div className="courseOthersItem">
                    <MdLanguage />
                    <p>English</p>
                  </div>
                  <div className="courseOthersItem">
                    <MdSubtitles />
                    <p>{`English [CC], Bulgarian [Auto]`}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="courseContentRightInner">
              <div className="courseSubscription">
                <h3>{`Subscribe to Udemy's top courses`}</h3>
                <p>
                  Get this course, plus 8,000+ of our top-rated courses, with
                  Personal Plan. Learn more
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "5px",
                  }}
                >
                  <button>Start subscription</button>
                  <p className="courseHelperText">
                    ₹829 per month. Cancel anytime.
                  </p>
                </div>
              </div>

              <div className="courseBuyOr">
                <hr />
                <p>or</p>
                <hr />
              </div>

              <div className="coursePrice">
                <h3>₹3,399</h3>
                <button>Buy this course</button>
                <p className="courseHelperText">
                  30-Days Money-Back Guarantee.
                </p>
                <p className="courseHelperText">Full Lifetime Access.</p>
              </div>

              <div className="courseContentRightLinks">
                <Link to="/">Share</Link>
                <Link to="/">Gift this course</Link>
                <Link to="/">Apply coupon</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
