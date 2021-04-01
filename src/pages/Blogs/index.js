import { Fragment } from "react";
import Navbar from "../Home/Navbar";
import Fotter from "../Home/Fotter";
import ChatBot from "../Home/ChatBot";
import Head from "next/head";

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

    <section>this is blog section</section>

    <footer>
      <Fotter />
      <ChatBot />
    </footer>
  </Fragment>
);

export default Blogs;
