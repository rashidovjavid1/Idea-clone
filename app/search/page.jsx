import React from "react";
import CloseIcon from "@/public/closeIcon.svg";
import BigSearch from "@/public/bigSearchIcon.svg";
import "./search.scss";

const page = () => {
  return (
    <div className="searchPage">
      <div className="searchMain">
        <button type="button">
          <a href="/">
            <CloseIcon />
          </a>
        </button>
        <div className="searchInputMain">
          <div className="searchInput">
            <BigSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className="container">
            <div className="searchResults"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
