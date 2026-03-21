import React from "react";
import { nationalParks } from "../constants/nationalParks";

const page = () => {
  return (
    <div className="nationalParks">
      <div className="container">
        <div className="breadCrumb">
          <ul>
            <li>
              <a href="">IDEA</a>
            </li>
            <li>
              <span>ABOUT US</span>
            </li>
          </ul>
        </div>
        <div className="nationalParksMain">
          <h1>The Natural Wealth of Azerbaijan</h1>
          <div className="nationalParksTop">
            <div className="nationalParksBannerLeft">
              <div className="pageBanner">
                <img
                  src="/nationalParksBanner.png"
                  alt="National Parks Banner"
                />
              </div>
            </div>
            <div className="nationalParksBannerRight">
              <div className="nationalParksTitle">
                <span>
                  Azerbaijan is home to one of the most diverse ecosystems in
                  the Caucasus region.
                </span>
              </div>
              <div className="nationalParksTitleDescription">
                <p>
                  From majestic mountain ranges and fertile valleys to lush
                  forests and the Caspian Sea, the country shelters thousands of
                  species of flora and fauna.
                </p>
                <p>
                  This rich biodiversity makes Azerbaijan a true natural
                  treasure and a vital habitat for many endangered species.
                </p>
              </div>
            </div>
          </div>
          <div className="nationalParksBottom">
            <div className="container">
              <div className="nationalParksFilter">
                <button type="button">List View</button>
                <button type="button">Map view</button>
              </div>
              <div className="resourceCards">
                <div className="container">
                  {nationalParks.map((item, index) => (
                    <div key={index} className="resourceCard">
                      <div className="cardBanner">
                        <img src={item.cardBanner} alt={item.cardFirstTitle} />
                      </div>
                      <div className="right">
                        <div className="firstText">
                          <span>{item.cardFirstTitle}</span>
                        </div>
                        <div className="cardTitle">
                          <h3>{item.cardTitle}</h3>
                          <p>{item.cardDescription}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
