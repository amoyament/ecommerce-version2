import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        {/* <!-- Social Media links --> */}
        <section class="footer-section" id="footer-s1">
          <ul class="social-icons">
            <li>
              <a href="https://www.facebook.com/">
                <img src="photos/iconfb.png" alt="Facebook Icon" class="socialbutton" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/">
                <img src="photos/iconinsta.png" alt="Instagram Icon" class="socialbutton" />
              </a>
            </li>

            <li>
              <a href="https://www.snapchat.com/">
                <img src="photos/iconsnap.png" alt="Snapchat Icon" class="socialbutton" />
              </a>
            </li>

            <li>
              <a href="https://www.twitter.com/">
                <img src="photos/icontwit.png" alt="Twitter Icon" class="socialbutton" />
              </a>
            </li>
          </ul>
        </section>
        {/* <!-- Other company info --> */}
        <section class="footer-section" id="footer-s2">
          <h5>COMPANY INFO</h5>
          <ul>
            <li>
              <a href="../contact/indexCo.html">About Us</a>
            </li>
            <li>
              <a href="../contact/indexCo.html">Social Responsibility</a>
            </li>
            <li>
              <a href="../contact/indexCo.html">Student Discount</a>
            </li>
          </ul>
        </section>
        <section class="footer-section" id="footer-s3">
          <h5>SUPPORT</h5>
          <ul>
            <li>
              <a href="../contact/indexCo.html">Shipping</a>
            </li>
            <li>
              <a href="../contact/indexCo.html">Returns and Refunds</a>
            </li>
            <li>
              <a href="../contact/indexCo.html">Size Guide</a>
            </li>
          </ul>
        </section>
        <section class="footer-section" id="footer-s4">
          &copy; 2023 Effortless Threads. All Rights Reserved.
        </section>
      </footer>
    </div>
  );
};

export default Footer;
