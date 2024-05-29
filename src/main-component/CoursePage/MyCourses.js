import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import CourseSectionS3 from "../../components/CourseSectionS3/CourseSectionS3";
import Newslatter2 from "../../components/Newslatter2/Newslatter2";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import { useUser } from "../../context/userContext";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};
const MyCourses = (props) => {
  const [courses, setCourses] = useState([]);

  const push = useNavigate();

  const { userId } = useUser();
  useEffect(() => {
    !userId && push("/login");
  }, [userId, push]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${base_url}/enroll/${userId}`);
        setCourses(response?.data);
        console.log("🚀 ~ fetchCourses ~ response:", response);
      } catch (error) {
        // toast.error("Failed to fetch courses");
      }
    };
    fetchCourses();
  }, []);
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Course"} pagesub={"Course"} />
      <div className={`wpo-popular-area section-padding ${props.pClass}`}>
        <div className="container">
          <div className="wpo-popular-wrap">
            <div className="row">
              {courses.map((course, aitem) => (
                <div className="col col-lg-4 col-md-6 col-12" key={aitem}>
                  <div className="wpo-popular-single">
                    <div className="wpo-popular-item">
                      <div className="wpo-popular-img">
                        <img
                          src={course?.courseId?.thumb}
                          width={289}
                          height={210}
                          alt={course?.courseId?.title}
                        />
                        <div className="thumb">
                          <span>free</span>
                        </div>
                      </div>
                      <div className="wpo-popular-content">
                        <div className="wpo-popular-text-top">
                          <ul>
                            {/* <li>
                           <img width={289} height={210} src={course.author} alt="" />
                         </li> */}
                            <li>
                              {/* <Link
                             onClick={ClickHandler}
                             to={`/course-single/${course?._id}`}
                           > */}
                              {course?.courseId?.author}
                              {/* </Link> */}
                            </li>
                          </ul>
                          {/* <ul>
                         <li>
                           <i className="fi flaticon-star"></i>
                         </li>
                         <li>({course.ratting})</li>
                       </ul> */}
                        </div>
                        <h2 style={{ minHeight: "80px" }}>
                          <Link
                            onClick={ClickHandler}
                            to={
                              userId
                                ? `/course-single/${course?.courseId?._id}`
                                : "/login"
                            }
                          >
                            {course?.courseId?.title}
                          </Link>
                        </h2>

                        {/* <div className="wpo-popular-text-bottom">
                       <ul>
                         <li>
                           <i className="fi flaticon-reading-book"></i>{" "}
                           {course.student} Students
                         </li>
                         <li>
                           <i className="fi flaticon-agenda"></i>{" "}
                           {course.lesson} Lesson
                         </li>
                       </ul>
                     </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="pagination-wrapper">
                        <ul className="pg-pagination">
                            <li>
                                <Link to="/blog-left-sidebar" aria-label="Previous">
                                    <i className="fi ti-angle-left"></i>
                                </Link>
                            </li>
                            <li className="active"><Link to="/blog-left-sidebar">1</Link></li>
                            <li><Link to="/blog-left-sidebar">2</Link></li>
                            <li><Link to="/blog-left-sidebar">3</Link></li>
                            <li>
                                <Link to="/blog-left-sidebar" aria-label="Next">
                                    <i className="fi ti-angle-right"></i>
                                </Link>
                            </li>
                        </ul>
                    </div> */}
          </div>
        </div>
      </div>
      {/* <Newslatter2/> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default MyCourses;
