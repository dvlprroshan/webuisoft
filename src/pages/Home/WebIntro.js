// using typewriter-effect libararies for typing like effect in webpage
import TypeWriter from "typewriter-effect";

/**
 * Component for showing webintro section in Home page
 * @param {import("react").Props} props -> atteributes of elements
 * @return {import("react").Component} React Component of webintro
 */

export default function WebIntro(props) {
  typeof window === "undefined"
    ? ""
    : (() => {
        // code
      })();

  // returning Components
  return (
    <section className="web-intro dis-row" {...props}>
      <img
        className="vector-bg"
        src="/assets/images/vector-1.svg"
        alt="vector background"
      />

      {/* left side of text */}
      <article className="content">
        {/* left vector animated image  container*/}
        {/* heading groups */}
        <hgroup>
          <h2 className="heading-1">
            Your Business Need
            {/* TypeWritter component for typing effect  */}
            <TypeWriter
              // component options
              options={{
                strings: [
                  "Our Tech Support",
                  "Our Web Solutions.",
                  "a Website That's Tell Your Stories.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          {/* second heading  */}
          <h3 className="heading-2">
            We work on finding solution of your business ideas.
          </h3>
          {/* Mobile no. */}
          <div className="phone-no dis-row">
            <img
              src="/assets/icons/calling-icon.svg"
              alt="webUiSoft calling icons"
            />
            <span className="phone-h">CALL US:</span>
            <div className="num">
              <span className="phone-prefix">+91 </span>
              <span className="phone-data"> 8799709796</span>
            </div>
          </div>
          {/* get mail button */}
          <a href="/getMail" className="mail-btn">
            GET CONSULTATION
          </a>
        </hgroup>
      </article>

      {/* right side animated Image */}
      <div className="ani-img">
        {/* background image with few particles  */}
        <img
          src="/assets/images/web-intro-main-bg.svg"
          alt="image background"
          className="circle-bg"
        />

        {/* main large webintro image */}
        <img
          className="main-img"
          src="/assets/images/web-intro-img.svg"
          alt="webuisioft intro header image"
        />

        {/* vector wave image */}
        <img
          src="/assets/icons/wave-intro.svg"
          className="wave"
          alt="wave animation"
        />
      </div>

      {/* Component styling with jsx */}
      <style jsx>{`
        /** main element */
        section.web-intro {
          background-color: white;
          width: 100vw;
          height: 110vh;
          margin-top: -110px;
          background-image: url("/assets/images/background-web-info.svg");
          background-size: 100% 100%;
          padding-top: 100px;
          font-family: "Roboto";
          display: flex;
          justify-content: space-between;
        }

        /** left content (text or data) */
        article.content {
          min-width: 450px;
          padding: 100px 0 0 20px;
          z-index: 10;
        }
        hgroup {
          width: 45%;
        }
        .content h2 {
          font-size: 3rem;
          font-weight: 700;
          width: cover;
          color: #213e6e;
          margin: 80px 0 30px 100px;
        }
        .content h3 {
          font-size: 1.15rem;
          margin: 10px 0 0 100px;
          color: #254271;
          font-weight: normal;
        }

        /** left vector jumping animations */
        .vector-bg {
          transition: all 0.5s ease-in-out;
          animation: natural-jumping 5s linear infinite;
          margin: 140px 0 0 60px;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }

        /** mobile no */
        .content .phone-no {
          margin: 40px 0 0 100px;
          font-size: 28px;
          font-weight: 700;
          line-height: 40px;
        }
        .content .phone-no .phone-h {
          margin: 0 15px 0 20px;
          color: #ff8533;
        }
        .content .phone-no .phone-prefix {
          color: #213e6e;
          margin: 0 0 0 10px;
        }
        .content .phone-no .phone-data {
          font-weight: normal;
          color: #213e6e;
        }

        /** mail button */
        .content a.mail-btn {
          padding: 15px 20px;
          position: absolute;
          border-radius: 50px;
          background: linear-gradient(45deg, #3a24ff, #6186ff);
          color: white;
          font-weight: bold;
          overflow: hidden;
          font-size: 20px;
          text-align: center;
          box-shadow: 0 0 20px 0 #8ea2f0;
          margin: 30px 0 0 100px;
        }
        .content a.mail-btn::before {
          content: "";
          width: 100%;
          height: 100%;
          transition: all 0.7s ease-in-out;
          border-radius: 50px;
          background-color: white;
          transform: translateX(-260px);
          opacity: 0.5;
          margin-top: -15px;
        }
        .content a.mail-btn:hover::before {
          transform: translateX(-40px);
          opacity: 0.02;
        }

        /** animated images  right side in desktop*/
        .ani-img {
          min-width: 50%;
          padding-top: 100px;
          right: 0;
        }
        .ani-img img.wave {
          margin: -10% 0 0 -50%;
        }
        .ani-img img.circle-bg {
          width: 70%;
        }
        .ani-img img.main-img {
          margin-top: -220px;
          animation: jump 2s ease-in infinite alternate;
        }
        @keyframes jump {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(20px);
          }
        }

        /**  <--ANIMATIONS KEYFRAMES--> */
        .a {
        }
        /** for lumping lovely vector shape */
        @keyframes natural-jumping {
          0% {
            transform: scale(1, 1) translateY(0);
          }
          10% {
            transform: scale(1.1, 0.9) translateY(0);
          }
          30% {
            transform: scale(0.9, 1.1) translateY(-40px);
          }
          50% {
            transform: scale(1.05, 0.95) translateY(0);
          }
          57% {
            transform: scale(1, 1) translateY(-7px);
          }
          64% {
            transform: scale(1, 1) translateY(0);
          }
          100% {
            transform: scale(1, 1) translateY(0);
          }
        }
        /** comman properties */
        hgroup,
        .vector-bg,
        .ani-img,
        .content a.mail-btn::before {
          position: absolute;
        }

        @media screen and (max-width: 1208px) {
          .ani-img {
            margin-top: 50px;
            width: 300px;
            display: flex;
            height: 500px;
            overflow: hidden;
            flex-direction: column;
            margin-top: 100px;
          }

          .ani-img img.main-img {
            animation: none;
            width: 500px;
          }
          .ani-img img.wave {
            position: absolute;
          }
          article.content {
            padding: 100px 0 0 20px;
          }
          .content h2 {
            font-size: 2.5rem;
            min-width: 400px;
          }
          .phone-no {
            min-width: 500px;
          }
        }
        @media screen and (max-width: 930px) {
          .vector-bg,
          .ani-img {
            display: none;
          }
          .web-intro {
            display: block !important;
            text-align: center;
          }
          hgroup {
            width: 100%;
            margin-left: 0 !important;
          }
          .content {
            padding: 0 !important;
          }
          h2,
          h3 {
            margin-left: 0 !important;
          }
          .phone-no {
            margin-left: 0 !important;
            justify-content: center;
          }
          a.mail-btn {
            margin-left: 100px !important;
            margin: auto !important;
            width: 230px !important;
            margin-top: 100px !important;
            transform: translate(-110px);
          }
        }
        @media screen and (max-width: 510px) {
          .phone-no {
            min-width: unset !important;
          }
        }
        @media screen and (max-width: 450px) {
          .num {
            position: absolute;
            margin-top: 60px;
          }
        }
        @media screen and (max-width: 400px) {
          h2 {
            min-width: unset !important;
            font-size: 2.3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
