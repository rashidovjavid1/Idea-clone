"use client";

import { useState } from "react";
import "./volunteer.scss";
import Upload from "@/public/upload.svg";
import ChevronDown from "@/public/chevronDown.svg";
import CustomSelectBar from "../components/CustomSelectBar";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomSingleCheckbox from "../components/CustomSingleCheckbox";
import ArrowRight from "@/public/arrowRight.svg";

const page = () => {
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
                <div className="inputContainer">
                  <label>Name and surname</label>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Enter your name and surname"
                    />
                  </div>
                </div>

                <div className="inputContainer">
                  <label>Gender</label>
                  <div className="inputGender">
                    <button type="button" className="female">
                      Female
                    </button>
                    <button type="button" className="male">
                      Male
                    </button>
                  </div>
                </div>

                <div className="inputContainer">
                  <label>Phone number</label>
                  <div className="input">
                    <input
                      type="number"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="inputContainer">
                  <label>Date of Birth</label>
                  <div className="input">
                    <input type="text" placeholder="Enter your Birth date" />
                  </div>
                </div>

                <div className="inputContainer">
                  <label>Email</label>
                  <div className="input">
                    <input type="text" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="upload">
                    <label>
                      <Upload />
                      <p>Upload CV</p>
                      <span>Max size: 10MB (PDF, DOC, DOCX)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="informationLocation">
              <p>Location and Availability</p>
              <div className="inputs">
                <div className="inputContainer">
                  <label>City - Region</label>
                  <div className="input">
                    <CustomSelectBar />
                  </div>
                </div>
                <div className="inputContainer">
                  <label>Preferred volunteering location</label>
                  <div className="input">
                    <CustomSelectBar />
                  </div>
                </div>
                <div className="inputContainer">
                  <label>Availability</label>
                  <div className="input">
                    <button type="button">
                      <span>Weekdays</span>
                    </button>
                    <button type="button">
                      <span>Weekends</span>
                    </button>
                    <button type="button">
                      <span>Full-time</span>
                    </button>
                    <button type="button">
                      <span>Part-time</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="informationInterests">
              <div className="inputContainer">
                <label>Areas of interests</label>
                <div className="input">
                  <CustomCheckbox />
                </div>
              </div>
            </div>
            <div className="agree">
              <label>
                <CustomSingleCheckbox />
                <button>
                  <span>SUBMIT APPLICATION</span>
                  <ArrowRight />
                </button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
