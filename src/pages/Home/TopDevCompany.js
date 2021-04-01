export default function TopDevCompany(props) {
  return (
    <section className="top-dev-company" {...props}>
      <img
        src="/assets/images/top-development-company.png"
        className="left-img"
        alt=""
      />
      <div className="right-content">
        <h3>Top Website Development Company</h3>
        <h2>We Focus on Growing your Business with high speed</h2>
        <p>
          We are offering cost effective Web Designing, Web Development,
          eCommerce Websites and Customs Website Development.
        </p>
        <p>
          We understand your needs and then market completely. That’s why we
          provide the best professional website designs and offers the best
          E-commerce website designing services as per the need of the client.
        </p>
        <aside>
          <img src="/assets/icons/quote-icon.svg" alt="" />
          “Web applications play biggest role in the market, that’s why it’s a
          basic need of any kind of business.”
        </aside>
        <a href="/top-dev-company" className="lm-btn">
          Learn More ...
        </a>
      </div>
      <style jsx>{`
        .top-dev-company {
          height: 800px;
          width: 100%;
          background-image: url("/assets/images/top-dev-com-bg.svg");
          background-size: cover;
          display: flex;
          flex-direction: row;
          padding-top: 200px;
          margin-top: -50px;
          font-family: "Roboto";
          justify-content: space-between;
        }
        .left-img {
          margin-top: 50px;
          width: 50%;
        }
        .right-content {
          padding-top: 90px;
          padding-left: 20px;
        }
        .right-content h3 {
          color: #ff6626;
          padding-left: 30px;
        }
        .right-content h3::before {
          content: "";
          width: 10px;
          height: 10px;
          background-color: #ff6626;
          position: absolute;
          border-radius: 50%;
          margin-left: -25px;
          box-shadow: 0 0 0 5px #ff110052;
          margin-top: 7px;
          animation: 2s ease-in pluse infinite;
        }
        .right-content h2 {
          font-size: 40px;
          width: 90%;
          color: #444b8c;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .right-content p {
          color: #444b8c;
          width: 75%;
          font-size: 17px;
          margin-top: 10px;
        }
        .right-content aside img {
          width: 80px;
          position: absolute;
          margin-left: -100px;
          margin-top: -10px;
        }
        .right-content aside {
          color: #ff6626;
          width: auto;
          padding-left: 100px;
          margin-top: 40px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        a.lm-btn {
          border-radius: 50px;
          background: linear-gradient(45deg, #4807fa, #ac4cfa);
          color: white;
          font-weight: bold;
          overflow: hidden;
          font-size: 20px;
          text-align: center; 
          line-height: 55px;
          box-shadow: 0 8px 10px 0 #94c1ea77;
          padding: 0 50px;
          position: absolute;
          margin-top: 20px;
        }
        .lm-btn::before {
          content: "";
          width: 200px;
          height: 65px;
          transition: all 0.8s ease-in-out;
          border-radius: 50px;
          position: absolute;
          background-color: white;
          transform: translateX(-280px);
          opacity: 0.5;
        }
        .lm-btn:hover::before {
          transform: translateX(-40px);
          opacity: 0.02;
        }
        @keyframes pluse {
          from {
            box-shadow: 0 0 0 5px #ff110052;
          }
          to {
            box-shadow: 0 0 0 12px #ff110011;
          }
        }
        @media screen and (max-width: 1250px) {
          .right-content h2 {
            width: 500px;
          }
          .right-content aside {
            width: 400px;
          }
          .left-img {
            height: 400px;
            width: 50%;
            margin-top: 150px;
          }
        }
        @media screen and (max-width: 1080px) {
          .right-content h2 {
            font-size: 2rem;
          }
        }
        @media screen and (max-width: 1080px) {
          .left-img {
            display: none;
          }
          .right-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .right-content aside,
          .right-content h2,
          .right-content p {
            width: 70%;
          }
          a.lm-btn {
            margin-top: 380px;
          }
        }
        @media screen and (max-width: 680px) {
          .top-dev-company{
            height:1000px;
            
          }
          .right-content{
            text-align:justify;
          }
          .right-content{
            padding-top:200px;
          }
          .lm-btn{
            transform:translateY(100px);
          }
          
        }
        @media screen and (max-width: 500px) {
          .right-content aside,
          .right-content h2,
          .right-content p {
            width: 90% !important;
          }
        }
        @media screen and (max-width: 400px) {
          .lm-btn{
            transform:translateY(150px);
          }
          .right-content{
            padding-left:0;
          }
        }
        @media screen and (max-width: 350px) {
          .right-content h2{
            font-size:1.5rem;
          }
          
        }
      `}</style>
    </section>
  );
}
