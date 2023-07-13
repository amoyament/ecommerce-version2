//This will be your homepage!!
//type rafce and it will build basic structre of your component
import React from "react";

const Home = () => {
  return (
    <div>
      <div class="hero">
        <h2>Welcome to Effortless Threads</h2>
        <p>Taking professional clothing from sexist to sexy since 2021.</p>
        <a href="../product/indexP.html" class="hero-btn">
          Check Out Our Shop
        </a>
      </div>
      <main>
        {/* <!-- ------------------------------------FEATURED SECTION CODE---------------------------------------------------- --> */}

        <section class="featured">
          <h4>Browse Our Featured Threads...</h4>
          {/* <!-- Begin slideshow code --> */}
        </section>
        {/* <!-- end of slideshow --> */}
        {/* 
    <!-- ---------------------------------------SUBSECTIONS CODE---------------------------------------------------- -->
        <!-- Subsection 1 --> */}
        <a class="page-link" href="../product/indexP.html">
          {/* <!-- Wrap entire section in a tag to make the entire section clickable link --> */}
          <section class="subsection" id="section1">
            <h4>Shop Our Latest Threads</h4>
            {/* <!-- pvw-title to add more text on larger views --> */}
            <p>
              <div class="pvw-title1">
                <span></span>
              </div>
              Shop our latest threads today and discover the perfect balance of style and
              functionality.
            </p>
          </section>
        </a>
        {/* <!-- Subsection 2 --> */}
        <section class="subsection" id="section2">
          <h4>Join Our Community</h4>
          <p>
            Join our community of like-minded women who believe in comfortable, stylish clothing
            that empowers women to feel confident and productive. Sign up for our newsletter, follow
            us on social media, or join our loyalty program to be the first to know about new
            arrivals, exclusive discounts, and special events.
          </p>
          <a href="../contact/indexCo.html" class="btn">
            Sign up for our newsletter!
          </a>
        </section>
        {/* <!-- Subsection 1 --> */}
        <a class="page-link" href="../about/indexA.html">
          <section class="subsection" id="section3">
            <h4>Our Mission</h4>
            <p>
              At Effortless Threads, our mission is to empower women by providing them with
              comfortable, stylish and functional clothing that enhances their productivity and
              confidence.{" "}
              <div class="pvw-title2">
                <span></span>
              </div>
            </p>
          </section>
        </a>
      </main>
    </div>
  );
};

export default Home;
