import React from "react";
import { Link } from "react-router-dom";
import NewArrivalsSlider from "./NewArrivalsSlider";
import "./Home.css";

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
