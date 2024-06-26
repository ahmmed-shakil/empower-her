import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../../images/logo_main.png";
import HeaderTopbar from "../HeaderTopbar/HeaderTopbar";
import { useUser } from "../../context/userContext";
import user from "../../images/user.png";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const { userName, userId } = useUser();
  return (
    <header id="header">
      <HeaderTopbar topbarClass={props.topbarClass} />
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home"
                  >
                    <img src={Logo} alt="logo" height={60} width={60} />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/home">Home Style 1</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home-2">Home Style 2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home-3">Home Style 3</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home-4">Home Style 4</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home-5">Home Style 5</Link></li>
                                            </ul>
                                        </li> */}
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/course">
                        Courses
                      </Link>
                    </li>
                    {/* <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Courses
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/course">
                            Courses Style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/course-2">
                            Courses Style 2
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/course-3">
                            Courses Style 3
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/course-single/Learn-WordPress-&-Elementor-for-Beginners"
                          >
                            Courses single
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Pages
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/lesson">
                            Lesson
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/gallery">
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/testimonial">
                            Testimonial
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/teacher">
                            Teachers
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/team-single/Courtney-Henry"
                          >
                            Teacher Single
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/become-teacher">
                            Become Teacher
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/faq">
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/404">
                            404 Error
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link onClick={ClickHandler} to="/blog">
                        Blogs
                      </Link>
                    </li>

                    {/* <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Blog
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/blog">
                            Blog right sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-left-sidebar">
                            Blog left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-fullwidth">
                            Blog fullwidth
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">
                            Blog details
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/blog-single/Become-a-great-WordPress-&-PHP-developer."
                              >
                                Blog details right sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/blog-single-left-sidebar/Become-a-great-WordPress-&-PHP-developer."
                              >
                                Blog details left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/blog-single-fullwidth/Become-a-great-WordPress-&-PHP-developer."
                              >
                                Blog details fullwidth
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Shop
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/shop">
                            Shop
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/product-single/Principles-and-Policies"
                          >
                            Shop Single
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/cart">
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/checkout">
                            Checkout
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/my-courses">
                        My Classes
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        onClick={ClickHandler}
                        to="/cart"
                        style={{ position: "relative" }}
                      >
                        <svg
                          fill="#000000"
                          width="24"
                          height="24"
                          viewBox="0 0 902.86 902.86"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <g>
                              <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path>
                              <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path>
                            </g>
                          </g>
                        </svg>
                        <p
                          className=" d-inline"
                          style={{
                            position: "absolute",
                            top: 20,
                            fontSize: "1rem",
                          }}
                        >
                          5
                        </p>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-2">
                <div className="header-right">
                  {/* <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn"
                      >
                        <i
                          className={`fi ti-search ${
                            menuActive ? "ti-close" : "fi "
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? "header-search-content-toggle" : ""
                        }`}
                      >
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="fi flaticon-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div> */}
                  {userId ? (
                    <Link to={"/my-profile"}>
                      <div
                        className="d-flex align-items-center"
                        style={{ cursor: "pointer" }}
                      >
                        <img alt={userName} height={20} width={20} src={user} />
                        <p className=" p-0 m-0 d-none d-md-block">{userName}</p>
                      </div>
                    </Link>
                  ) : (
                    <div className="close-form">
                      <Link
                        onClick={ClickHandler}
                        className="login"
                        to="/login"
                      >
                        <span className="text">Sign In</span>
                        <span className="mobile">
                          <i className="fi flaticon-charity"></i>
                        </span>
                      </Link>
                      <Link
                        onClick={ClickHandler}
                        className="theme-btn"
                        to="/register"
                      >
                        <span className="text">Sign Up</span>
                        <span className="mobile">
                          <i className="fi flaticon-charity"></i>
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
