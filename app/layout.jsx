import React from "react";
import "./global.scss";
import Header from "./components/Header";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({ subsets: ["latin"] });
const layout = ({ children }) => {
  return (
    <html className={albertSans.className}>
      <body>
        <Header />
        {children}
        <footer></footer>
      </body>
    </html>
  );
};

export default layout;
