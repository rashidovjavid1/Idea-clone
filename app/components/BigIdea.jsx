"use client";

import React from "react";

const BigIdea = () => {
  return (
    <section className="BigIdea">
      <div className="container">
        <div className="bigIdeaMain">
          <video
            src="/assets/earth.mp4"
            autoPlay
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BigIdea;
