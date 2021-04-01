const PricingCard = ({ img, type, featureList, price }) => (
  <div className="p-card">
    <img
      src={`/assets/images/pricing/card/${img}`}
      alt=""
      className="main-img"
    />
    <div className="price-level">{type}</div>
    <ul className="feature-list">
      {featureList.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
    <div className="price-data">
      <div className="currentP">{price[1]}</div>
      <strike className="prePrice">{price[0]}</strike>
    </div>
    <style jsx>{`
      .p-card {
        width: 400px;
        transition: all 0.5s linear;
      }
      .p-card:hover {
        transform: scale(1.05);
      }
      .price-level {
        font-size: 1.5rem;
        margin-top: -115%;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
        color: #444b8c;
      }
      ul.feature-list {
        list-style: none;
        margin-top: 90px;
        text-align: center;
      }
      ul.feature-list li {
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 10px;
      }
      ul.feature-list li::before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        margin-left: -30px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 15'%3E%3Cdefs/%3E%3Cpath fill='%23fff' d='M13.6 8l-.8-1.3.5-1.4c0-.2 0-.4-.2-.5l-1.3-.7-.2-1.4c0-.2-.2-.4-.4-.4H9.8L8.9 1a.4.4 0 00-.5-.1L7 1.6 5.8 1c-.2-.1-.4 0-.5.1l-1 1.2H3c-.1 0-.3.2-.3.4L2.3 4l-1.2.7c-.2.1-.3.3-.2.5l.4 1.4-.7 1.2v.5l1 1V11c0 .2 0 .4.3.4l1.3.4.6 1.3c0 .2.3.3.5.3l1.4-.3 1.1 1a.4.4 0 00.5 0l1.2-1 1.4.3c.2 0 .4 0 .4-.3l.6-1.3 1.4-.4c.2 0 .3-.2.3-.4l-.1-1.5 1-1c.2-.1.2-.3 0-.5zM10 6l-3 4.3-.4.2a.7.7 0 01-.5-.2l-2-2.1a.4.4 0 010-.6l.4-.5c.2-.2.4-.2.6 0l1.4 1.4L8.8 5c.2-.2.4-.3.6-.1l.6.4c.2.1.2.3 0 .5z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
      }

      .price-data {
        text-align: center;
        margin-top: 120px;
      }
      .price-data .currentP {
        font-size: 1.3rem;
        font-weight: bold;
        color: #26264f;
      }
      .prePrice {
        color: gray;
      }
      @media screen and (max-width: 1170px) {
        .price-data {
          margin-top: 100px;
        }
      }
      @media screen and (max-width: 1100px) {
        .price-data {
          margin-top: 70px;
        }
      }
      @media screen and (max-width: 1000px) {
        ul.feature-list {
          transform: scale(0.8);
          margin-top: 50px;
        }
      }
      @media screen and (max-width: 880px) {
        .price-data {
          transform: scale(0.7);
          margin-top: 40px;
        }
      }
      @media screen and (max-width: 770px) {
        .p-card {
          margin-top: 100px;
        }
        .p-card:nth-child(1) {
          margin-top: 10px;
        }
        .price-data,
        ul.feature-list {
          transform: scale(1);
        }
        ul.feature-list {
          margin-top: 90px;
        }
        .price-data {
          margin-top: 120px;
        }
      }
      @media screen and (max-width: 410px) {
        .p-card {
          width: 300px;
        }
        .price-data {
          transform: scale(0.7);
          margin-top: 70px;
        }
        ul.feature-list {
          transform: scale(0.8);
          margin-top: 50px;
        }
      }
    `}</style>
  </div>
);

const priceList = [
  {
    img: "4.svg",
    id: "1",
    type: "basic",
    featureList: [
      "User login system",
      "database design",
      "Custom Admin Dashboard",
      "40 days maintanace",
    ],
    price: ["$329.99", "$299.99/-"],
  },
  {
    img: "5.svg",
    id: "2",
    type: "premium",
    featureList: [
      "PRODUCT SELLING SYSTEM",
      "60 days maintanace",
      "advance dashboard",
      "Bloging system",
    ],
    price: ["$429.99", "$399.99/-"],
  },
  {
    img: "6.svg",
    id: "3",
    type: "enterprise",
    featureList: [
      "SEO solutions",
      "100 days maintanace",
      "custom support",
      "clean design",
    ],
    price: ["$699.99", "$549.99/-"],
  },
];

export default function PricingDynamic() {
  return (
    <div className="pricing-body">
      <h2>Dynamic Website development</h2>
      <div className="card-con">
        {priceList.map((e, i) => (
          <PricingCard
            type={e.type}
            price={e.price}
            key={i}
            img={e.img}
            featureList={e.featureList}
          />
        ))}
      </div>

      <style jsx>{`
        .pricing-body {
          width: 100%;
          min-height: 600px;
          padding: 10% 0;
        }
        .card-con {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-evenly;
        }
        .pricing-body h2 {
          text-align: center;
          text-transform: uppercase;
          color: #444b8c;
          height: 30px;
        }
        .pricing-body h2::before {
          position: absolute;
          content: "";
          width: 13px;
          height: 13px;
          border-radius: 50%;
          margin: auto;
          margin-top: 8px;
          margin-left: -30px;
          background-image: linear-gradient(90deg, #ff2681, #bd11fa);
          box-shadow: 0 0 0 5px #fec0f4;
          animation: glow-shadow 2s linear infinite;
        }
        @keyframes glow-shadow {
          to {
            box-shadow: 0 0 0 15px #fec0f4;
          }
          from {
            box-shadow: 0 0 0 5px #fec0f4;
          }
        }

        @media screen and (max-width: 770px) {
          .card-con {
            flex-direction: column;
            align-items: center;
          }
          .pricing-body {
            height: 2100px;
          }
        }
        @media screen and (max-width: 410px) {
          .pricing-body {
            height: 1600px;
          }
        }
      `}</style>
    </div>
  );
}
