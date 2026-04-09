"use client";
import React from "react";
import "./projects.scss";
import { projectsCategories } from "../constants/projectsCategories";
import Link from "next/link";
import { projectCard } from "../constants/projectCard";
import Calendar from "@/public/calendar.svg";
import Footer from "../components/Footer";

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
          <div className="projectCards">
            {projectCard.map((item, index) => (
              <div className="projectCard">
                <div className="projectImage">
                  <img src={item.image} alt={item.label} />
                </div>
                <div className="projectCardContent">
                  <div className="title">
                    <h3>{item.label}</h3>
                  </div>
                  <div className="date">
                    <span>
                      <Calendar />
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
