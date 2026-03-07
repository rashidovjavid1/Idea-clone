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
    </section>
  );
};

export default Hero;
