import React, { ReactElement } from "react";
import { useState } from "react";

interface Props {}

export default function SearchBlog({}: Props): ReactElement {
  const [searchValue, setSearchValue] = useState("");
  const [isExtended, setIsExtended] = useState(false);
  return (
    <div className="blog-search">
      <form
        className={`searchBlog ${
          isExtended ? "searchExtended" : "searchExtended"
        }`}
      >
        <a type="submit" className="searchIcon"></a>
        <input
          type="text"
          placeholder="Search ..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={() => {
            setIsExtended(true);
          }}
          onBlur={() => {
            !searchValue.trim() ? setIsExtended(false) : "";
          }}
        />
        <button className="btnSearch">go</button>
      </form>
      <style jsx>{`
        .blog-search {
          width: 100%;
          display: grid;
          place-items: center;
          padding: 20px 0;
        }
        .searchBlog {
          width: 50px;
          height: 50px;
          background: #b9dbfc15;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 25px;
          transform: scale(1.2);
          margin-bottom: 50px;
          box-shadow: 0 0 10px 10px #93badf15, inset 0 0 6px 2px #c9c9cc47;
          border: 4px solid white;
          transition: width 0.4s linear;
          padding: 0 10px;
        }
        .searchBlog input {
          font-size: 1rem;
          padding: 10px;
          border: none;
          width: 0px;
          background-color: transparent;
          color: #6b6b6b;
          transition: width 0.3s linear;
        }
        .searchIcon {
          height: 30px;
          min-width: 30px;
          background: url("/assets/icons/search.svg");
          background-size: cover;
          border: none;
          position: absolute;
          cursor: pointer;
          filter: hue-rotate(39deg);
        }
        .btnSearch {
          border: none;
          display: none;
          color: white;
          padding: 10px;
          font-size: 15px;
          font-weight: bold;
          background: linear-gradient(278deg, #6c7eff, #beefff);
          border-radius: 23% 77% 76% 24% / 50% 49% 51% 50%;
          transform: scale(0.9);
          box-shadow: 0 0 3px 1px #6363632e;
          cursor: pointer;
        }
        .btnSearch:hover {
          animation: shake-horizontal 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)
            both;
        }

        @keyframes shake-horizontal {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70% {
            transform: translateX(-5px);
          }
          20%,
          40%,
          60% {
            transform: translateX(5px);
          }
          80% {
            transform: translateX(4px);
          }
          90% {
            transform: translateX(-4px);
          }
        }

        .searchBlog:hover,
        .searchExtended.searchExtended {
          width: 400px;
          justify-content: space-evenly;
        }
        .searchBlog:hover input,
        .searchExtended.searchExtended input {
          width: 100%;
        }
        .searchBlog:hover .searchIcon,
        .searchExtended.searchExtended .searchIcon {
          cursor: default;
          position: static;
        }
        .searchBlog:hover .btnSearch,
        .searchExtended.searchExtended .btnSearch {
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
