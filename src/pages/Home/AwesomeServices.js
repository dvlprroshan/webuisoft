/**
 * utils function for writting less css code
 * @param options A boject with two props (h,w) -> (height,weight)
 * @return {new String} width css properties
 */

const commanPropOfCss = ({ w, h }) => `
position:absolute;
content:"";
${w ? `width:${w};` : ""}
${h ? `height:${h};` : ""}
`;

/**
 * Component for showing Awesome service section in Home page
 * @param {import("react").Props} props -> atteributes of elements
 * @return {import("react").Component} React Component of webintro
 */

export default function AwesomeServices(props) {
  // returning jsx component
  return (
    <section className="service-main" {...props}>
      {/* Animated spring component */}
      <div className="spring">
        <img src="/assets/images/spring.svg" alt="" />
      </div>

      {/* headings of section */}
      <h3 className="sub-heading">Provide Service With Our Experts</h3>
      <h2 className="main-heading">AWESOME SERVICE</h2>

      {/* card groups section */}
      <section className="card-group">
        {/* first card  (website design)*/}
        <article className="card-con">
          {/* inner card  element*/}
          <div className="card">
            {/* (Image,Heading,Paragraph) -> repectively */}
            <img src="/assets/images/web-service-icon.png" alt="" />
            <h4>Website Design</h4>
            <p>
              We deliver cutting edge websites that are beautiful to look at and
              perform equally well.
            </p>
          </div>
        </article>

        {/* second card (eCommerce Solutions) */}
        <article className="card-con">
          {/* inner card  element*/}
          <div className="card">
            {/* (Image,Heading,Paragraph) -> repectively */}
            <img src="/assets/images/e-commerce-service-icon.png" alt="" />
            <h4>eCommerce Solutions</h4>
            <p>
              eCommerce Solutions for Starting and Growing Your Business with
              the help of technologies
            </p>
          </div>
        </article>

        {/* third card (Mobile Application) */}
        <article className="card-con">
          {/* inner card  element*/}
          <div className="card">
            {/* (Image,Heading,Paragraph) -> repectively */}
            <img src="/assets/images/mobile-dev-service-icon.png" alt="" />
            <h4>Custom Application design</h4>
            <p>
              We deliver awesome UI design and native performance with latest
              technologies.
            </p>
          </div>
        </article>
      </section>

      {/* Decorate component with dynamic css */}
      <style jsx>{`
        /** main container  */
        section.service-main {
          width: 100%;
          height: 700px;
          font-family: "Roboto";
          padding-top: 30px;
          text-align: center;
        }

        /** Headings */
        h3.sub-heading {
          color: #6488df;
          font-weight: 100;
          font-size: 22px;
        }
        h2.main-heading {
          color: #415e8d;
          font-size: 46px;
        }
        h2.main-heading::after {
          /** using util function */
          ${commanPropOfCss({ w: "100%", h: "30px" })}
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='52'  xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.8 4.6C10.6 2.4 2.4-2 1 1 1 1-.5 2.5.2 5 .9 8 5.8 17.4 15.4 21.3c10.2 4 26.4.6 32.7-8.2 6.5-9.2 4-12.4-1-11.5-6 1.1-7.8 2.2-14.8 4-6.2 1.5-13.9 0-17.5-1z' fill='%23BAC3F6'/%3E%3C/svg%3E")  no-repeat center;
          left: 0;
          margin-top: 55px;
        }

        /** outter card container */
        .card-group {
          width: 100%;
          height: 450px;
          margin-top: 50px;
          display: flex;
          flex-direction: row;
          padding-left: 30px;
          justify-content: space-evenly;
        }

        /**  card outter shell container */
        .card-con {
          height: 100%;
          width: 350px;
          transform: scale(0.98);
          transition: all 0.5s linear;
        }
        .card-con:nth-child(1)::after {
          background-color: #90d2e6;
        }
        .card-con:nth-child(2)::after {
          background-color: #ff8533;
        }
        .card-con:nth-child(3)::after {
          background-color: #3045e3;
        }
        .card-con:hover {
          transform: scale(1.05);
        }
        .card-con::after {
          ${commanPropOfCss({ w: "100px", h: "8px" })}
          margin: auto;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 4px;
          transform: translateY(-14px);
          transition: all 0.5s ease-in-out;
        }
        .card-con:hover::after {
          width: 250px;
        }

        /** inner card shell */
        .card {
          position: absolute;
          height: 430px;
          width: 350px;
          padding-top: 30px;
          background-color: white;
          border-radius: 30px;
          box-shadow: 0 0 35px 0 rgba(148, 193, 234, 0.18);
          cursor: pointer;
          overflow: hidden;
          z-index: 0;
        }

        .card::before {
          ${commanPropOfCss({ w: "350px", h: "350px" })}
          border-radius: 43% 57% 55% 45% / 43% 44% 56% 57%;
          transition: all 1s ease-in;
          z-index: -1;
          background-color: #edf2fa;
          animation: cycling 10s ease-in-out infinite;
          transform: translate(30%, -60%);
        }
        .card:hover::before {
          animation: none;
          margin-left: -10%;
          margin-top: -10%;
        }

        .card h4 {
          font-size: 28px;
          width: 90%;
          margin-left: 5%;
          color: #213e6e;
          margin-top: 15px;
        }
        .card p {
          color: #425f8d;
          width: 80%;
          margin-left: 10%;
          font-size: 17px;
          margin-top: 20px;
        }
        .spring {
          position: absolute;
          width: 50px;
          left: 20px;
          height: 100px;
          animation: natural-jumping 8s ease infinite;
          margin-top: 400px;
        }
        .spring::after {
          ${commanPropOfCss({ w: "3px", h: "400px" })}
          background: #425f8d;
          margin: auto;
          z-index: -2;
          left: 0;
          right: 0;
          top: -150%;
          animation: reverse natural-jumping 5s ease-in-out infinite;
        }

        @keyframes natural-jumping {
          0% {
            transform: scale(1, 1) translateY(0);
          }
          10% {
            transform: scale(1.1, 0.9) translateY(0);
          }
          30% {
            transform: scale(0.9, 1.1) translateY(-240px);
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
        @keyframes cycling {
          from {
            transform: translate(30%, -60%) rotate(0deg);
          }
          to {
            transform: translate(30%, -60%) rotate(360deg);
          }
        }
        @media screen and (max-width: 1250px) {
          .card-con,
          .card {
            width: 300px;
          }
          .card-group {
            width: 95%;
            position: absolute;
            margin: auto;
            right: 0;
            margin-top: 50px;
          }

          .card p {
            width: 90%;
            margin-left: 5%;
          }
          .card-con {
            width: 250px;
          }
        }
        @media screen and (max-width: 1050px) {
          .card-group {
            flex-direction: column;
            height: 100%;
          }
          .service-main {
            height: 200vh;
          }
          .card-con {
            width: 80%;
            margin-left: 8%;
            height: 250px;
          }
          .card {
            height: 200px;
            width: 100%;
          }
          .card img {
            position: absolute;
            margin: auto;
            left: 0;
            margin-top: -20px;
            transform: scale(0.8);
          }
          .card h4,
          .card p {
            margin-left: 230px;
            width: calc(100% - 250px);
          }

          .card-con::after {
            transform: translateY(-24px);
            width: 30%;
            opacity: 0.2;
          }
          .card-con:hover::after {
            width: 80%;
          }
        }
        @media screen and (max-width: 790px) {
          .spring {
            display: none;
          }
          .card-group {
            padding-left: 0;
          }
          .card-con {
            margin-left: 0;
            width: 95%;
          }
          .card-group {
            height: auto !important;
          }
          .card-con::after {
            display: none;
          }
        }

        @media screen and (max-width: 620px) {
          .card::before {
            animation: none;
          }
          .card h4 {
            font-size: 24px;
          }
          .card p {
            font-size: 15px;
          }

          .card {
            margin-top: 50px;
          }
        }
        @media screen and (max-width: 510px) {
          .card img {
            opacity: 0.1;
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            margin-top: -15px;
          }
          .card h4,
          .card p {
            width: 100%;
            margin-left: 0;
          }
          .card {
            padding-left: 10px;
            padding-right: 10px;
          }
        }
      `}</style>
    </section>
  );
}
