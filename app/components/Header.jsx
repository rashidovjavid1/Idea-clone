"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "../constants/navLinks";
import { darkPages } from "../constants/darkPages";
import NavItem from "./NavItem";
import Link from "next/link";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const pathName = usePathname();
  return (
    <header className={darkPages.includes(pathName) ? "header--dark" : ""}>
      <div className="container">
        <div className="headerMain">
          <div className="headerLogo">
            <Link href="/">
              <HeaderLogo isDark={darkPages.includes(pathName)} />
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
                <img src="/search.svg" alt="search" />
              </Link>
              <div className="languageChanger">
                <button type="button" className="languageChanger">
                  <img src="/language.svg" alt="language" />
                  AZ
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
