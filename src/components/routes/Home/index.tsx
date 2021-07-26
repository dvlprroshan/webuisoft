import Head from "next/head";
import Navbar from "./Navbar";
import WebIntro from "./WebIntro";
import AwesomeServices from "./AwesomeServices";
import TopDevCompany from "./TopDevCompany";
import JsMain from "../../global/JsMain";
import AwesomeFeature from "./AwesomeFeature";
import Timeline from "./Timeline";
import ThoughtCard from "./ThoughtCard";
import ClientReview from "./ClinetReview";
import BlogSection from "./BlogSection";
import NewsLetter from "./NewsLetter";
import Fotter from "./Fotter";
import TopCon from "../Pricing/TopCon";
// TODO:  need to implement this feature later
// import ChatBot from "./ChatBot";

export default function Home(): JSX.Element {
  return (
    <>
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
        <TopCon />
        <NewsLetter />
      </section>
      <footer>
        <Fotter />
      </footer>
      {/* <ChatBot /> */}
      <JsMain />
    </>
  );
}
