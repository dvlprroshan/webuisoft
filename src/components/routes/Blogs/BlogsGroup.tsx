import React, { ReactElement } from "react";
import BlogCatLabel from "../../global/BlogCatLabel";

interface Props {}

const BlogCard = ({ imgSrc }) => {
  return (
    <div className="blogCard">
      <div className="cardImg"></div>
      <div className="cardTags">
        <BlogCatLabel theme="orange" size="small" text="Technical" />
        <BlogCatLabel theme="skyblue" size="small" text="Bootstarp" />
      </div>
      <div className="cardHeading">
        Lorem ipsum dolor sit Ratione nam ducimus quidem corrupti?
      </div>

      <div className="cardDec">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        veniam excepturi repellendus hcdunnv .
      </div>
      <div className="creatorProfile">
        <div className="profileImg"></div>
        <div className="right">
          <div className="position">UI Designer </div>
          <div className="name">Roshan Kumar</div>
        </div>
      </div>
      <style jsx>{`
        .blogCard {
          width: 300px;
          height: 550px;
          display: flex;
          flex-direction: column;
          row-gap: 10px;
          cursor: pointer;
        }
        .creatorProfile {
          display: flex;
          justify-self: flex-end;
        }
        .creatorProfile .profileImg {
          width: 50px;
          height: 50px;
          background-image: url("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200");
          background-size: cover;
          background-position: center;
          border-radius: 50%;
        }
        .creatorProfile .right {
          margin-left: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .creatorProfile .position {
          font-weight: bold;
          font-size: 1.1em;
          color: #010a49;
        }
        .creatorProfile .name {
          color: rgb(182, 187, 252);
          font-style: italic;
          font-size: 0.9em;
        }
        .cardImg {
          height: 300px;
          width: 300px;
          background-image: url("${imgSrc}");
          background-size: cover;
          border-radius: 20px;
        }
        .cardTags {
          display: flex;
          margin-top: 5px;
        }
        .cardTags .tag {
          color: rgb(82, 82, 255);
          background-color: rgb(218, 218, 252);
          padding: 8px 13px;
          transform: scale(0.8);
          font-weight: bold;
          border-radius: 5px;
        }
        .cardHeading {
          font-size: 1.3rem;
          font-weight: bold;
          color: #010a49;
        }
        .cardDec {
          font-size: 0.9rem;
          color: #afafaf;
        }
      `}</style>
    </div>
  );
};

export default function BlogsGroup({}: Props): ReactElement {
  return (
    <div className="blogGroup">
      {[
        {
          imgSrc: "https://pbs.twimg.com/media/DwVdtEOWoAEXMul.jpg",
          id: 1,
        },
        {
          imgSrc: "https://pbs.twimg.com/media/Dwr4bnNX0AADYbe.jpg",
          id: 2,
        },
        {
          imgSrc: "https://pbs.twimg.com/media/DwVdtFKXcAE8B7a.jpg",
          id: 3,
        },
        {
          imgSrc:
            "https://inspgr.id/app/uploads/2019/03/illustration-ranganath-krishnamani-01.jpg",
          id: 4,
        },
        {
          imgSrc:
            "https://i.pinimg.com/originals/bf/57/87/bf5787884b974b40f563878e1938ff3e.jpg",
          id: 5,
        },
        {
          imgSrc:
            "https://i1.wp.com/mossandfog.com/wp-content/uploads/2019/09/80afe184313225.5d5957e61ea87.png?fit=1278%2C1036&ssl=1",
          id: 6,
        },
        {
          imgSrc:
            "https://i.pinimg.com/originals/b4/fd/7a/b4fd7a3c267c24e9aed7f64bb3ad6a89.png",
          id: 7,
        },
        {
          imgSrc:
            "https://inspgr.id/app/uploads/2019/03/illustration-ranganath-krishnamani-03.jpg",
          id: 8,
        },
      ].map((e) => (
        <BlogCard key={e.id} imgSrc={e.imgSrc} />
      ))}
      <style jsx>{`
        .blogGroup {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          width: 1150px;
          position: relative;
          margin: auto;
          left: 0;
          right: 0;
          margin-top: 30px;
          row-gap: 30px;
        }
      `}</style>
    </div>
  );
}
