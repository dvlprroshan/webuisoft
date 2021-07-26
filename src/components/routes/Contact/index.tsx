import Navbar from "../Home/Navbar";
import Fotter from "../Home/Fotter";
import Head from "next/head";
import MainContact from "./MainContact";

// TODO: this feature
// import ChatBot from "../Home/ChatBot";

const Contact = () => (
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
      <Navbar currentTab="CONTACT" isNotHome={true} />
    </header>

    <section>
      <MainContact />
    </section>

    <footer>
      <Fotter />
      {/* <ChatBot /> */}
    </footer>
  </>
);

export default Contact;
