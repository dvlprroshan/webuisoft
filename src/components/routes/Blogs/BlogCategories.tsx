import React, { ReactElement } from "react";
import BlogCatLabel from "../../global/BlogCatLabel";

interface Props {}

export default function BlogCategories({}: Props): ReactElement {
  return (
    <div className="blogCategory">
      <hr className="divider" />
      <div className="heading">Find More Blog With Categories:</div>
      <div className="blogCatGroup">
        <BlogCatLabel theme="orange" size="large" text="UI Design" />
        <BlogCatLabel theme="green" size="large" text="Technical" />
        <BlogCatLabel theme="blue" size="large" text="Technical" />
        <BlogCatLabel theme="red" size="large" text="Technical" />
        <BlogCatLabel theme="orange" size="large" text="Technical" />
        <BlogCatLabel theme="purple" size="large" text="Technical" />
        <BlogCatLabel theme="skyblue" size="large" text="Technical" />
        <BlogCatLabel theme="blue" size="large" text="Technical" />
      </div>
      <style jsx>{`
        .blogCategory {
          min-height: 300px;
          margin-top: 30px;
          margin: 2px;
        }
        .divider {
          width: 80%;
          position: relative;
          margin: auto;
          height: 2px;
          background: rgba(171, 156, 255, 0.39);
          border: none;
          left: 0;
          right: 0;
        }
        .heading {
          text-align: center;
          font-weight: bold;
          font-size: 1.4rem;
          color: #39428a;
          margin-top: 20px;
          margin-bottom: 30px;
        }

        .blogCatGroup {
          max-width: 400px;
          position: relative;
          margin: auto;
          left: 0;
          right: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
      `}</style>
    </div>
  );
}
