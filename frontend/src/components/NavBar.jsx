import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import About from "./about/About";
import Products from "./products/Products";
import "./NavBar.css";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Router>
      <div className="header">
        <nav className="nav">
          <div className="nav-header">
            <h1>
              <Link to="/">Effortless Threads</Link>
              <FaBars className="icon" onClick={toggleLinks} />
            </h1>
          </div>
          <div className={`links ${showLinks ? "show" : ""}`} id="links">
            <ul>
              <li>
                <Link to="/products">Our Shop</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="https://arcadiaquill.com/19602/features/the-history-behind-womens-pockets/">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* This is where pathing will occur */}
      <Routes>
        {/* route renders url paths */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
