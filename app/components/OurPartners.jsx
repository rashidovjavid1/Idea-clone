import React from "react";
import OurPartnersSlider from "./OurPartnersSlider";
import Link from "next/link";

const OurPartners = () => {
  return (
    <section className="ourPartnersSection">
      <div className="container">
        <div className="ourPartnersSectionMain">
          <div className="ourPartnersSectionTitle">
            <h2>
              <span>Visit </span>
              Our Partners
            </h2>
          </div>
          <div className="ourPartnersSectionAutoSlider">
            <div className="sliderContainer">
              <OurPartnersSlider />
            </div>
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

export default OurPartners;
