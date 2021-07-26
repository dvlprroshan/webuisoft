import Heading from "../../global/Heading";
import ServicesListData from "./ServiceListData";

const ServiceCard = ({ img, heading, decription }) => {
  return (
    <div className="service-card">
      <div className="img"></div>
      <div className="right-con">
        <div className="head">{heading}</div>
        <div className="dec">{decription}</div>
      </div>
      <style jsx>{`
        .service-card {
          height: 150px;
          width: auto;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 0 35px 0 rgba(8, 124, 249, 0.172);
          display: flex;
          flex-direction: row;
          overflow: hidden;
          transition: all 0.5s linear;
        }
        .service-card:hover {
          transform: scale(1.05);
        }
        .img {
          height: 100%;
          min-width: 150px;
          background-image: url("${img}");
          background-size: cover;
          background-position: center;
          filter: brightness(0.9);
        }
        .right-con {
          width: 100%;
          position: relative;
          right: 0;
          height: 150px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-direction: column;
        }
        .right-con .head {
          font-size: 1.3rem;
          color: #213e6e;
          font-weight: bold;
          text-transform: uppercase;
          width: 100%;
        }
        .dec {
          color: #425f8d;
        }
      `}</style>
    </div>
  );
};

const ServicesList = () => {
  return (
    <div className="services-list">
      <Heading
        firstHeading="services list"
        secondHeading="We Offer wide variety of services  based on web"
      />
      <div className="service-con">
        {ServicesListData.map((e, _i) => {
          return (
            <ServiceCard img={e.img} key={e.id} heading={e.heading} decription={e.des} />
          );
        })}
      </div>
      <style jsx>{`
        .services-list {
          width: 100%;
          height: auto;
          padding-top: 80px;
        }
        .service-con {
          width: 100%;
          height: auto;
          min-height: 300px;
          display: grid;
          grid-template-areas: "a a a";
          justify-content: space-evenly;
          grid-row-gap: 30px;
          grid-column-gap: 30px;
          padding: 50px 10px;
        }
        @media screen and (max-width: 1300px) {
          .service-con {
            grid-template-areas: "a a";
          }
        }
        @media screen and (max-width: 820px) {
          .service-con {
            grid-template-areas: "a";
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesList;
