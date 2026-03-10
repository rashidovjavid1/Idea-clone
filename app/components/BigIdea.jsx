"use client";

import React from "react";

const BigIdea = () => {
  return (
    <section className="BigIdea">
      <div className="container">
        <div className="bigIdeaMain">
          <div className="bigIdeaLeft">
            <div className="bigIdeaLeftTop">
              <h1 className="heroText1">What is the</h1>
              <h1>Big IDEA?</h1>
              <p>
                Our mission is to create real and virtual communities of youth
                at the regional and international levels, to develop that
                community through open dialogues that provide information and
                make practical calls on environmental protection, and to ensure
                that each member of this community grows as a leader in order to
                carry out environmental education work on the ground.
              </p>
            </div>
            p
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
