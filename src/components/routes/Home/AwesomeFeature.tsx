function Card({ options }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={`/assets/icons/${options.icon}.svg`} alt="" />
      </div>
      <h3>{options.heading}</h3>
      <p>{options.para}</p>
      <style jsx>{`
        .card {
          width: 100%;
          height: 130px;
          background-color: white;
          box-shadow: 0 0 30px 0 #94c1ea44;
          border-radius: 20px;
          margin-top: 40px;
          text-align: left;
          overflow: hidden;
          padding: 0 15px 0 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.5s ease;
        }
        .card h3 {
          color: #31317e;
          font-size: 30px;
        }
        .card p {
          color: #444b8c;
          font-size: 18px;
        }
        .card-img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: ${options.color}19;
          position: absolute;
          margin-left: -110px;
          box-shadow: 0 0 0 5px white, 0 0 0 10px ${options.color}19;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card-img img {
          height: 30px;
          width: 30px;
        }
        .card-img::before {
          content: "";
          position: absolute;
          width: 4px;
          height: 40px;
          background-color: ${options.color};
          border-radius: 2px;
          margin-left: -150px;
          transition: all 0.5s ease;
          cursor: pointer;
        }
        .card:hover {
          transform: scale(1.05);
        }
        .card:hover .card-img::before {
          height: 80px;
          margin-left: -148px;
        }
        .card:hover .card-img img {
          animation: shake 0.3s ease-in-out 0.3s 4 alternate;
        }
        @keyframes shake {
          from {
            transform: rotate(10deg);
          }
          to {
            transform-origin: center center;
            transform: rotate(-10deg);
          }
        }
        @media screen and (max-width: 1250px) {
          .card h3 {
            font-size: 25px;
          }
        }
        @media screen and (max-width: 1090px) {
          .card h3 {
            font-size: 20px;
          }
          .card p {
            font-size: 16px;
          }
        }
        @media screen and (max-width: 400px) {
          .card{
            text-align:justify;
            padding-left:80px;
          }
          .card-img{
            height:40px;
            width:40px;
          }
          .card-img{
            margin-left:-60px;
          }
          .card-img::before {
            margin-left:-80px;
          }
        }
      `}</style>
    </div>
  );
}

export default function AwesomeFeature() {
  const cardData = [
    {
      heading: "Responsive Layout",
      para:
        "You may open our website in any kind of devices without lossing user experience.",
      icon: "awesome-icon-1",
      color: "#71FF90",
    },
    {
      heading: "Track Project Status",
      para: "We provide a dashboard to track the current status of project.",
      icon: "awesome-icon-2",
      color: "#FFBC8C",
    },
    {
      heading: "SEO Friendly",
      para:
        "Easily rank on any kind of search engine like Google, Bing, Yahoo. ",
      icon: "awesome-icon-3",
      color: "#6E8EFF",
    },
    {
      heading: "Free 30 Days Maintenance",
      para: "We provide 30 days maintenance at no cost, it can be extened.",
      icon: "awesome-icon-4",
      color: "#FE6AF8",
    },
    {
      heading: "Custom Admin Dashboard",
      para: "We also provide custom admin dasboard in dynamic website.",
      icon: "awesome-icon-5",
      color: "#5CDEF0",
    },
    {
      heading: "Modern Ui/Ux Design",
      para:
        "Creating interfaces that make every digital interaction a delightful user experience.",
      icon: "awesome-icon-6",
      color: "#C171FF",
    },
  ];
  return (
    <section className="asm">
      <h3>advantages of our services</h3>
      <h2>AWESOME FEATURES</h2>
      <div className="card-con">
        <div className="inner-con">
          {cardData.map((elm, i) =>
            i < 3 ? <Card options={elm} key={i} /> : ""
          )}
        </div>
        <div className="inner-con">
          {cardData.map((elm, i) =>
            i > 2 ? <Card options={elm} key={i} /> : ""
          )}
        </div>
      </div>
      <style jsx>{`
        .asm {
          text-align: center;
          font-family: "Roboto";
          padding-top: 5%;
          height: auto;
          padding-bottom: 30px;
        }
        h3 {
          color: #6488df;
          font-weight: 100;
          font-size: 22px;
        }
        h2 {
          color: #415e8d;
          font-size: 46px;
        }
        h2::after {
          content: "";
          position: absolute;
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='52'  xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.8 4.6C10.6 2.4 2.4-2 1 1 1 1-.5 2.5.2 5 .9 8 5.8 17.4 15.4 21.3c10.2 4 26.4.6 32.7-8.2 6.5-9.2 4-12.4-1-11.5-6 1.1-7.8 2.2-14.8 4-6.2 1.5-13.9 0-17.5-1z' fill='%23BAC3F6'/%3E%3C/svg%3E");
          min-width: 100px;
          min-height: 30px;
          width: 100%;
          background-position: center;
          left: 0;
          background-repeat: no-repeat;
          margin-top: 55px;
        }
        .card-con {
          width: 100%;
          height: auto;
          display: flex;
        }
        .card-con .inner-con {
          width: 50%;
          padding: 0 5%;
        }
        @media screen and (max-width: 1090px) {
          .card-con .inner-con {
            padding: 0 1%;
          }
        }
        @media screen and (max-width: 1090px) {
          .card-con {
            flex-direction: column;
            padding: 0 5%;
          }
          .card-con .inner-con {
            width: 100%;
          }
        }
       
      `}</style>
    </section>
  );
}
