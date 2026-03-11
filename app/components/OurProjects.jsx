"use client";
import React from "react";
import { cardItems } from "../constants/cardItems";
import Link from "next/link";

const OurProjects = () => {
  return (
    <section className="ourProjects">
      <div className="container">
        <div className="ourProjectsMain">
          <div className="ourProjectsTitle">
            <h2>
              <span>Our</span> Expertise
            </h2>
            <p>
              At IDEA, we work actively to find the solution to many
              environmental challenges guided by the principle of One Earth, One
              Future.
            </p>
          </div>
          <div className="ourProjectsCards">
            {cardItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <div className="ourProjectCardInner">
                  <div className="cardFront">
                    <div className="icon">
                      <img src={item.image} alt={item.label} />
                      <h3>{item.label}</h3>
                      <span>explore more</span>
                    </div>
                  </div>
                  <div className="cardBack">
                    <div className="icon">
                      <img src={item.backImage} alt={item.label} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
