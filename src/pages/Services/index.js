import { Fragment } from "react";
import Navbar from "../Home/Navbar";
import Fotter from "../Home/Fotter";
import ChatBot from "../Home/ChatBot";
import Head from "next/head";
import MainServices from "./MainServices";
import ServicesList from "./ServicesList";

const Services = () => (
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
      <Navbar currentTab="SERVICES" isNotHome={true} />
    </header>

    <section>
      <MainServices />
      <ServicesList />
    </section>

    <footer>
      <Fotter />
      <ChatBot />
    </footer>
  </Fragment>
);

export default Services;
