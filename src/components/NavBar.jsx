// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./home/Home";
// import Contact from "./contact/Contact";
// import About from "./about/About";
// import Products from "./products/Products";

// function NavBar() {
//   return (
//     <div>
//       <Router>
//         <div>
//           <Link to="/">Effortless Threads</Link>
//           <nav className="navbar">
//             <ul>
//               <li>
//                 <Link to="/products">Our Shop</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//               <li>
//                 <Link to="/">Cart</Link>
//               </li>
//             </ul>
//           </nav>
//           {/* This is where pathing will occur */}
//           <Routes>
//             {/* route renders url paths */}
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/products" element={<Products />} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default NavBar;

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./home/Home";
// import Contact from "./contact/Contact";
// import About from "./about/About";
// import Products from "./products/Products";
// import styles from "./NavBar.module.css";

// function NavBar() {
//   return (
//     <div>
//       <Router>
//         <div>
//           <Link to="/" className={styles.navTitle}>
//             Effortless Threads
//           </Link>
//           <nav className={styles.navBar}>
//             <ul>
//               <li>
//                 <Link to="/products" className={styles.navLink}>
//                   Our Shop
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className={styles.navLink}>
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className={styles.navLink}>
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/" className={styles.navLink}>
//                   Cart
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//           {/* This is where pathing will occur */}
//           <Routes>
//             {/* route renders url paths */}
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/products" element={<Products />} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default NavBar;

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./home/Home";
// import Contact from "./contact/Contact";
// import About from "./about/About";
// import Products from "./products/Products";
// import styles from "./NavBar.module.css";

// function NavBar() {
//   return (
//     <Router>
//       <div className={styles.navBar}>
//         <Link to="/" className={styles.navTitle}>
//           Effortless Threads
//         </Link>
//         <nav>
//           <ul className={styles.navLinks}>
//             <li>
//               <Link to="/products" className={styles.navLink}>
//                 Our Shop
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className={styles.navLink}>
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className={styles.navLink}>
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/" className={styles.navLink}>
//                 Cart
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* This is where pathing will occur */}
//       <Routes>
//         {/* route renders url paths */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </Router>
//   );
// }

// export default NavBar;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import About from "./about/About";
import Products from "./products/Products";
import styles from "./NavBar.module.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className={styles.navBar}>
        <Link to="/" className={styles.navTitle}>
          Effortless Threads
        </Link>
        <FaBars className={styles.icon} onClick={toggleMenu} />
        <nav className={isMenuOpen ? styles.show : ""}>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/products" className={styles.navLink}>
                Our Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.navLink}>
                Cart
              </Link>
            </li>
          </ul>
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
