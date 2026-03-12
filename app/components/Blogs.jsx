import React from "react";
import { blogLinks } from "../constants/blogLinks";
import Link from "next/link";

const Blogs = () => {
  return (
    <section className="blogsSection">
      <div className="container">
        <div className="blogsMain">
          <div className="blogsTitle">
            <h2>
              <span>Explore </span>
              Our Insights
            </h2>
          </div>
          <div className="blogCards">
            {blogLinks.map((item, index) => (
              <div key={index} className="blogCard">
                <div className="cardImage">
                  <img src={item.image} alt={item.label} />
                  <div className="blogCardTop">
                    <span className="blogCardDate">
                      <img src="/calendar.svg" alt="Date Icon" />
                      {item.date}
                    </span>
                  </div>
                  <div className="hoverItem">
                    <div className="hoverDiv">
                      <p>{item.description}</p>
                      <Link href={item.link} className="discoverMoreButton">
                        <span>Discover more </span>
                        <img src="/moreButtonWhite.svg" alt="Discover More" />
                      </Link>
                    </div>
                  </div>
                </div>
                <h3>{item.label}</h3>
              </div>
            ))}
          </div>
          <Link href="/about" className="seeMoreButton">
            <span>See more</span>
            <img src="/moreButton.svg" alt="See More" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
