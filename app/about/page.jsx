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
              <a href="">ABOUT US</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
