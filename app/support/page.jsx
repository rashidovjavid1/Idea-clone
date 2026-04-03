"use client";
import "./support.scss";
import CustomCheckbox from "../components/CustomCheckbox";

const page = () => {
  const agreeOption = [
    { label: "Agree to continue", value: "Agree to continue" },
  ];
  const partnerOptions = [
    { label: "Tree planting", value: "Tree planting" },
    { label: "Beach clean-up", value: "Beach clean-up" },
    { label: "Educational workshop", value: "Educational workshop" },
    { label: "Wildlife conservation", value: "Wildlife conservation" },
    { label: "Event organization", value: "Event organization" },
    {
      label: "Social media content creation",
      value: "Social media content creation",
    },
  ];

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
                      <div className="checkBoxes">
                        <CustomCheckbox options={partnerOptions} />
                      </div>
                    </div>
                  </div>
                  <div className="agree">
                    <CustomCheckbox options={agreeOption} />
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
