// home.spec.js

describe("Home Page Tests", () => {
  beforeEach(() => {
    // Tests will not pass at default screen size because hamburger icon is displayed instead of links
    // Override default screen size to one where links show
    cy.viewport(1200, 800);
    cy.visit("localhost:3000");
  });

  it("should display the hero section with the correct text", () => {
    cy.get(".hero h2").should("contain", "Welcome to Effortless Threads");
    cy.get(".hero p").should(
      "contain",
      "Taking professional clothing from sexist to sexy since 2021."
    );
    cy.get(".hero-btn").should("contain", "Check Out Our Shop");
  });

  it('should navigate to the products page when clicking "Our Shop"', () => {
    cy.contains("Our Shop").click();
    cy.url().should("include", "/products");
  });

  it('should navigate to the about page when clicking "About Us"', () => {
    cy.contains("About Us").click();
    cy.url().should("include", "/about");
  });

  it('should navigate to the contact page when clicking "Contact Us"', () => {
    cy.contains("Contact Us").click();
    cy.url().should("include", "/contact");
  });
});
