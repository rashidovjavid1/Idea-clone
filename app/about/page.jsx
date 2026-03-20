"use client";
import Link from "next/link";
import "./about.scss";
import { ideaItems } from "../constants/ideaItems";
import MoreButton from "@/public/moreButton.svg";
import { coreCards } from "../constants/coreCards";
import OurPartners from "../components/OurPartners";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

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
            <div className="left">
              <span>About us</span>
              <div className="text">
                <h2>
                  What is the
                  <strong> Big IDEA?</strong>
                </h2>
                <p>
                  Our mission is to create real and virtual communities of youth
                  at the regional and international levels, to develop that
                  community through open dialogues that provide information and
                  make practical calls on environmental protection, and to
                  ensure that each member of this community grows as a leader in
                  order to carry out environmental education work on the ground.
                </p>
              </div>
              <div className="bigIdeaItems">
                <div className="bigIdeaItem">
                  {ideaItems.map((item, index) => (
                    <div key={index} className="bigIdeaItem">
                      <div className="ideaIcon">
                        <img src={item.image} alt={item.description} />
                      </div>
                      <div className="ideaDescription">
                        <span>{item.count}</span>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bottomTextMain">
                <div className="bottomText">
                  <h2>About the IDEA</h2>
                  <p>
                    By embracing innovation, collaboration, and environmental
                    responsibility, IDEA brings people together to create
                    lasting change. We believe that a healthier planet starts
                    with collective action, and every step we take today shapes
                    the world of tomorrow.
                  </p>
                  <p>
                    IDEA’s strength lies in unity — a community of passionate
                    volunteers, visionary partners, and environmental advocates
                    working side by side. Together, we’re shaping a cleaner,
                    greener, and more sustainable future for all.
                  </p>
                </div>
              </div>
              <div className="underText">
                <span>
                  IDEA is committed to protecting nature, raising awareness, and
                  building a sustainable future together.
                </span>
              </div>
            </div>
            <div className="right">
              <div className="rightImage">
                <img src="/leylaAliyeva.png" alt="Leyla Aliyeva" />
              </div>
              <div className="rightBottom">
                <div className="rightBottomTitle">
                  <p>THE FOUNDER</p>
                  <h2>Leyla Aliyeva</h2>
                </div>
                <div className="rightBottomText">
                  <p>
                    Around the world, young people are waking up to the
                    challenge of the environment. It is in our hands to create a
                    future where we live in harmony with the nature which
                    supports us and gives us life. We are INTERNATIONAL, because
                    the environment knows no borders. We are all in this
                    together, and we must work together to take the fantastic
                    opportunities and solve the tough challenges ahead. We are
                    passionate about DIALOGUE, because there is so much to
                    learn, and because the relationships that come from good
                    dialogue are the foundation stones of solidarity.
                  </p>
                  <Link href="https://leyla-aliyeva.az/">
                    Visit Website
                    <MoreButton />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutUsBanner">
            <img src="/aboutUsBanner.webp" alt="IDEA People" />
          </div>
          <div className="activities">
            <div className="pageTitle">
              <h2>
                <span>Core Areas of </span>
                activity
              </h2>
            </div>
            <div className="coreActivities">
              {coreCards.map((item, index) => (
                <div key={index} className="coreCard">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.label}</h3>
                  <div className="description">
                    <p>{item.description} </p>
                  </div>
                </div>
              ))}
              <div className="coreCardLast">
                <p>The more ’ll coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="missionAndVision">
        <div className="left">
          <h3>Our Missions:</h3>
          <div className="text">
            <p>
              To inspire and empower individuals and communities to protect the
              environment, promote sustainable practices, and create long-term
              solutions for ecological challenges.
            </p>
          </div>
        </div>
        <div className="right">
          <h3>Our Vision:</h3>
          <div className="text">
            <p>
              A future where people and nature thrive together — where
              environmental awareness, innovation, and responsibility lead us
              toward a healthier planet.
            </p>
          </div>
        </div>
      </div>
      <OurPartners />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default page;
