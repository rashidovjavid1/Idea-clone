import "./contact.scss";
import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import ArrowRight from "@/public/arrowRight.svg";

const page = () => {
  return (
    <div className="contactPage">
      <div className="container">
        <div className="breadcrumbs">
          <ul>
            <li>
              <a href="/">IDEA</a>
            </li>
            <li>CONTACT</li>
          </ul>
        </div>

        <div className="contactMain">
          <div className="contactTop">
            <h1>Contact</h1>
            <div className="description">
              <p>
                We’d love to hear from you! Whether it’s a question, feedback,
                or a new idea, our team is here to listen and support. Fill out
                the form or drop us a message — we’ll get back to you as soon as
                possible.
              </p>
            </div>
          </div>
          <div className="contactMiddle">
            <div className="contact">
              <div className="contactItem ">
                <p>Nature Emergency Line</p>
                <Link href="/call">
                  <img src="/telephone.svg" alt="Telephone" />
                  <span>1113</span>
                </Link>
              </div>
              <div className="contactItem">
                <p>Email us:</p>
                <Link href="/email">
                  <span>info@ideacampaign.org</span>{" "}
                </Link>
              </div>
              <div className="contactItem">
                <p>Address:</p>
                <div>
                  <span>AZ 1005,Baku,Azerbaijan pr,14</span>
                </div>
              </div>
              <div className="social">
                <p>Socialls:</p>
                <div className="socials">
                  <Link href="/instagram">
                    <img src="/instagram.svg" alt="Instagram" />
                  </Link>
                  <Link href="/facebook">
                    <img src="/facebook.svg" alt="Facebook" />
                  </Link>
                  <Link href="/youtube">
                    <img src="/youTube.svg" alt="Youtube" />
                  </Link>
                  <Link href="/whatsapp">
                    <img src="/whatsApp.svg" alt="Whatsapp" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="contactFormSection">
            <h3>Together, we can make a difference</h3>
            <div className="contactForm">
              <div className="inputs">
                <div className="inputContainer">
                  <label>Name and surname</label>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Enter your name and surname"
                    />
                  </div>
                </div>
                <div className="inputContainer">
                  <label>Phone number</label>
                  <div className="input">
                    <input type="text" placeholder="Enter phone number" />
                  </div>
                </div>
                <div className="inputContainer">
                  <label>Email address</label>
                  <div className="input">
                    <input type="text" placeholder="Enter email address" />
                  </div>
                </div>
                <div className="inputContainer">
                  <label>Message</label>
                  <div className="input textarea">
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Write to us"
                    ></textarea>
                  </div>
                </div>
                <button type="submitButton">
                  <span>SUBMIT</span>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="contactFormMap">
            <div className="top">
              <h3>Our Location</h3>
              <p>
                For collaborations and proposals, we’re open to your ideas and
                opportunities. Share your thoughts with us and let’s create
                something valuable together
              </p>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.669162650054!2d49.83117857640046!3d40.37185955836846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d06ea73be53%3A0xe82657c7bb51656a!2sIDEA%20Campaign!5e0!3m2!1str!2saz!4v1764750160986!5m2!1str!2saz"
                frameborder="0"
              ></iframe>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
