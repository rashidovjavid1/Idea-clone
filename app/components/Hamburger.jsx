"use client";
import React, { useState } from "react";
import HamburgerIcon from "@/public/hamburger.svg";
import { navLinks } from "../constants/navLinks";
import ChevronDown from "@/public/chevronDown.svg";
import { scoialLinks } from "../constants/socialLinks";
import LanguageIcon from "@/public/language.svg";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburgerWrapper">
      <div className="menuIcon" onClick={() => setIsOpen((prev) => !prev)}>
        <HamburgerIcon />
      </div>

      <div className={`hamburgerMenu ${isOpen ? "open" : ""}`}>
        <div className="buttons">
          <button type="button">
            <span>Become a volunteer</span>
          </button>
          <button type="button">
            <span>Support us</span>
          </button>
        </div>

        <div className="hamburgerNav">
          <ul>
            {navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
                {item.isDropDown && <ChevronDown />}
              </li>
            ))}
          </ul>
        </div>
        <div className="bottomSide">
          <div className="social">
            <ul>
              {scoialLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>
                    <img src={item.image} alt={item.link} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="language">
            <span>AZ</span>
            <LanguageIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
