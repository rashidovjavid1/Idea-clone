"use client";

import { useState } from "react";
import "./volunteer.scss";
import Upload from "@/public/upload.svg";
import ChevronDown from "@/public/chevronDown.svg";
import CustomSelectBar from "../components/CustomSelectBar";
import CustomCheckbox from "../components/CustomCheckbox";
import ArrowRight from "@/public/arrowRight.svg";

const page = () => {
  const agreeOption = [
    { label: "Agree to continue", value: "Agree to continue" },
  ];
  const partnerOption = [
    { label: "Tree planting", value: "Tree planting" },
    { label: "Beach clean-up", value: "Beach clean-up" },
    { label: "Educational workshop", value: "Educational workshop" },
    { label: "Wildlife conservation", value: "Wildlife conservation" },
    { label: "Event organization", value: "Event organization" },
    {
      label: "Social media content creation",
      value: "Social media content creation",
    },
  ];
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
              <p>Personal Information</p>
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
                    <label className="label-upload">
                      <Upload />
                      <p className="uploadText">Upload CV</p>
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
                  <div className="weekdays">
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
              <p>Areas of interests</p>
              <div className="checkBoxes">
                <p>Areas of interests</p>
                <div className="checkBoxItem">
                  <CustomCheckbox options={partnerOption} />
                </div>
              </div>
            </div>
            <div className="agree">
              <label>
                <CustomCheckbox options={agreeOption} />
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
