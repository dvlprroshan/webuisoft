import { Swiper, SwiperSlide } from "swiper/react";

const CardTile = ({ options: opt }) => {
  const gradient =
    opt.key % 2 == 0 ? "45deg, #ff3030, #ff7e30" : "45deg, #4807fa, #ac4cfa";
  return (
    <div className="card">
      <div className="img-con">
        <div className="img"></div>
      </div>

      <div className="down-con">
        <div className="tag">{opt.tag}</div>
        <div className="para">{opt.para}</div>
      </div>
      <style jsx>{`
        div {
          transition: all 0.5s ease;
        }
        .card {
          width: 300px;
          height: 330px;
          margin-left:10px;
          overflow: hidden;
        }
        .card:hover {
          transform: translateY(10px);
        }

        .img-con {
          width: 300px;
          height: 200px;
          border-radius: 20px;
          overflow: hidden;
          z-index: 0;
          position: absolute;
          box-shadow: 0 0 10px 0 #94c1ea44;
        }
        .img {
          transition: all 1s ease;
          width: 300px;
          height: 200px;
          background-image: url("${opt.imgLink}");
        }
        .card:hover .img {
          transform: scale(1.2);
          z-index:0;
        }
        .dec-card {
          height: 300px;
          width: 300px;
          position: absolute;
        }
        .tag {
          color: #6488df;
          font-size: 1.1rem;
          margin-left: 10px;
          margin-top: 15px;
          font-weight: bold;
          width: fit-content;
          border-radius: 5px;
        }
        .down-con {
          width: 300px;
          margin-top: 185px;
          z-index: 1;
          box-shadow: 0 0 10px 0 #94c1ea44;
          border-bottom-right-radius: 10px;
          border-bottom-left-radius: 10px;
          padding-top: 10px;
          background-color:#fff;
          padding-bottom: 8px;
        }

        .para {
          margin-left: 10px;
          color: rgb(165, 165, 165);
        }
        .card:hover .down-con {
          background: linear-gradient(${gradient});
        }
        .card:hover .tag {
          color: rgb(229, 192, 253);
        }
        .card:hover .para {
          color: white;
        }
      `}</style>
    </div>
  );
};

const cardsData = [
  {
    imgLink:
      "https://i.picsum.photos/id/1060/536/354.jpg?blur=2&hmac=0zJLs1ar00sBbW5Ahd_4zA6pgZqCVavwuHToO6VtcYY",
    tag: "Technologoy",
    para:
      "this is sample blog section and now runnif fbrev fdvuhfd vfhvufbdv dfhubv dfhvufdh",
  },
  {
    imgLink:
      "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    tag: "Website Aim",
    para:
      "this is sample blog section and now runnif fbrev fdvuhfd vfhvufbdv dfhubv dfhvufdh",
  },
  {
    imgLink:
      "http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-1-600x338.jpg",
    tag: "Seo & Responsive",
    para:
      "this is sample blog section and now runnif fbrev fdvuhfd vfhvufbdv dfhubv dfhvufdh",
  },
  {
    imgLink:
      "http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-13-390x260.jpg",
    tag: "Seo & Responsive",
    para:
      "this is sample blog section and now runnif fbrev fdvuhfd vfhvufbdv dfhubv dfhvufdh",
  },
  {
    imgLink:
      "http://axilthemes.com/themes/blogar/wp-content/uploads/2021/01/demo_image-14-390x260.jpg",
    tag: "Seo & Responsive",
    para:
      "this is sample blog section and now runnif fbrev fdvuhfd vfhvufbdv dfhubv dfhvufdh",
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="heading">
        <h3>Innovative Programs News</h3>
        <h2>RECENT ARTICLES</h2>
      </div>
      <div className="main-con">
        <div className="main">
          {cardsData.map((e, i) => (
            <CardTile
              key={i}
              options={{
                tag: e.tag,
                para: e.para,
                imgLink: e.imgLink,
                key: i + 2,
              }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .blog-section {
          width: 100%;
          height: 600px;
          background-color: #f4f8ff;
          padding-top: 100px;
        }
        .heading {
          text-align: center;
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
        .main {
          height: 400px;
          width: max-content;
          overflow: hidden;
          margin: auto;
          left: 0;
          right: 0;
          margin-top: 50px;
          display: flex;
          margin-left: -20%;
          flex-direction: row;
        }
        .main-con {
          width: 90vw;
          height: 400px;
          overflow: hidden;
          position: absolute;
          margin: auto;
          left: 0;
          right: 0;
        }
        @media screen and (max-width:650px){
          .blog-section{
            height:1900px;
          }
          .main-con{
            height:auto;
          }
          .main {
            flex-direction:column;
            height:auto;
            margin-left:0;
            width:100%;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogSection;
