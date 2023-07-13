import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import About from "./about/About";
import Products from "./products/Products";

function NavBar() {
  return (
    <div>
      <Router>
        <div>
          <Link to="/">Effortless Threads</Link>
          <nav className="navbar">
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
                <Link to="/">Cart</Link>
              </li>
            </ul>
          </nav>
          {/* This is where pathing will occur */}
          <Routes>
            {/* route renders url paths */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default NavBar;
