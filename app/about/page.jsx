import Link from "next/link";
import "./about.scss";

const page = () => {
  return (
    <div className="aboutPage">
      <div className="container">
        <div className="breadCrumb">
          <ul>
            <li>
              <a href="">IDEA</a>
            </li>
            <li>
              <span>ABOUT US</span>
            </li>
          </ul>
        </div>
        <div className="aboutPageMain">
          <div className="aboutDetails">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
