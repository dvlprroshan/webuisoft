import { Fragment } from "react";
import Navbar from "../Home/Navbar";
import Fotter from "../Home/Fotter";
import ChatBot from "../Home/ChatBot";
import Head from "next/head";
import PricingStatic from "./PricingStatic";
import PricingDynamic from "./PricingDynamic";
import TopCon from "./TopCon";

const Pricing = () => (
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
      <Navbar currentTab="PRICING" isNotHome={true} />
    </header>

    <section>
      <TopCon />
      <PricingStatic />
      <PricingDynamic />
    </section>

    <footer>
      <Fotter />
      <ChatBot />
    </footer>
  </Fragment>
);

export default Pricing;
