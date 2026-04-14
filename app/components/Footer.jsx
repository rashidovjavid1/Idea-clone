"use client";

import Link from "next/link";
import { footerLinks } from "../constants/footerLinks";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerMain">
          <div className="footerTop">
            <div className="footerLogo">
              <img src="/footerLogo.svg" alt="" />
            </div>
            <div className="footerTopRight">
              <div className="top">
                <nav>
                  {footerLinks.map((item, index) => (
                    <ul>
                      <li key={index}>
                        <Link href={item.link}>{item.label}</Link>
                      </li>
                    </ul>
                  ))}
                </nav>
                <div className="languageChanger">
                  <button type="button">
                    <img src="/language.svg" alt="Language Changer" />
                    <span>AZ / EN</span>
                  </button>
                </div>
              </div>
              <div className="bottom">
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
                </div>
                <div className="social">
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
          </div>
          <div className="footerBottom">
            <div className="copyRight">
              <p>
                Copyright © 2026 <strong>IDEA</strong>. All rights reserved.
              </p>
            </div>
            <div className="privacyPolicy">
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms"> Terms of use</Link>
            </div>
            <div className="developedBy">
              <p>Site by</p>
              <Link href="https://onestudio.az/">
                <span>
                  <img src="/oneLogo.svg" alt="One Studio" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
