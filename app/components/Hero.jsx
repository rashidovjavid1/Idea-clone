import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="heroSection">
      <video autoPlay muted loop playsInline>
        <source
          src="https://admin.ideacampaign.org/storage/uploads/videos/home-info/video-c0369e9f-72fa-4010-89c6-cd4820b6f14f.mp4"
          type="video/mp4"
        />
      </video>
      <div className="container">
        <div className="heroMain">
          <h1>
            <strong>One</strong>
            <em>Earth</em>
            <strong>,</strong>
            <strong>One</strong>
            <em>Future</em>
          </h1>
          <div className="bannerDescription">
            <p>
              Nature is the very foundation of human happiness. Therefore, we
              all must protect and cherish it!
            </p>
          </div>
          <Link href="/about" className="moreButton">
            <span>Actions for a healthy planet</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
