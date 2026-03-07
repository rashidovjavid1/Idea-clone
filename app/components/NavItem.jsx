import Link from "next/link";
import React, { useState } from "react";

const NavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href={item.href}>{item.label}</a>
      <img src="/chevronDown.svg" alt="chevron" />
      {isOpen && (
        <ul>
          {item.subLinks.map((sub, index) => (
            <li key={index}>
              <Link href={sub.href}>{sub.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
