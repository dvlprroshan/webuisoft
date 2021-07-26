import Head from "next/head";
import React, { Fragment, ReactElement } from "react";
import Fotter from "../../Home/Fotter";
import Navbar from "../../Home/Navbar";
import NewsLetter from "../../Home/NewsLetter";
import SingleBlogSection from "./SingleBlogSection";

interface Props {}

export default function SingleBlog({}: Props): ReactElement {
  return (
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
        <SingleBlogSection />
      </section>

      <footer>
        <NewsLetter />
        <Fotter />
        {/* <ChatBot /> */}
      </footer>
    </Fragment>
  );
}
