"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "../constants/navLinks";
import { darkPages } from "../constants/darkPages";
import NavItem from "./NavItem";
import Link from "next/link";
import HeaderLogo from "@/public/headerLogo.svg";
import LanguageIcon from "@/public/language.svg";
import SearchIcon from "@/public/search.svg";
import { hiderPages } from "../constants/hiderPages";
import Hamburger from "./Hamburger";

const Header = ({ onOpen }) => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => setOpenNav((prev) => !prev);
  const pathName = usePathname();
  const isDark = darkPages.includes(pathName);
  const isHidden = hiderPages.includes(pathName);

  if (isHidden) return null;
  return (
    <header className={`${isDark ? "header--dark" : ""}`}>
      <div className="container">
        <div className="headerMain">
          <div className="headerLogo">
            <Link href="/">
              <HeaderLogo />
            </Link>
          </div>
          <nav>
            <ul>
              {navLinks.map((item, index) => {
                return item.isDropDown ? (
                  <NavItem item={item} key={index} />
                ) : (
                  <li key={index}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="headerRight">
            <div className="leftItems">
              <Link className="supportButton" href="/volunteer">
                Become a volunteer
              </Link>
              <Link className="supportButton" href="/support">
                Support us
              </Link>
            </div>
            <div className="rightItems">
              <Link href="/search">
                <SearchIcon className="searchIcon" />
              </Link>
              <Hamburger isOpen={openNav} onOpen={toggleNav} />
              <div className="languageChanger">
                <button type="button" className="languageChanger">
                  <LanguageIcon />
                  <span>AZ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
