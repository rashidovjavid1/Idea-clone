"use client";
import React from "react";
import "./projects.scss";
import { projectsCategories } from "../constants/projectsCategories";
import Link from "next/link";

const page = () => {
  return (
    <div className="projectsInner">
      <div className="container">
        <div className="breadcrumbs">
          <ul>
            <li>
              <Link href="/"> IDEA </Link>
            </li>

            <li>PROJECTS</li>
          </ul>
        </div>
        <div className="projectsMain">
          <h1>Explore Our Projects</h1>
          <div className="categories">
            <div className="category">
              <span>All</span>
            </div>
            {projectsCategories.map((item, index) => (
              <button className="category">
                <div className="image">
                  <img src={item.icon} alt={item.label} />
                </div>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
