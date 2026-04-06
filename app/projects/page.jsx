"use client";
import React from "react";
import { projectsCategories } from "../constants/projectsCategories";

const page = () => {
  return (
    <div className="projectsInner">
      <div className="container">
        <div className="breadcrumbs">
          <ul>
            <a href="/">
              <li>IDEA</li>
              <li>PROJECTS</li>
            </a>
          </ul>
        </div>
        <div className="projectsMain">
          <div className="topTitle">
            <h1>EXPLORE OUR PROJECTS</h1>
          </div>
          <div className="categories">
            <div className="category">
              <span>All</span>
            </div>
            {projectsCategories.map((item, index) => (
              <div className="category">
                <img src={item.icon} alt={item.label} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
