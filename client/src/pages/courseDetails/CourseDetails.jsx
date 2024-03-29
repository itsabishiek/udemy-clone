import React, { useEffect, useState } from "react";
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
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";

import "./CourseDetails.css";
import Review from "../../components/review/Review";
import BackdropLoader from "../../components/loader/BackdropLoader";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState([]);
  const [courseAuthor, setCourseAuthor] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const getCourseDetails = async () => {
    try {
      const courseDetails = await newRequest.get(`/course/${courseId}`);
      const courseAuthor = await newRequest.get(
        `/users/${courseDetails.data.userId}`
      );
      const orderDetails = await newRequest.get(`/orders/${courseId}`);

      setCourseDetails(courseDetails.data);
      setCourseAuthor(courseAuthor.data);
      setOrderDetails(orderDetails.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourseDetails();
    scroll(0, 0);
  }, []);

  // console.log(orderDetails);

  return (
    <>
      {courseDetails?.length === 0 && <BackdropLoader />}
      <div className="courseDetails">
        <div className="courseDetailsHeader">
          <div className="courseDetailsHeaderInner">
            <h1 className="courseTitle">{courseDetails?.title}</h1>
            <p className="courseShortDesc">{courseDetails?.subtitle}</p>
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
              Created by{" "}
              <Link to={`/instructor/${courseAuthor?._id}`}>
                {courseAuthor?.name}
              </Link>
            </div>

            <div className="courseDetailsOthers">
              <div className="courseOthersItem">
                <AiOutlineCalendar />
                <p>Last updated 5/2023</p>
              </div>
              <div className="courseOthersItem">
                <MdLanguage />
                <p>{courseDetails?.language}</p>
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
            {courseDetails?.courseLearning?.length > 0 && (
              <div className="courseLearning">
                <h2>{`What you'll learn`}</h2>
                <div className="courseLearningInner">
                  {courseDetails?.courseLearning.map((item, i) => (
                    <div className="courseLearingItem" key={i}>
                      <BsCheck2 style={{ marginTop: 5 }} />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

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

            {courseDetails?.requirements?.length > 0 && (
              <div className="courseRequirements">
                <h2>Requiements</h2>
                <ul>
                  {courseDetails?.requirements?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="courseDescription">
              <h2>Description</h2>

              {!showMore ? (
                <div>
                  <p className="showLess">
                    {courseDetails?.description?.slice(0, 600)}...{" "}
                  </p>
                  <span
                    onClick={() => setShowMore(true)}
                    style={{
                      fontWeight: "bold",
                      color: "#a435f0",
                      cursor: "pointer",
                    }}
                  >
                    Show more
                  </span>
                </div>
              ) : (
                <div>
                  <p className="showMore">{courseDetails?.description}</p>
                  <span
                    onClick={() => setShowMore(false)}
                    style={{
                      fontWeight: "bold",
                      color: "#a435f0",
                      cursor: "pointer",
                    }}
                  >
                    Show less
                  </span>
                </div>
              )}
            </div>

            <Review />
          </div>

          <div className="courseContentRightWrapper">
            <div className="courseContentRight">
              <div className="courseContentRightImg">
                <img src={courseDetails?.coverImage} alt="" />
              </div>

              <div className="courseDetailsHeaderMobile">
                <div className="courseDetailsHeaderInner">
                  <h1 className="courseTitle">{courseDetails?.title}</h1>
                  <p className="courseShortDesc">{courseDetails?.subtitle}</p>
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
                    Created by <p>{courseAuthor?.name}</p>
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

                {orderDetails?.isCompleted ? (
                  <div className="coursePricing">
                    <button>Go to Course</button>
                    <p className="courseHelperText">Start lesrning today</p>
                  </div>
                ) : (
                  <div className="coursePricing">
                    <h3>₹{courseDetails?.coursePrice}</h3>
                    <Link to={`/make-payment/${courseId}`}>
                      <button>Buy this course</button>
                    </Link>
                    <p className="courseHelperText">
                      30-Days Money-Back Guarantee.
                    </p>
                    <p className="courseHelperText">Full Lifetime Access.</p>
                  </div>
                )}

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
    </>
  );
};

export default CourseDetails;
