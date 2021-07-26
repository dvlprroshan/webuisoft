export default function Fotter() {
  return (
    <div className="fotter">
      <div className="upper-con">
        <div className="left">
          <a className="logo">
            <img src="/assets/images/logo-dark.svg" height="100" alt="" />
          </a>
          <div className="logo-dec">
            We offer a wide range of web-based services (Static and Dynamic
            website, custom website development, web module designing and
            Maintainance)
          </div>
          <div className="opening-heading">Open Hours:</div>
          <div className="timing-dec">
            Mon - Sat: 8 am - 5 pm,
            <br /> Sunday: CLOSED
          </div>
        </div>
        <div className="right">
          <div className="services">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Link Building Services</a>
              </li>
              <li>
                <a href="#">App Optimization</a>
              </li>
              <li>
                <a href="#">Social Media Marketing</a>
              </li>
              <li>
                <a href="#">Dubai SEO</a>
              </li>
            </ul>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Clients FAQs</a>
              </li>
              <li>
                <a href="#">Blog News</a>
              </li>
              <li>
                <a href="#">Pricing Planes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lower-con">
        <div className="copyright">© Copyright 2020 WebUiSoft</div>
        <hr />
        <div className="social-links">
          <a href="" className="fb-social">
            <img src="/assets/icons/facebook.svg" alt="" />
          </a>
          <a href="" className="in-social">
            <img src="/assets/icons/insta.svg" alt="" />
          </a>
          <a href="" className="tw-social">
            <img src="/assets/icons/twitter.svg" alt="" />
          </a>
          <a href="" className="dr-social">
            <img src="/assets/icons/dribbble.svg" alt="" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .fotter {
          height: 500px;
          width: 100%;
          z-index: 11;
          background-color: #00052ee6;
        }
        .fotter::before {
          position: absolute;
          content: "";
          width: 100%;
          z-index: -1;
          height: 500px;
          background: url("/assets/images/fob.png");
          background-size: 100% 500px;
          opacity: 0.5;
        }

        .upper-con {
          display: flex;
          padding-top: 100px;
          width: 100%;
        }
        .left {
          padding-left: 80px;
          padding-right: 8%;
          width: 50%;
        }
        a.logo img {
          height: 30px;
        }
        .logo-dec {
          color: white;
          font-size: 1.2rem;
          margin-top: 20px;
          opacity: 0.8;
        }
        .opening-heading {
          margin-top: 50px;
          color: rgb(76, 76, 250);
          font-weight: bold;
          font-size: 1.1rem;
        }
        .timing-dec {
          color: white;
          margin-top: 10px;
        }

        /** right */

        .right {
          width: 50%;
          display: flex;
        }
        .services,
        .quick-links {
          width: 50%;
        }
        .services h3 {
          font-weight: bold;
          font-size: 1.5rem;
          margin-bottom: 30px;
          color: white;
        }
        .quick-links h3 {
          font-weight: bold;
          font-size: 1.5rem;
          margin-bottom: 30px;
          color: white;
        }

        .services ul,
        .quick-links ul {
          list-style: none;
        }
        .services ul li,
        .quick-links ul li {
          margin: 10px;
        }
        .services ul li::before,
        .quick-links ul li::before {
          position: absolute;
          content: "";
          width: 10px;
          height: 10px;
          background: orangered;
          border-radius: 50%;
          margin-left: -17px;
          margin-top: 4px;
        }
        .services ul li a,
        .quick-links ul li a {
          color: white;
          padding-top: 10px;
        }

        /** lower */
        .lower-con {
          display: flex;
          padding: 10px 80px;
          margin-top: 40px;
        }
        .lower-con .copyright {
          color: white;
          font-size: 1.1rem;
          font-weight: bold;
          opacity: 0.7;
        }
        .lower-con hr {
          width: 400px;
          height: 2px;
          margin-top: 10px;
          background: white;
          border: none;
          opacity: 0.5;
          position: absolute;
          right: 400px;
          margin-left: 100px;
        }
        .social-links {
          width: 300px;
          height: 50px;
          margin-top: -10px;
          position: absolute;
          right: 5%;
          display: flex;
        }

        .social-links a {
          height: 50px;
          width: 50px;
          background: white;
          margin: 0 10px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          opacity: 0.8;
          justify-content: center;
        }
        .social-links a:hover {
          opacity: 1;
        }
        .social-links a img {
          width: 30px;
          height: 30px;
        }
        .social-links .fb-social {
          background: #2662db;
        }
        .social-links .tw-social {
          background: #28c5f4;
        }
        .social-links .in-social {
          background: #ff2e3f;
        }
        .social-links .dr-social {
          background: #ea4ca8;
        }
        @media screen and (max-width: 1150px) {
          .lower-con hr {
            width: 200px;
          }
        }
        @media screen and (max-width: 950px) {
          .fotter,
          .fotter::before {
            height: auto;
          }
          .left,
          .right {
            width: 90%;
          }
          .upper-con {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .lower-con hr {
            display: none;
          }
          .social-links {
            margin-top: -30px;
          }
        }
        @media screen and (max-width: 630px) {
          .social-links {
            margin: auto;
            right: 0;
            left: 0;
            margin-top: 40px;
          }
          .lower-con {
            height: 100px;
            margin-top: -10px;
          }
          .fotter {
            height: auto;
          }
          .copyright {
            width: 100%;
            text-align: center;
          }
        }
        @media screen and (max-width: 550px) {
          .left {
            padding: 0;
          }
          .right {
            flex-direction: column;
          }
          .services,
          .quick-links {
            width: 100%;
            margin-top: 50px;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
}
