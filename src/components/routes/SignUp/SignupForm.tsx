import React, { ReactElement } from "react";
import Input from "../../global/Input";

interface Props {}

export default function SignupForm({}: Props): ReactElement {
  return (
    <div className="main-ser">
      <div className="heading">SignUp</div>
      <div className="form-con">
        <form action="/" method="post">
          <div className="name">
            <Input type="text" placeholder="First Name" name="first_name" />
            <Input type="text" placeholder="Last Name" name="last_name" />
          </div>
          <Input
            type="email"
            placeholder="Email"
            error="your email is wrong"
            name="email"
            preVal="pass"
          />
          <Input type="password" placeholder="Password" name="password" />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
          />

          <button className="send-message-btn" type="submit">
            Login
          </button>
          <div className="downBar">
            <a className="forgetPass" href="#">
              Forget Password?
            </a>
            <a href="#" className="signup">
              SignIn
            </a>
          </div>
          <div className="loginWithTitle">Enter with</div>
          <div className="loginWith">
            <div className="loginWith-facebook">
              <img src="/assets/icons/facebook.svg" alt="facebook icon" />
            </div>
            <div className="loginWith-google">
              <img src="/assets/icons/google.svg" alt="facebook icon" />
            </div>

            <div className="loginWith-twitter">
              <img src="/assets/icons/twitter.svg" alt="facebook icon" />
            </div>
          </div>
        </form>
      </div>

      {/* style of this component */}
      <style jsx>{`
        .main-ser {
          width: 100%;
          height: 800px;
        }
        .heading {
          width: 100%;
          background-color: #71abe011;
          padding: 20px 0;
          color: #415e8d;
          text-align: center;
          font-weight: bold;
          font-size: 30px;
        }
        .form-con {
          width: 100%;
          height: 600px;
          display: flex;
          justify-content: center;
        }
        .form-con form {
          max-width: 300px;
          min-width: 400px;
          box-shadow: 0 0 10px;
          height: min-content;
          margin-top: 50px;
          border-radius: 10px;
          box-shadow: 0 0 35px 0 #497eaf3a;
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          row-gap: 25px;
        }
        .rememberBox label {
          margin-left: 15px;
          color: rgb(77, 109, 250);
        }
        .send-message-btn {
          background: linear-gradient(45deg, #3a24ff, #7f9bf8);
          height: 50px;
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1.5rem;
          text-transform: uppercase;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.5s linear;
        }
        .send-message-btn:focus,
        .send-message-btn:hover {
          box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
          transform: scale(1.03);
        }
        .downBar {
          display: flex;
          justify-content: space-between;
        }
        .downBar a {
          color: rgb(77, 109, 250);
        }
        .name {
          display: flex;
          column-gap: 10px;
        }
        .loginWithTitle {
          text-align: center;
          color: rgb(176, 170, 252);
        }
        .loginWith {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }
        .loginWith div[class*="loginWith-"] {
          height: 60px;
          width: 60px;
          cursor: pointer;
          box-shadow: 0 0 10px 10px #93badf25;
          border-radius: 50%;
          display: grid;
          place-items: center;
          position: relative;
          border: 4px solid white;
          transition: all 0.3s ease;
        }
        .loginWith div[class*="loginWith-"]:hover {
          transform: scale(1.1);
        }

        .loginWith div[class*="loginWith-"] img {
          height: 40px;
          width: 40px;
        }
        .loginWith-facebook {
          background: #2662db;
        }
        .loginWith-twitter {
          background: #28c5f4;
        }
      `}</style>
    </div>
  );
}
