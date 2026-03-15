import React from "react";
import OurPartnersSlider from "./OurPartnersSlider";

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
            <OurPartnersSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
