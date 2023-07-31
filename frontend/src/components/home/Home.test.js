// Home.test.js

import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home Component", () => {
  test("should render hero section correctly", () => {
    const { getByText } = render(<Home />);
    const welcomeText = getByText(/Welcome to Effortless Threads/i);
    const introText = getByText(/Taking professional clothing from sexist to sexy since 2021./i);
    const shopLink = getByText(/Check Out Our Shop/i);

    expect(welcomeText).toBeInTheDocument();
    expect(introText).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
  });

  test("should render featured section correctly", () => {
    const { getByText } = render(<Home />);
    const sneakPeakText = getByText(/Take a sneak peak at our upcoming arrivals.../i);

    expect(sneakPeakText).toBeInTheDocument();
  });

  test("should render mission section correctly", () => {
    const { getByText } = render(<Home />);
    const missionHeader = getByText(/Our Mission/i);
    const missionText = getByText(
      /At Effortless Threads, our mission is to empower women by providing them with comfortable, stylish and functional clothing that enhances their productivity and confidence./i
    );

    expect(missionHeader).toBeInTheDocument();
    expect(missionText).toBeInTheDocument();
  });

  test("should render subsection link correctly", () => {
    const { getByText } = render(<Home />);
    const subsectionLink = getByText(/Our Mission/i);

    expect(subsectionLink.getAttribute("href")).toBe("/about");
  });
});
