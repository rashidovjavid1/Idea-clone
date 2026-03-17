import Link from "next/link";
import React, { useState } from "react";
import ChevronDown from "@/public/chevronDown.svg";
import { usePathname } from "next/navigation";
import { darkPages } from "../constants/darkPages";

const NavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const isDark = darkPages.includes(pathName);
  return (
    <li
      className={`${isOpen ? "open" : ""} ${isDark ? "dark--page" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href={item.href}>{item.label}</a>
      <ChevronDown />
      <div className="block"></div>
      <ul className={isOpen ? "open" : ""}>
        {item.subLinks.map((sub, index) => (
          <li key={index}>
            <Link href={sub.href}>{sub.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavItem;
