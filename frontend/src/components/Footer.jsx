import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        {/* <!-- Social Media links --> */}
        <section className="footer-section" id="footer-s1">
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/">
                <img src="photos/iconfb.png" alt="Facebook Icon" className="socialbutton" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/">
                <img src="photos/iconinsta.png" alt="Instagram Icon" className="socialbutton" />
              </a>
            </li>

            <li>
              <a href="https://www.snapchat.com/">
                <img src="photos/iconsnap.png" alt="Snapchat Icon" className="socialbutton" />
              </a>
            </li>

            <li>
              <a href="https://www.twitter.com/">
                <img src="photos/icontwit.png" alt="Twitter Icon" className="socialbutton" />
              </a>
            </li>
          </ul>
        </section>
        {/* <!-- Other company info --> */}
        <section className="footer-section" id="footer-s2">
          <h5 className="section-title">COMPANY INFO</h5>
          <ul className="section-list">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Social Responsibility</a>
            </li>
            <li>
              <a href="#">Student Discount</a>
            </li>
          </ul>
        </section>
        <section className="footer-section" id="footer-s3">
          <h5 className="section-title">SUPPORT</h5>
          <ul className="section-list">
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Returns and Refunds</a>
            </li>
            <li>
              <a href="#">Size Guide</a>
            </li>
          </ul>
        </section>
        <section className="footer-section" id="footer-s4">
          &copy; 2023 Effortless Threads. All Rights Reserved.
        </section>
      </footer>
    </div>
  );
};

export default Footer;
