import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import newRequest from "../../utils/newRequest";
import "./Courses.css";

const Courses = () => {
  const { search } = useLocation();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const getSearchResults = async () => {
    try {
      setLoading(true);
      const res = await newRequest.get(
        `/courses${search}&min=${minRef.current?.value}&max=${maxRef.current?.value}`
      );
      setCourses(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const refetch = () => {
    getSearchResults();
  };

  useEffect(() => {
    getSearchResults();
  }, []);

  console.log(courses);

  return (
    <div className="courses">
      <h2>{`${courses?.length} results for "${search.split("=")[1]}"`}</h2>

      <div className="searchFilter">
        <div>
          <h5>Budget</h5>
          <div className="budgetFilter">
            <input type="number" ref={minRef} placeholder="Min" />
            <input type="number" ref={maxRef} placeholder="Max" />
            <button onClick={refetch}>Apply</button>
          </div>
        </div>

        <select>
          <option value="">Most Relevant</option>
          <option value="">Most Reviewed</option>
          <option value="">Highest Rated</option>
          <option value="">Newest</option>
        </select>
      </div>

      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "150px",
          }}
        >
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          {courses.length === 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "150px",
              }}
            >
              <h2>No Results Found :(</h2>
            </div>
          ) : (
            <div className="searchResults">
              {courses?.map((course) => (
                <Link
                  to={`/course/${course._id}`}
                  className="coursesCard"
                  key={course._id}
                >
                  <div className="coursesCardLeft">
                    <img src={course.coverImage} alt="" />
                  </div>

                  <div className="coursesCardRight">
                    <div className="coursesTitle">
                      <h3>{course.title}</h3>
                      <h3>₹{course.coursePrice}</h3>
                    </div>
                    <p>{course.subtitle}</p>
                    <span className="coursesAuthor">{course.authorName}</span>

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
                    </div>

                    <span className="coursesMisc">{course.level}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Courses;
