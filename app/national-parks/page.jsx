"use client";

import { nationalParks } from "../constants/nationalParks";
import "./resources.scss";
import { useState } from "react";

const page = () => {
  const [view, setView] = useState("list");
  return (
    <div className="resources">
      <div className="container">
        <div className="breadcrumbs">
          <ul>
            <li>
              <a href="">IDEA</a>
            </li>
            <li>
              <span>ABOUT US</span>
            </li>
          </ul>
        </div>
        <div className="resourcesMain">
          <h1>The Natural Wealth of Azerbaijan</h1>
          <div className="resourcesTop">
            <div className="resourcesLeft">
              <div className="pageBanner">
                <img
                  src="/nationalParksBanner.png"
                  alt="National Parks Banner"
                />
              </div>
            </div>
            <div className="resourcesRight">
              <div className="resourcesRightContent">
                <span>
                  Azerbaijan is home to one of the most diverse ecosystems in
                  the Caucasus region.
                </span>
                <div className="resourcesDescription">
                  <p>
                    From majestic mountain ranges and fertile valleys to lush
                    forests and the Caspian Sea, the country shelters thousands
                    of species of flora and fauna.
                  </p>
                  <p>
                    This rich biodiversity makes Azerbaijan a true natural
                    treasure and a vital habitat for many endangered species.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resourcesBottom">
          <div className="container">
            <div className="resourcesFilter">
              <button
                className={view === "list" ? "active" : ""}
                onClick={() => setView("list")}
                type="button"
              >
                List View
              </button>
              <button
                className={view === "map" ? "active" : ""}
                onClick={() => setView("map")}
                type="button"
              >
                Map view
              </button>
            </div>
          </div>
          <div className="resourcesBottomMain">
            <div className="container">
              {view === "list" && (
                <div className="resourceCards">
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

                          <div className="cardDescription">
                            <p>{item.cardDescription}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
