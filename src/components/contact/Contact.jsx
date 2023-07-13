import React from "react";

const Contact = () => {
  return (
    <>
      <h2 class="contact-header">Contact Us!</h2>
      <section class="contact">
        <form action="mailto:amoyamen44@gmail.com" method="post">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name here..." required />
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="(000) 000-0000" required />
          <label>Email</label>
          <input type="email" name="email" placeholder="youremail@gmail.com" required />
          <label>Ask/Tell Us</label>
          <textarea
            name="concern"
            rows="6"
            cols="30"
            placeholder="Ask or tell us your concern here..."
            required
          ></textarea>
          <input class="fbutton" type="submit" value="Submit" />
        </form>
      </section>

      <section class="mission">
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
          <div class="pvw-title2">
            <span></span>
          </div>
        </p>
      </section>
      <h2 class="newsletter-header">Sign up for our Newsletter!</h2>
      <section class="newsletter">
        <form action="mailto:amoyamen44@gmail.com" method="post">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name here..." required />
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="(000) 000-0000" required />
          <label>Email</label>
          <input type="email" name="email" placeholder="youremail@gmail.com" required />
          <label>Birthday</label>
          <input type="date" name="bday" required />
          <input class="fbutton" id="newsletter-button" type="submit" value="Submit" />
        </form>
      </section>
    </>
  );
};

export default Contact;
