import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "",
  });

  const [newsletterFormData, setNewsletterFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bday: "",
  });

  // Handle change for the contact form inputs
  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle change for the newsletter form inputs
  const handleNewsletterChange = (event) => {
    const { name, value } = event.target;
    setNewsletterFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle submit for the contact form
  const handleContactSubmit = (event) => {
    event.preventDefault(); // Prevent form submission if validation fails

    // Validation logic
    if (!isValidName(contactFormData.name)) {
      alert("Please enter a valid name.");
      return;
    }
    if (!isValidPhone(contactFormData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
    if (!isValidEmail(contactFormData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Construct the email link with pre-filled data
    const emailSubject = "Contact Form Submission";
    const emailBody = `Name: ${contactFormData.name}\nPhone: ${contactFormData.phone}\nEmail: ${contactFormData.email}\nConcern: ${contactFormData.concern}`;
    const emailLink = `mailto:amoyamen44@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open the user's default email client
    window.location.href = emailLink;

    // Reset the form fields
    setContactFormData({
      name: "",
      phone: "",
      email: "",
      concern: "",
    });
  };

  // Handle submit for the newsletter form
  const handleNewsletterSubmit = (event) => {
    event.preventDefault(); // Prevent form submission if validation fails

    // Perform custom validation logic
    if (!isValidName(newsletterFormData.name)) {
      alert("Please enter a valid name.");
      return;
    }
    if (!isValidPhone(newsletterFormData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
    if (!isValidEmail(newsletterFormData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!isValidBirthday(newsletterFormData.bday)) {
      alert("Please enter a valid birthday.");
      return;
    }

    // Submit the form if validation passes
    // You can add your own logic here to handle the form submission
    console.log("Newsletter Form submitted:", newsletterFormData);

    // Reset the form fields
    setNewsletterFormData({
      name: "",
      phone: "",
      email: "",
      bday: "",
    });

    // Show the alert message
    alert("You have been added to the newsletter!");
  };

  // Validation function for name field
  const isValidName = (name) => {
    return name.trim() !== ""; // Name should not be empty
  };

  // Validation function for phone field
  const isValidPhone = (phone) => {
    const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    return phonePattern.test(phone); // Phone number should match the pattern (000) 000-0000
  };

  // Validation function for email field
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email); // Email should match the pattern example@example.com
  };

  // Validation function for birthday field
  const isValidBirthday = (birthday) => {
    return birthday.trim() !== ""; // Birthday should not be empty
  };

  return (
    <>
      <h2 className="contact-header">Contact Us!</h2>
      <section className="contact">
        <form onSubmit={handleContactSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Your name here..."
            value={contactFormData.name}
            onChange={handleContactChange}
            required
          />
          <br />
          <label>Phone</label>
          <br />
          <input
            type="tel"
            name="phone"
            placeholder="(000) 000-0000"
            value={contactFormData.phone}
            onChange={handleContactChange}
            required
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
            value={contactFormData.email}
            onChange={handleContactChange}
            required
          />
          <br />
          <label>Ask/Tell Us</label>
          <br />
          <textarea
            name="concern"
            rows="6"
            cols="30"
            placeholder="Ask or tell us your concern here..."
            value={contactFormData.concern}
            onChange={handleContactChange}
            required
          ></textarea>
          <br />
          <input className="fbutton" type="submit" value="Submit" />
        </form>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Effortless Threads, our mission is to empower women by providing them with comfortable,
          stylish and functional clothing that enhances their productivity and confidence. We
          believe that professional attire shouldn't have to compromise comfort, practicality, or
          style. That's why we design every article of clothing with pockets, to eliminate the
          frustration of having to carry a purse or sacrifice functionality. Our goal is to take
          professional clothing from sexist to sexy, by promoting inclusivity and empowering women
          to feel confident and productive in any setting. To keep up with the latest news of our
          company and earn rewards, subscribe to our Newsletter below.
          <div className="pvw-title2">
            <span></span>
          </div>
        </p>
      </section>
      <h2 className="newsletter-header">Sign up for our Newsletter!</h2>
      <section className="newsletter">
        <form onSubmit={handleNewsletterSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Your name here..."
            value={newsletterFormData.name}
            onChange={handleNewsletterChange}
            required
          />
          <br />
          <label>Phone</label>
          <br />
          <input
            type="tel"
            name="phone"
            placeholder="(000) 000-0000"
            value={newsletterFormData.phone}
            onChange={handleNewsletterChange}
            required
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
            value={newsletterFormData.email}
            onChange={handleNewsletterChange}
            required
          />
          <br />
          <label>Birthday</label>
          <br />
          <input
            type="date"
            name="bday"
            value={newsletterFormData.bday}
            onChange={handleNewsletterChange}
            required
          />
          <br />
          <input className="fbutton" id="newsletter-button" type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
};

export default Contact;
