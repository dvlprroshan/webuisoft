import React, { ReactElement } from "react";
import BlogCatLabel from "../../global/BlogCatLabel";

interface Props {}

export default function FeatureBlog({}: Props): ReactElement {
  return (
    <div className="featureBlog">
      <div className="imgCon"></div>
      <div className="content">
        <div className="labels">
          <BlogCatLabel theme="green" size="medium" text="Technical" />
          <BlogCatLabel theme="red" size="medium" text="Technical" />
        </div>
        <div className="heading">
          How To Learn More Advanced Course With Simpler Approch.
        </div>
        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          dolores odio blanditiis vel harum, sapiente assumenda atque, nulla
          officia corrupti
        </div>
        <div className="creatorProfile">
          <div className="profileImg"></div>
          <div className="right">
            <div className="position">UI Designer </div>
            <div className="name">Roshan Kumar</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .featureBlog {
          width: 1000px;
          position: relative;
          margin: auto;
          left: 0;
          right: 0;
          height: 400px;
          display: flex;
        }
        .imgCon {
          height: 100%;
          border-radius: 30px;
          min-width: 600px;
          background-image: url("/assets/images/feature-main.jpg");
          background-size: cover;
        }
        .content {
          height: 100%;
          width: 100%;
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .labels {
          display: flex;
        }
        .labels .label {
          color: rgb(82, 82, 245);
          background-color: rgba(145, 145, 252, 0.123);
          padding: 10px 15px;
          font-weight: bold;
          border-radius: 10px;
          transform: scale(0.9);
        }
        .heading {
          font-size: 30px;
          font-weight: bold;
          color: #010a49;
          line-height: 40px;
          word-spacing: 5px;
        }
        .desc {
          color: #afafaf;
          margin-top: 10px;
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
      `}</style>
    </div>
  );
}
