"use client";
import Link from "next/link";
import React from "react";

const JoinUs = () => {
  return (
    <section className="joinUsSection">
      <div className="container">
        <div className="joinUsSectionMain">
          <div className="joinUsVolunteerCard">
            <div className="text">
              <h3>Volunteer With Us 🤝</h3>
              <p>
                Join our volunteer network to help protect the planet and
                support sustainability.
              </p>
              <Link className="joinUsButton" href="/volunteer">
                <span>Become a Volunteer</span>
              </Link>
            </div>

            <div className="imageContainer">
              <div className="image">
                <img src="/volunteer.png" alt="Volunteer" />
              </div>
            </div>
          </div>
          <div className="joinPartnerCard">
            <div className="text">
              <h3>Support Our Mission 🌱</h3>
              <p>
                Partner with IDEA to support sustainable initiatives and help
                create a greener future together.
              </p>
              <Link className="joinUsButton" href="/volunteer">
                <span>Become a Partner</span>
              </Link>
            </div>

            <div className="imageContainer">
              <div className="image">
                <img src="/personel.png" alt="Volunteer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
