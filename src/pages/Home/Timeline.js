function TimeLineCard({ options: opt }) {
  let isIconRight = opt.dir.toUpperCase() === "RIGHT" ? true : false;
  let grdColor = opt.color;
  let icon = opt.iconSrc;
  return (
    <div className="card">
      <dl>
        {opt.hList.map((e, i) =>
          i == 0 ? <dt key={i}>{e}</dt> : <dd key={i}>{e}</dd>
        )}
      </dl>
      <div className="vector-circle"></div>
      <div className="img-vector">
        <img src={`/assets/icons/timeline/${icon}`} alt="" />
      </div>
      <style jsx>{`
        .card {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          height: 190px;
        }
        .vector-circle {
          width: 55px;
          height: 55px;
          background: linear-gradient(0deg, ${grdColor[0]}, ${grdColor[1]});
          border-radius: 50%;
        }
        .vector-circle::before {
          content: "";
          position: absolute;
          width: 35px;
          height: 35px;
          background-color: white;
          border-radius: 50%;
          margin-top: 10px;
          margin-left: -17.5px;
        }
        .vector-circle::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 100px;
          border-radius: 5px;
          background-color:#d8dee8;
          background-size:10px 200px;
          background-attachment: fixed;
          margin-top: 70px;
          margin-left: -5px;
          opacity:.5;
          
        }
        .card dl {
          width: 250px;
          position: absolute;
          ${isIconRight ? "left" : "right"}: 20%;
          margin-top: ${opt.hList.length < 4 ? "-10px" : "-30px"};
        }
        .card dl dt {
          color: #999fd7;
          font-size: 30px;
        }
        .card dl dd {
          color: #444b8c;
          font-size: 18px;
        }
        .img-vector {
          height: 85px;
          width: 85px;
          position: absolute;
          border-radius: 50%;
          background-color: ${grdColor[2]};
          ${isIconRight ? "right" : "left"}: 10%;
          margin-top: -22.5px;
          box-shadow: 0 0 0 13px white, 0 0 0 23px ${grdColor[2]};
          display:flex;
          justify-content:center;
          align-items: center;
        }
        .img-vector::before {
          content: "";
          position: absolute;
          width: 250px;
          height: 1px;
          background-color: #d8dee8;
          margin-top: 22.5px;
          margin-${isIconRight ? "left" : "right"}: -450px;
          ${!isIconRight ? "margin-left:00px;" : ""};
        }
        .img-vector::after {
          height:130px;
          width:130px;
          position:absolute;
          content:'';
          left:0;
          margin-left:-22.5px;
          border-radius:50%;
          opacity:.5;          
          border-left: 5px solid ${grdColor[0]};
          animation:border-spin 3s linear infinite;
        }
        .img-vector img{
          position:absolute;
          height:30px;
          width:30px;
        }
        
        @keyframes border-spin {
          from {
            transform: rotate(0deg)
          }to{
            transform:rotate(360deg)
          }
        }

        @media screen and (max-width: 1090px){
          .img-vector::before {
            display:none;
          }
          .img-vector{
            transform:scale(.8);
          }
          .card dl{
            transform:scale(.8);
          }
          
        }
        @media screen and (max-width:900px){
          .card dl{
            ${isIconRight ? "left" : "right"}: 10%;
          }
        }
        @media screen and (max-width:600px){
          .card dl{
            ${isIconRight ? "left" : "right"}: -5%;
          }
        }
        @media screen and (max-width:420px){
          .card dl{
            right:0 ;
            left:unset;
          }
          .img-vector{
            display:none;
          }
          .vector-circle{
            position:absolute;
            left:10%;
          }
        }
        
      `}</style>
    </div>
  );
}

const cardData = [
  {
    iconSrc: "1.svg",
    hList: [
      "Project Initiation",
      "Resources alloccation",
      "Documentation",
      "Project planing",
    ],
    colorList: ["#6165D7", "#C9CBFF", "#F4F4FF"],
  },
  {
    iconSrc: "2.svg",
    hList: [
      "Conceptualization",
      "Visualization",
      "Research & Analysis",
      "Wireframe",
    ],
    colorList: ["#FF6626", "#FFAB88", "#FFE7DC"],
  },
  {
    iconSrc: "3.svg",
    hList: ["Designing", "Art Work", "Client Approval"],
    colorList: ["#29FF58", "#A3FFB2", "#E3FFE9"],
  },
  {
    iconSrc: "4.svg",
    hList: [
      "Development",
      "Implement design in code",
      "CMS development",
      "Server Realization",
    ],
    colorList: ["#6067A5", "#C5CBFF", "#F2F3FF"],
  },
  {
    iconSrc: "5.svg",
    hList: ["Beta Launch", "Code Uplioding", "Client Acceptance"],
    colorList: ["#FFC444", "#FFEFCB", "#FFF5E0"],
  },
  {
    iconSrc: "6.svg",
    hList: [
      "Testing",
      "Quality Check & Control",
      "Bugs Removal",
      "Browser Compatibility",
    ],
    colorList: ["#FB6FBB", "#FFB8DF", "#FFEBF6"],
  },
];

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="bg-vector-group">
        <div className="solar-part">
          <img src="/assets/images/vector-bg/solar-1.svg" alt="" />
        </div>
        <div className="right-solar">
          <img src="/assets/images/vector-bg/solar-2.svg" alt="" />
        </div>
        <div className="left-solar">
          <img src="/assets/images/vector-bg/solar-3.svg" alt="" />
        </div>
        <div className="sp-sec">
          <img src="/assets/images/vector-bg/solar-1.svg" alt="" />
        </div>

      </div>
      <hgroup>
        <h3>our project development process</h3>
        <h2>DEVELOPMENT TIMELINE</h2>
      </hgroup>
      <div className="main-con">
        <div className="container">
          {cardData.map((e, i) => (
            <TimeLineCard
              options={{
                dir: i % 2 == 0 ? "right" : "left",
                hList: e.hList,
                color: e.colorList,
                iconSrc: e.iconSrc,
              }}
              key={i}
            />
          ))}
          <div className="launch">
            <div className="final-launch">
              <img src="/assets/icons/timeline/7.svg" alt="" />
            </div>
            <dl>
              <dt>Final Launch</dt>
              <dd>Code Transfer</dd>
              <dd>30 days maintenance</dd>
            </dl>
          </div>
        </div>
      </div>
      <style jsx>{`
        .timeline {
          height: 1800px;
          width: 100%;
          background-color: #ffffff;
          text-align: center;
          padding-top: 50px;
          overflow: hidden;
          z-index: -2;
          background-image: url("/assets/images/timeline-bg.png");
          background-size: 100% 900px;
          background-position-y: 300px;
          background-repeat: no-repeat;
        }
        .main-con{
          width:100%;
          height:auto;
          background-color:red;
          position:absolute;
        }
        hgroup {
          margin-top: -15%;
          width: 100%;
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
          margin-top: 60px;
        }
        .bg-vector-group {
          position: relative;
        }
        .solar-part {
          width: 500px;
          height: 500px;
          justify-content: center;
          align-items: center;
          margin-left: -200px;
          margin-top: -250px;
        }
        .solar-part img {
          width: 100%;
          height: 100%;
          animation: spin 20s ease infinite;
        }
        .container {
          width: auto;
          position: absolute;
          margin: auto;
          left: 0;
          right: 0;
          margin-top: 100px;
        }
       

        .right-solar img {
          position: absolute;
          height: 500px;
          width: 500px;
          margin-left: 350px;
          margin-top: -50px;
          animation: spin 10s linear infinite;
        }
        .left-solar img {
          position: absolute;
          height: 600px;
          width: 600px;
          left: 0;
          margin-top: 400px;
          margin-left: -300px;
          animation: spin 10s linear infinite;
        }
        .sp-sec img {
          position: absolute;
          margin-left: 300px;
          height: 600px;
          width: 600px;
          margin-top: 840px;
          animation: spin 10s reverse ease-in-out infinite;
        }
        .final-launch {
          width: 100px;
          height: 100px;
          background: #f4f4ff;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          position: absolute;
          margin: auto;
          left: 0;
          right: 0;
          margin-top: 50px;
          box-shadow: 0 0 0 15px white, 0 0 0 25px #f4f4ff;
        }
        .final-launch::after {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          border-top: 15px solid #a6bcd0;
          border-bottom: 15px solid #a6bcd0;
          border-radius: 50%;
          opacity: 0.8;
          animation: spin 3s alternate ease-in-out infinite;
        }
        .launch dl dt {
          font-size: 40px;
          font-weight: bold;
          color: #415e8d;
        }
        .launch dl {
          margin-top: 200px;
          position: absolute;
          width: 100%;
        }
        .launch dl dd {
          font-size: 18px;
          color: #6488df;
        }
        .final-launch::before {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          border-left: 15px solid #a6bcd0;
          border-right: 15px solid #a6bcd0;
          border-radius: 50%;
          opacity: 0.7;
          animation: spin 3s ease-in-out infinite;
        }
        .final-launch img {
          width: 50px;
          height: 50px;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @media screen and (max-width: 1090px) {
          .container {
            margin-left: 0 !important;
            margin-top: 100px;
          }
        }
       

        @media screen and (max-width:920px){
          .bg-vector-group{
            display:none;
          }
          hgroup{
            margin-top:100px;
          }
          .timeline{
            background-image:none;
          }
        }
        @media screen and (max-width:420px){
          .final-launch,.launch dl {
            transform:scale(.7);
          }
          .final-launch{
            margin-top:0px;
          }
          .launch dl{
            margin-top:120px;
          }
        }
       
      `}</style>
    </div>
  );
}
