import "./reports.scss";
import { reportsCards } from "../constants/reportCard";
import MoreButton from "@/public/moreButton.svg";
import Link from "next/link";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="reportsPage">
      <div className="container">
        <div className="breadcrumbs">
          <ul>
            <li>
              <a href="">IDEA</a>
            </li>
            <li>
              <span>REPORTS</span>
            </li>
          </ul>
        </div>
        <div className="reportsMain">
          <div className="pageTitle">
            <span>FACTS</span>
            <h1>REPORTS</h1>
          </div>
          <div className="reportsCards">
            {reportsCards.map((item, index) => (
              <div key={index} className="reportsCardItem">
                <div className="reportsImage">
                  <img src={item.image} alt={item.label} />
                </div>
                <div className="title">
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </div>
                <Link href={item.link}>
                  <span>View report </span>
                  <MoreButton />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
