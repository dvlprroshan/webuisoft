import Head from "next/head";
import { Fragment } from "react";
import Navbar from "./Navbar";
import WebIntro from "./WebIntro";
import AwesomeServices from "./AwesomeServices";
import TopDevCompany from "./TopDevCompany";
import JsMain from "../../Components/JsMain";
import AwesomeFeature from "./AwesomeFeature";
import Timeline from "./Timeline";
import ThoughtCard from "./ThoughtCard";
import ClientReview from "./ClinetReview";
import BlogSection from "./BlogSection";
import NewsLetter from "./NewsLetter";
import Fotter from "./Fotter";
import ChatBot from "./ChatBot";

export default function Home() {
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
        <Navbar currentTab="HOME" />
        <WebIntro />
      </header>

      <section>
        <AwesomeServices />
        <TopDevCompany />
        <AwesomeFeature />
        <Timeline />
        <ThoughtCard />
        <ClientReview />
        <BlogSection />
      </section>
      <footer>
        <NewsLetter />
        <Fotter />
      </footer>
      <ChatBot />
      <JsMain />
    </Fragment>
  );
}
