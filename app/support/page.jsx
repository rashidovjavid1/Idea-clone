import "./support.scss";
import CustomCheckbox from "../components/CustomCheckbox";
import React from "react";

const page = () => {
  return (
    <div className="supportInner">
      <div className="container">
        <div className="breadcrumbs">
          <ul>
            <li>
              <a href="/">IDEA</a>
            </li>
            <li>BECOME A PARTNER</li>
          </ul>
        </div>
        <div className="supportPage">
          <div className="container">
            <div className="pageMain">
              <div className="top">
                <h1>Become a Partner</h1>
                <div className="text">
                  <p>
                    Join us as a partner and be part of our growing network.
                    Together, we can create new opportunities and achieve
                    greater success.
                  </p>
                </div>
              </div>
              <div className="form">
                <form>
                  <div className="personalInformation">
                    <p>Information</p>
                    <div className="inputs">
                      <div className="inputContainer">
                        <label>Company name</label>
                        <div className="input">
                          <input type="text" placeholder="Enter company name" />
                        </div>
                      </div>
                      <div className="inputCotainer">
                        <label>Phone number</label>
                        <div className="input">
                          <input
                            type="number"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                      <div className="inputContainer">
                        <label>Tax ID (VOEN)</label>
                        <div className="input">
                          <input type="text" placeholder="Enter Tax ID" />
                        </div>
                      </div>
                      <div className="inputContainer">
                        <label>Email address</label>
                        <div className="input">
                          <input
                            type="text"
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>
                      <div className="inputContainer">
                        <label>Message</label>
                        <div className="input">
                          <textarea
                            type="text"
                            name="message"
                            placeholder="Write to us"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="personalLocation">
                    <p>Areas of interest</p>
                    <div className="checkboxes">
                      <p>Areas of interest</p>
                      <div className="checkBoxes"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
