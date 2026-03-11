"use client";

import React from "react";
import { ideaItems } from "../constants/ideaItems";
import Link from "next/link";

const BigIdea = () => {
  return (
    <section className="bigIdea">
      <div className="container">
        <div className="bigIdeaMain">
          <div className="bigIdeaLeft">
            <div className="bigIdeaLeftTop">
              <div className="contentFirst">
                <h2>
                  What is the <strong>Big IDEA?</strong>
                </h2>

                <p>
                  Our mission is to create real and virtual communities of youth
                  at the regional and international levels, to develop that
                  community through open dialogues that provide information and
                  make practical calls on environmental protection, and to
                  ensure that each member of this community grows as a leader in
                  order to carry out environmental education work on the ground.
                </p>
              </div>
            </div>
            <div className="bigIdeaItems">
              {ideaItems.map((item, index) => (
                <div key={index} className="bigIdeaItem">
                  <div className="ideaIcon">
                    <img src={item.image} alt={item.description} />
                  </div>
                  <div className="ideaDescription">
                    <span>{item.count}</span>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="discoverButton">
              <span>Discover more</span>
              <img src="/moreButton.svg" alt="Discover More" />
            </Link>
          </div>
          <div className="bigIdeaRight">
            <div className="bigIdeaGif">
              <video src="/earth.mp4" autoPlay loop playsInline muted></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigIdea;
