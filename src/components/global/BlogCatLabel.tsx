import React, { ReactElement } from "react";

interface Props {
  theme: "blue" | "green" | "red" | "orange" | "purple" | "skyblue";
  size: "small" | "medium" | "large";
  text: string;
}

export default function BlogCatLabel({
  theme,
  size,
  text,
}: Props): ReactElement {
  return (
    <a className={`label-${theme}-${size}`} href="#">
      {text}
      <style jsx>{`
        a[class*="label-"] {
          font-weight: bold;
          cursor: pointer;
          margin: 5px;
          display: inline-block;
        }
        a[class*="-large"] {
          padding: 10px 15px;
          border-radius: 5px;
          font-size: 1.2rem;
        }
        a[class*="-medium"] {
          padding: 8px 12px;
          border-radius: 4px;
        }
        a[class*="-small"] {
          padding: 5px 8px;
          border-radius: 3px;
          font-size: 0.8rem;
        }
        a[class*="-green"] {
          color: rgb(20 154 26);
          background-color: rgb(229 254 229);
        }
        a[class*="-blue"] {
          color: rgb(82 16 243);
          background-color: rgb(230 229 253);
        }
        a[class*="-red"] {
          color: rgb(249 68 68);
          background-color: rgb(247 237 237);
        }
        a[class*="-orange"] {
          color: #ff7e30;
          background-color: #fde8db;
        }
        a[class*="-purple"] {
          color: #b529fd;
          background-color: #eddaf7;
        }
        a[class*="-skyblue"] {
          color: #2985fd;
          background-color: #dcedfa;
        }
      `}</style>
    </a>
  );
}
