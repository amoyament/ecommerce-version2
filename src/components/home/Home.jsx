// //This will be your homepage!!
// //type rafce and it will build basic structre of your component
// import React from "react";
// import NewArrivalsSlider from "./NewArrivalsSlider";

// const Home = () => {
//   return (
//     <>
//       <div class="hero">
//         <h2>Welcome to Effortless Threads</h2>
//         <p>Taking professional clothing from sexist to sexy since 2021.</p>
//         <a href="../product/indexP.html" class="hero-btn">
//           Check Out Our Shop
//         </a>
//       </div>
//       <main>
//         {/* <!-- ------------------------------------FEATURED SECTION CODE---------------------------------------------------- --> */}

//         <section class="featured">
//           <h4>Browse Our Upcoming Arrivals...</h4>
//           <NewArrivalsSlider />
//           {/* <!-- Begin slideshow code --> */}
//         </section>
//         {/* <!-- ---------------------------------------SUBSECTIONS CODE---------------------------------------------------- -->
//         <!-- Subsection 1 --> */}
//         <a class="page-link" href="../product/indexP.html">
//           {/* <!-- Wrap entire section in a tag to make the entire section clickable link --> */}
//           <section class="subsection" id="section1">
//             <h4>Shop Our Latest Threads</h4>
//             {/* <!-- pvw-title to add more text on larger views --> */}
//             <p>
//               <div class="pvw-title1">
//                 <span></span>
//               </div>
//               Shop our latest threads today and discover the perfect balance of style and
//               functionality.
//             </p>
//           </section>
//         </a>
//         {/* <!-- Subsection 2 --> */}
//         <section class="subsection" id="section2">
//           <h4>Join Our Community</h4>
//           <p>
//             Join our community of like-minded women who believe in comfortable, stylish clothing
//             that empowers women to feel confident and productive. Sign up for our newsletter, follow
//             us on social media, or join our loyalty program to be the first to know about new
//             arrivals, exclusive discounts, and special events.
//           </p>
//           <a href="../contact/indexCo.html" class="btn">
//             Sign up for our newsletter!
//           </a>
//         </section>
//         {/* <!-- Subsection 1 --> */}
//         <a class="page-link" href="../about/indexA.html">
//           <section class="subsection" id="section3">
//             <h4>Our Mission</h4>
//             <p>
//               At Effortless Threads, our mission is to empower women by providing them with
//               comfortable, stylish and functional clothing that enhances their productivity and
//               confidence.{" "}
//               <div class="pvw-title2">
//                 <span></span>
//               </div>
//             </p>
//           </section>
//         </a>
//       </main>
//     </>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import NewArrivalsSlider from "./NewArrivalsSlider";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <>
      <div className="hero">
        <h2>Welcome to Effortless Threads</h2>
        <p>Taking professional clothing from sexist to sexy since 2021.</p>
        <Link to="/product" className="hero-btn">
          Check Out Our Shop
        </Link>
      </div>
      <main>
        <section className="featured">
          <h4>Take a sneak peak at our upcoming arrivals...</h4>
          <NewArrivalsSlider />
        </section>

        {/* <Link to="/product" className="page-link">
          <section className="subsection" id="section1">
            <h4>Shop Our Latest Threads</h4>
            <p>
              <div className="pvw-title1">
                <span></span>
              </div>
              Shop our latest threads today and discover the perfect balance of style and
              functionality.
            </p>
          </section>
        </Link>

        <section className="subsection" id="section2">
          <h4>Join Our Community</h4>
          <p>
            Join our community of like-minded women who believe in comfortable, stylish clothing
            that empowers women to feel confident and productive. Sign up for our newsletter, follow
            us on social media, or join our loyalty program to be the first to know about new
            arrivals, exclusive discounts, and special events.
          </p>
          <Link to="/contact" className="btn">
            Sign up for our newsletter!
          </Link>
        </section> */}

        <Link to="/about" className="page-link">
          <section className="subsection">
            <h4>Our Mission</h4>
            <p>
              At Effortless Threads, our mission is to empower women by providing them with
              comfortable, stylish and functional clothing that enhances their productivity and
              confidence.
              <span className="pvw-title"></span>
            </p>
          </section>
        </Link>
      </main>
    </>
  );
};

export default Home;
