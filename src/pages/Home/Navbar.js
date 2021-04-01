// @dvlprroshan (Roshan Kumar)

import { useState } from "react";

// export Navbar as default value
/**
 * Component for showing Navbar section in Home page
 * @param {import("react").Props} props -> atteributes of elements
 * @return {import("react").Component} React Component of webintro
 */

export default function Navbar({ currentTab, isNotHome = false }) {
  const [navFixed, setNavFixed] = useState("");
  const [isExpended, setIsExpended] = useState(false);
  // run only on browser
  typeof window !== "undefined"
    ? (() => {
      window.navPosFixed = false;
      window.addEventListener("scroll", (e) => {
        if (
          (document.documentElement.scrollTop || document.body.scrollTop) >
          100
        )
        {
          if (!window.navPosFixed)
          {
            window.navPosFixed = true;
          }
        } else
        {
          if (window.navPosFixed)
          {
            window.navPosFixed = false;
          }
        }
        setNavFixed(window.navPosFixed ? "navFixed" : "");
      });
      window.addEventListener("resize", (e) => {
        if (window.innerWidth > 990)
        {
          setIsExpended(false);
        }
      });
    })()
    : "";

  const toggleHandler = () => setIsExpended(!isExpended);

  return (
    // returning navbar navbar component
    <div
      className={`navbar dis-row ${navFixed} ${isExpended ? "navExpeded" : ""}`}

    >
      {/* Navbar brand  */}

      <a href="/" className="navbar-brand">
        <img
          src="/assets/images/logo-light.svg"
          alt="webuisoft ( web UI and software solutions ) logo"
          height="65"
          width="230"
        />
      </a>
      <nav
        className="link-group dis-row"
        id="main-menu"
        aria-label="webUiSoft Menu"
      >
        {/* navbar links */}
        <ul className="dis-row">
          <li>
            <a href="/" className={`${currentTab == "HOME" ? "active-link-top-menu" : ""}`}>
              Home
            </a>
          </li>
          <li>
            <a href="/services" className={`${currentTab == "SERVICES" ? "active-link-top-menu" : ""}`}>Services</a>
          </li>
          <li>
            <a href="/blogs" className={`${currentTab == "BLOGS" ? "active-link-top-menu" : ""}`} >Blogs</a>
          </li>
          <li>
            <a href="/pricing" className={`${currentTab == "PRICING" ? "active-link-top-menu" : ""}`} >Pricing</a>
          </li>
          <li>
            <a href="/contact" className={`${currentTab == "CONTACT" ? "active-link-top-menu" : ""}`} >Contact</a>
          </li>
        </ul>
        {/* login button  */}
        <a href="/login" className="login-icon">
          <svg>
            <path d="M6 6a6 6 0 1112 0A6 6 0 016 6zM7 14c-4 0-7 3-7 7v2h23v-2c0-4-3-7-7-7H7z" />
          </svg>
        </a>
        {/* signup button */}
        <a href="/signup" className="signup-btn">
          Let’s Started ..
        </a>
        <div
          className={`toggler ${isExpended ? "toggler-cross" : ""}`}
          onClick={toggleHandler}
        ></div>
      </nav>

      {/* styling with jsx */}
      <style jsx>{`
        .active-link-top-menu {
          opacity: 0.5;
        }
        /* section main */
        .navbar {
          height: ${isExpended ? "350" : "65"}px;
          overflow: hidden;
          margin: 20px 3%;
          font-family: "Roboto", sans-serif;
          transition: all 0.5s ease-in-out;
        }
        .navFixed {
          position: fixed;
          margin-top: ${!isNotHome ? "110px" : "0px"};
          width: 100%;
          height: ${isExpended ? "280" : "80"}px;
          z-index: 999999;
          background-color: white;
          margin-left: 0;
          padding-left: 5%;
          box-shadow: 0 0 10px 0#94c1ea77;
        }
        nav.link-group {
          width: 100%;
          align-items: center;
        }
        .navFixed .navbar-brand {
          margin-top: 10px;
        }
        /** navbar links for navigations */

        .link-group ul {
          list-style: none;
          right: calc(5% + 370px);
        }

        .link-group ul li {
          padding: 0 6%;
        }
        .link-group ul li a {
          color: #697d9f;
          font-weight: bold;
          font-size: 15px;
        }

        .link-group ul li a:visited {
          color: #697d9f;
        }

        /** login button with svg icon */
        .login-icon {
          right: calc(5% + 190px);
        }
        .login-icon svg {
          width: 23px;
          height: 23px;
          transform: scale(0.9);
        }
        .login-icon svg path {
          fill: #697d9f;
          transition: all 0.5s ease-in-out;
        }
        .login-icon svg:hover path {
          fill: #6787bf;
        }

        /** signup button */
        .signup-btn {
          width: 170px;
          height: 55px;
          border-radius: 50px;
          background: linear-gradient(45deg, #ff3030, #ff7e30);
          color: white;
          font-weight: bold;
          overflow: hidden;
          font-size: 20px;
          text-align: center;
          line-height: 55px;
          box-shadow: 0 8px 10px 0 #94c1ea77;
          right: 5%;
        }
        .signup-btn::before {
          content: "";
          width: 180px;
          height: 65px;
          transition: all 0.5s ease-in-out;
          border-radius: 50px;
          background-color: white;
          transform: translateX(-220px);
          opacity: 0.5;
        }
        .signup-btn:hover::before {
          transform: translateX(-40px);
          opacity: 0.02;
        }
        /** break down at 900px */
        @media screen and (max-width: 900px) {
          .link-group ul {
            display: none;
          }
        }
        /** comman properties  */
        .link-group ul,
        .signup-btn::before,
        .signup-btn,
        .login-icon {
          position: absolute;
        }

        .toggler {
          width: 50px;
          height: 10px;
          background: gray;
          position: absolute;
          right: 15px;
          border-radius: 4px;
          display: none;
          transform: scale(0.8);
          transition: all 0.5s ease-in-out;
        }
        .toggler::before,
        .toggler::after {
          position: absolute;
          background: gray;
          content: "";
          transition: all 0.2s ease-in-out;
          height: 10px;
          width: 50px;
          border-radius: 4px;
        }
        .toggler::before {
          margin-top: -15px;
          width: 30px;
        }
        .toggler:hover ::before {
          width: 50px;
        }

        .toggler::after {
          margin-top: 15px;
        }

        .toggler-cross::before {
          display: none;
        }
        .toggler-cross {
          transform: rotate(45deg) scale(0.8);
        }
        .toggler-cross::after {
          transform: rotate(90deg);
          margin-top: 0;
        }

        /** responsive code at width 990 */
        @media screen and (max-width: 990px) {
          nav.link-group ul {
            display: ${isExpended ? "block" : "none"};
          }
          .navExpeded {
            background: white;
          }
          .navExpeded:not(.navFixed)::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 2px;
            background-color: #00000077;
            opacity: 0.1;
            margin-top: 260px;
            left: 0;
            box-shadow: 0 0 10px 0#1a1b1bb7;
          }
          .navExpeded nav {
            position: absolute;
          }
          .navExpeded nav ul {
            margin-top: 340px;
            width: 100%;
            text-align: center;
            right: 5%;
          }
          .navExpeded nav ul li {
            width: 100%;
          }
          .navExpeded nav ul li a {
            font-size: 1.5rem;
          }
          .navExpeded .login-icon,
          .navExpeded .signup-btn {
            margin-top: 100px;
            transform: translateX(-30px);
          }
          .toggler-cross {
            transform: translateX(-40px) rotate(45deg) scale(0.8);
            margin-top: 100px;
          }

          .toggler {
            display: block;
          }
          .login-icon,
          .signup-btn {
            margin-right: 40px;
          }
        }
        @media screen and (max-width: 600px) {
          .login-icon,
          .signup-btn {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
