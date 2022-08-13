import React from "react";
import m2u from "../../assets/pic1.png";
import "./about.css";

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="about-box">
        <h1 className="about-name">Korea's Game OST Producer</h1>
        <p className="about-discription">
          I doesn't think of game music as just one
          <br /> use and throw it away. Gone are the days when
          <br /> game music was simply additional content. Unlike in the
          <br />
          past, game music is now a great help in creating a sense of urgency
          <br /> in the mind or situation of the protagonist.
          <br />
          Now, I think game music should get out of the game and <br />
          actively listen to the public. I will continue to do my best <br />
          to make game music and subculture music accessible to users and
          various <br />
          people who love Korean game music.
        </p>
      </div>
      <img className="about-profile" src={m2u} alt="profile" />
    </section>
  );
};

export default About;
