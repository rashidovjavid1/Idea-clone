import React from "react";
import "./global.scss";

const layout = ({ children }) => {
  return (
    <html>
      <body>
        {children}
        <footer></footer>
      </body>
    </html>
  );
};

export default layout;
