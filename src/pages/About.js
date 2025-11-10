import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about" style={{ backgroundImage: `url(${MultiplePizzas})` }}>
      <div className="aboutTop"></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Welcome to Pedro’s Pizzeria — where passion for pizza meets perfection!
          Founded with the dream of bringing authentic, handcrafted pizzas to our
          community, Pedro’s has grown into more than just a restaurant — it’s a
          place where family, friends, and pizza lovers come together to share
          good food and great memories.
        </p>
        <p>
          Our story began with a single oven and a simple goal: to create the
          best pizza possible using fresh, high-quality ingredients. Every pizza
          that comes out of our kitchen is made from scratch — from the
          hand-stretched dough to our rich tomato sauce simmered with herbs, and
          our signature cheese blend that melts perfectly on every slice.
          Whether you crave a classic Margherita, a bold BBQ Chicken, or our
          fan-favorite Pepperoni Deluxe, we guarantee each bite delivers the
          same warmth and flavor that defines Pedro’s.
        </p>
        <p>
          At Pedro’s, we believe pizza should be more than a meal — it should be
          an experience. That’s why our restaurant is designed to make you feel
          right at home. Our friendly staff, cozy ambiance, and open kitchen
          create an inviting atmosphere where you can watch your pizza being
          prepared with care and passion. For us, food is love — and we love
          sharing it with you.
        </p>
        <p>
          Thank you for choosing Pedro’s Pizzeria. We’re not just serving pizza —
          we’re serving joy, one slice at a time.
        </p>
      </div>
    </div>
  );
}

export default About;
