import React, { ReactElement } from "react";
import Heading from "../../global/Heading";

interface Props {}

export default function BlogHeading({}: Props): ReactElement {
  return (
    <div className="blog-heading">
      <Heading
        firstHeading="our blogs"
        secondHeading="Our Latest Research, Blogs and Updates"
      />
      <style jsx>{`
        .blog-heading {
          width: 100%;
          background-color: #71abe011;
          padding: 20px 0;
          position: relative;
        }
      `}</style>
    </div>
  );
}
