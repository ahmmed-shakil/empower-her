import React, { Fragment, useEffect, useState } from "react";
import video from "../../images/video/html.mp4";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import ReactPlayer from "react-player";

const LessonPage = () => {
  const { id } = useParams();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [selected, setSelected] = useState({});

  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    setSelected(lessons[0]);
  }, [lessons?.length]);

  const ClickHandler = (lesson) => {
    // window.scrollTo(10, 0);
    setSelected(lesson);
  };

  const [module, setModule] = useState({});
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const result = await axios.get(`${base_url}/lesson/${id}`);
        setLessons(result?.data?.lessons);
        setModule(result?.data?.module);
        console.log("🚀 ~ fetchLessons ~ result:", result);
      } catch (error) {
        toast.error("Failed to fetch lessons");
      }
    };
    fetchLessons();
  }, [id]);
  console.log("🚀 ~ LessonPage ~ selected:", selected);
  return (
    <Fragment>
      <section className="wpo-lesson-section">
        <h2 className="hidden">hidden</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-xl-3 col-lg-4 col-12">
              <div className="wpo-lesson-sidebar">
                <div className="accordion-item">
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography>{module?.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div className="accordion-body">
                          <ul className="item">
                            {lessons?.map((lesson, i) => (
                              <li
                                key={lesson?._id}
                                className={`${
                                  selected?._id === lesson?._id &&
                                  "text-primary"
                                }`}
                                style={{ cursor: "pointer" }}
                              >
                                <span onClick={() => ClickHandler(lesson)}>
                                  <span>
                                    {i + 1}.
                                    <i className="fi flaticon-play-button mx-2"></i>
                                    {lesson?.title}
                                  </span>{" "}
                                  {/* <span>
                                    20 min
                                    <i
                                      className="fa fa-check-circle"
                                      aria-hidden="true"
                                    ></i>
                                  </span> */}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col col-xl-9 col-lg-8 col-12">
              <div className="video-area">
                <div className="video-heading">
                  <h2>{selected?.title}</h2>
                  <Link onClick={ClickHandler} className="theme-btn" to="/">
                    Back To Home
                  </Link>
                </div>
                {/* <video autoPlay muted poster={video} loop>
                  <source src={video} type="video/mp4" />
                </video> */}
                <div className="video-wrapper">
                  {/* <iframe
                    width="560"
                    height="315"
                    src={selected?.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded YouTube Video"
                  ></iframe> */}
                  <ReactPlayer
                    url={selected?.url}
                    controls={true}
                    width="100%"
                    height="60vh"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default LessonPage;
