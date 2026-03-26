"use client";

import { useState } from "react";
import "./volunteer.scss";
import Upload from "@/public/upload.svg";
import ChevronDown from "@/public/chevronDown.svg";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const cities = ["Baku", "Ganja", "Sumgayit", "Sheki"];
  return (
    <div className="volunteerPage">
      <div className="container">
        <div className="breadcrumbs">
          <ul>
            <li>
              <a href="/">IDEA</a>
            </li>
            <li>BE THE CHANGE VOLUNTEER WITH IDEA!</li>
          </ul>
        </div>
        <div className="volunteerForm">
          <div className="top">
            <h1>Together we can make a difference.</h1>
            <p>Join Our Volunteers</p>
          </div>
          <form>
            <div className="information">
              <h3>1. Personal Information</h3>
              <div className="inputs">
                <label>Name and surname</label>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Enter your name and surname"
                  />
                </div>

                <label>Gender</label>
                <div className="inputGender">
                  <button type="button" className="female">
                    Female
                  </button>
                  <button type="button" className="male">
                    Male
                  </button>
                </div>

                <label>Phone number</label>
                <div className="input">
                  <input type="number" placeholder="Enter your phone number" />
                </div>

                <label>Date of Birth</label>
                <div className="input">
                  <input type="number" placeholder="Enter your Birth date" />
                </div>

                <label>Email</label>
                <div className="input">
                  <input type="text" placeholder="Enter your email" />
                </div>

                <div className="upload">
                  <label>
                    <Upload />
                    <p>Upload CV</p>
                    <span>Max size: 10MB (PDF, DOC, DOCX)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="informationLocation">
              <p>Location and Availability</p>
              <div className="inputs">
                <div className="input">
                  <label>City - Region</label>
                  <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
                    <span>{selected || "City Region"}</span>
                    <ChevronDown />

                    {isOpen && (
                      <ul className="option">
                        {cities.map((city) => (
                          <li
                            key={city}
                            onClick={() => {
                              setSelected(city);
                              setIsOpen(false);
                            }}
                          >
                            {city}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="input">
                  <label>Preferred volunteering location</label>
                  <div className="input"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
