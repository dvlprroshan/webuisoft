const MainServices = () => {
  return (
    <div className="main-services">
      <div className="top-heading">
        <h3>WHY CHOOSE US</h3>
        <h4>
          We Are Very Different Form <br /> Others IT Solutions
        </h4>
      </div>

      <div className="card-con">
        <div className="card">
          <div className="inner-img">
            <img src="assets/images/services/top-icon1.svg" alt="" />
            <div className="vector-circle"></div>
          </div>
          <div className="data">
            <h4>Lorem ipsum dolor sit.</h4>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam
              dolores quo cupiditate, facilis consequatur ducimus. Pariatur quas
              cumque officia dicta, veniam repellendus optio. Nemo.
            </h5>
          </div>
        </div>
        <div className="card">
          <div className="inner-img">
            <img src="assets/images/services/top-icon2.svg" alt="" />
            <div className="vector-circle"></div>
          </div>
          <div className="data">
            <h4>Rerum beatae </h4>
            <h5>
              Eaque nihil maxime nemo, quasi blanditiis, molestias officiis
              laudantium inventore odit, saepe minima vel quos odio eveniet
              architecto iusto obcaecati corrupti porro. Doloremque, at est.
            </h5>
          </div>
        </div>
        <div className="card">
          <div className="inner-img">
            <img src="assets/images/services/top-icon3.svg" alt="" />
            <div className="vector-circle"></div>
          </div>
          <div className="data">
            <h4>Nihil aperiam </h4>
            <h5>
              Neque, atque? Libero ducimus molestias commodi debitis, esse
              consequatur! Ab suscipit ratione ullam eaque, optio iste quasi
              veniam ipsa consequuntur labore similique natus magnam expedita!
            </h5>
          </div>
        </div>
      </div>
      <style jsx>{`
        .main-services {
          width: 100%;
          height: 700px;
          background-color: #000530e6;
          overflow: hidden;
          background-image: url("assets/images/services/2.png");
          background-size: 100% auto;
          background-repeat: no-repeat;
        }
        .main-services::before {
          position: absolute;
          content: "";
          height: 101%;
          width: 20%;
          background-image: url("assets/images/services/1.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .top-heading {
          text-align: center;
          color: white;
          margin-top: 100px;
        }
        .top-heading h3 {
          font-size: 1rem;
        }
        .top-heading h4 {
          font-size: 3.4rem;
        }
        .card-con {
          width: 100%;
          height: 400px;
          display: grid;
          grid-template: "1 1 1";
          grid-gap: 2%;
          padding: 0 2%;
        }
        @media screen and (max-width: 1000px) {
          .card-con {
            grid-template: "1 1 ";
            height: 800px;
          }
          .main-services {
            height: 1100px;
          }
          .main-services::before {
            background-repeat: repeat-y;
          }
        }
        @media screen and (max-width: 700px) {
          .card-con {
            grid-template: "1";
          }
          .main-services {
            height: 1700px;
          }
        }
        .card-con .card {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 30px;
        }
        .inner-img {
          width: 200px;
          height: 200px;
          background: radial-gradient(
            circle,
            #8383f9 0%,
            rgba(209, 209, 223, 0) 50%,
            rgba(255, 255, 255, 0) 74%
          );
          display: flex;
          justify-content: center;
          border-radius: 50%;
        }
        .inner-img img {
          height: 60px;
          width: 60px;
          position: absolute;
          margin: auto;
          margin-top: 70px;
        }
        .vector-circle {
          position: absolute;
          height: 200px;
          width: 200px;
          border: 2px solid #8383f922;
          border-radius: 50%;
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .vector-circle::before {
          position: absolute;
          content: "";
          border-radius: 50%;
          width: 20px;
          height: 20px;
          background: white;
          margin-top: -10px;
        }
        .vector-circle::after {
          position: absolute;
          content: "";
          border-radius: 50%;
          width: 10px;
          height: 10px;
          background: white;
          bottom: 0;
          transform: translateY(5px);
        }
        .data {
          margin-top: 30px;
          color: white;
        }
        .data h4 {
          font-size: 1.5rem;
        }
        .data h5 {
          margin-top: 10px;
          font-size: 1rem;
          font-weight: normal;
          padding: 0 5%;
        }
      `}</style>
    </div>
  );
};

export default MainServices;
