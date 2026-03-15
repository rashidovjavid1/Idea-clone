import React from "react";
import Hero from "./components/Hero";
import BigIdea from "./components/BigIdea";
import OurProjects from "./components/OurProjects";
import Blogs from "./components/Blogs";
import NationalParks from "./components/NationalParks";
import OurPartners from "./components/OurPartners";
import JoinUs from "./components/JoinUs";

const page = () => {
  return (
    <div>
      <Hero />
      <BigIdea />
      <OurProjects />
      <Blogs />
      {/* National Parks Section */}
      <OurPartners />
      <JoinUs />
    </div>
  );
};

export default page;
