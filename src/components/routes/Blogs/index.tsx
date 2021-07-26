import React, { Fragment } from "react";
import Navbar from "../Home/Navbar";
import Fotter from "../Home/Fotter";
import Head from "next/head";

// TODO:  need to implement this feature later
// import ChatBot from "../Home/ChatBot";
import BlogHeading from "./BlogHeading";
import SearchBlog from "./BlogSearchBox";
import FeatureBlog from "./FeatureBlog";
import BlogsGroup from "./BlogsGroup";
import BlogCategories from "./BlogCategories";
import NewsLetter from "../Home/NewsLetter";
const Blogs = () => (
  <Fragment>
    <Head>
      <link
        rel="shortcut icon"
        href="/assets/icons/logo-small.png"
        type="image/x-icon"
      />
      <title>WebUiSoft ( Best Web development company )</title>
    </Head>

    <header>
      <Navbar currentTab="BLOGS" isNotHome={true} />
    </header>

    <section>
      <BlogHeading />
      <SearchBlog />
      <FeatureBlog />
      <BlogsGroup />
      <BlogCategories />
    </section>

    <footer>
      <NewsLetter />
      <Fotter />
      {/* <ChatBot /> */}
    </footer>
  </Fragment>
);

export default Blogs;
