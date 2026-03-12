import React from "react";
import Hero from "./components/Hero";
import BigIdea from "./components/BigIdea";
import OurProjects from "./components/OurProjects";
import Blogs from "./components/Blogs";
import NationalParks from "./components/NationalParks";

const page = () => {
  return (
    <div>
      <Hero />
      <BigIdea />
      <OurProjects />
      <Blogs />
      <NationalParks />
    </div>
  );
};

export default page;
