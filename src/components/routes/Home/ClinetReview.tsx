import { useState } from "react";

const CardTile = ({ options: opt }) => (
  <section>
    <div className="rating"></div>
    <div className="para">{opt.para}</div>
    <div className="name">{opt.name}</div>
    <div className="post">{opt.post}</div>
    <style jsx>{`
      section {
        height: 100%;
        width: 700px;
        padding: 30px 80px;
        text-align: left;
      }
      .rating {
        width: 100px;
        height: 30px;
        background: url("assets/images/rating.jpg");
        margin-top: 20px;
      }
      .para {
        font-size: 1.5rem;
        margin-top: 30px;
        color: #415e8d;
      }
      .name {
        font-size: 2.5rem;
        font-weight: bold;
        margin-top: 20px;
        color: #070157;
      }
      .post {
        margin-top: 10px;
        color: rgb(154, 190, 255);
      }
    `}</style>
  </section>
);

const ProfileBtn = ({ options: opt, onclick }) => {
  let profileHandler = () => {
    onclick();
  };

  return (
    <div className="profile-btn" onClick={profileHandler}>
      <img src={`/assets/icons/client-review/${opt.src}`} alt="" />
      <style jsx>{`
        .profile-btn {
          height: 90px;
          width: 90px;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          transform: scale(${!opt.active ? ".8" : "1"});
          filter: grayscale(${!opt.active ? ".8" : "0"});
          z-index: 3;
          ${!opt.active ? "" : "border-right:5px solid #000000cc;"}
        }
        img {
          height: 80px;
          width: 80px;
          margin-top: 5px;
          margin-left: 2.5px;
        }
        .profile-btn {
          background-color: white;
          border-radius: 50%;
          box-shadow: 0 0 30px 0 rgba(152, 243, 255, 0.315);
        }
        @media screen and (max-width: 1000px) {
          .profile-btn {
            ${!opt.active
              ? ""
              : "border-right: none;border-bottom: 5px solid #00000099;"}
          }
        }
      `}</style>
    </div>
  );
};

const testiData = [
  {
    para:
      "Give your team the ability to quickly create, send, and track docs within an approval system that works for everyone. And will be very easy to work with (webuisoft) that workflow will work only for your benefit. From to quickly create, send, and track docs within an approval.",
    name: "Rohan Kumar",
    post: "CEO BigKing",
    profileImg: "1.svg",
  },
  {
    para:
      'Always available, extremely knowledgeable, and with a tremendous "can-do" attitude. Our company was on a tight timeline and a strict budget to create a first-class web app "the entire company was thrilled with it! Without any hesitation... highly recommended".',
    name: "Prince Vats",
    post: "co-founder JNVfaily",
    profileImg: "2.svg",
  },
  {
    para:
      "My business is now running fine because of WebUiSoft. They created a game-changer product for my startup. I have more two projects and now I decide to give both projects to WebUiSoft.",
    name: "Ujjwal mehra",
    post: "Manager in FutureFruit",
    profileImg: "3.svg",
  },
];
let timerId;
const debounceFunction = (func, delay) => {
  clearTimeout(timerId);
  timerId = setTimeout(func, delay);
};

const CardTileCon = ({ pos }) => {
  return (
    <div className="data-group">
      {testiData.map((e, i) => (
        <CardTile
          options={{ para: e.para, name: e.name, post: e.post }}
          key={i}
        />
      ))}
      <style jsx>{`
        .data-group {
          width: 2100px;
          display: flex;
          transition: all 1s ease-in-out;
          flex-direction: row;
          transform: translateX(
            ${pos == 0 ? "0" : pos == 1 ? "-700" : "-1400"}px
          );
        }
      `}</style>
    </div>
  );
};

export default function ClientReview() {
  const [activeState, setActiveState] = useState(0);
  let profileHandler = (i) => () => {
    setActiveState(i);
  };
  typeof window !== "undefined"
    ? debounceFunction(() => setActiveState([1, 2, 0][activeState]), 5000)
    : "";

  return (
    <div className="client-review">
      <div className="main">
        <div className="heading">
          <h3>Client’s Testimonials</h3>
          <h2>
            Client’s Review For Our <br /> Work Satisfaction.
          </h2>
        </div>
        <div className="bg-group">
          <div className="con">
            <CardTileCon pos={activeState} />
          </div>
          <div className="profile-btns">
            {testiData.map((e, i) => (
              <ProfileBtn
                options={{
                  src: e.profileImg,
                  active: i == activeState ? true : false,
                }}
                key={i}
                onclick={profileHandler(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .client-review {
          width: 100%;
          height: 800px;
          background-color: #f4f8ff;
          text-align: center;
          overflow: hidden;
        }
        .main {
          width: 1000px;
          height: 700px;
          position: absolute;
          margin: auto;
          left: 0;
          right: 0;
          margin-top: 50px;
        }
        .bg-group {
          width: 100%;
          height: 100%;
          background-size: fit;
          background-position-x: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bg-group::before {
          background: url("assets/images/nice-ball-1.png") no-repeat;
          content: "";
          position: absolute;
          /*animation: spin ease-in-out infinite 20s;*/
          width: 439px;
          height: 456px;
          z-index: 1;
          left: 0;
          top: 150px;
          opacity: 0.5;
        }
        .bg-group::after {
          background: url("assets/images/nice-ball-2.png") no-repeat;
          content: "";
          position: absolute;
          /* animation: spin ease-in alternate-reverse infinite 20s; */
          width: 439px;
          height: 456px;
          z-index: 1;
          right: 0;
          bottom: -150px;
          opacity: 0.5;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
        .con {
          width: 700px;
          height: 450px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 0 25px 0 #6fbaf734,
            inset 0 0 20px 0 rgba(128, 128, 128, 0.432);
          overflow: hidden;
          z-index: 2;
          border-top: 10px solid #03002eaa;
          border-bottom: 10px solid #03002eaa;
        }
        .con::after {
          position: absolute;
          content: "";
          width: 60px;
          height: 60px;
          background: url("assets/icons/quote-icon.svg") no-repeat;
          filter: brightness(0.2);
          opacity: 0.4;
          transform: rotate(180deg);
          left: 15%;
          top: 0;
          margin-top: 250px;
        }

        .heading h3 {
          font-size: 1rem;
          color: #6488df;
        }
        .heading h2 {
          color: #415e8d;
          font-size: 45px;
        }
        .heading h2::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 30px;
          background: url("data:image/svg+xml;charset=utf8,%3Csvg width='52'  xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.8 4.6C10.6 2.4 2.4-2 1 1 1 1-.5 2.5.2 5 .9 8 5.8 17.4 15.4 21.3c10.2 4 26.4.6 32.7-8.2 6.5-9.2 4-12.4-1-11.5-6 1.1-7.8 2.2-14.8 4-6.2 1.5-13.9 0-17.5-1z' fill='%23BAC3F6'/%3E%3C/svg%3E")
            no-repeat center;
          left: 0;
          margin-top: 55px;
        }
        .profile-btns {
          height: 400px;
          width: 100px;
          margin-left: -50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          padding: 40px 0;
        }

        @media screen and (max-width: 1000px) {
          .profile-btns {
            flex-direction: row;
            width: 400px;
            height: 100px;
            background-color: white;
            border-radius: 20px;
            box-shadow: 0 0 10px 0 rgba(213, 239, 250, 0.568);
            margin: auto;
            left: 0;
            right: 0;
            z-index: 10;
          }
          .bg-group {
            flex-direction: column;
          }
          .bg-group::before,
          .bg-group::after {
            animation: none;
          }
          .con {
            left: 10%;
            transform: scale(0.9);
            margin-top: 100px;
          }
          .con::after {
            margin-top: 0px;
            margin-left: -80px;
          }
        }
        @media screen and (max-width: 950px) {
          .bg-group::after,
          .bg-group::before {
            display: none;
          }

          .main {
            padding: 0;
            width: 100vw;
          }
          .con {
            transform: scale(0.8);
          }
        }
        @media screen and (max-width: 550px) {
          .bg-group .con {
            transform: scale(0.6);
            height: 550px;
            margin-top: 0px;
            margin-bottom: -230px;
            padding-top: 50px;
          }
        }
        @media screen and (max-width: 450px) {
          .bg-group .con {
            transform: scale(0.5, 0.6);
          }
          .profile-btns {
            transform: scale(0.8);
            margin-left: -5%;
          }
        }
        @media screen and (max-width: 350px) {
          .bg-group .con {
            transform: scale(0.4, 0.6);
            margin-bottom: -250px;
          }
          .profile-btns {
            transform: scale(0.6);
            margin-left: -15%;
          }
        }
      `}</style>
    </div>
  );
}
