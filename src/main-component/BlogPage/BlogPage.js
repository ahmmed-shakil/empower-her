import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import BlogList from "../../components/BlogList/BlogList.js";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import BlogSection from "../../components/BlogSection/BlogSection.js";

const BlogPage = () => {
  return (
    <Fragment>
      <Navbar />
      {/* <PageTitle pageTitle={"Latest News"} pagesub={"Blog"} /> */}
      <BlogSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default BlogPage;
