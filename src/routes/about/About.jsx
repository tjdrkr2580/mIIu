import React, { useEffect, useState } from "react";
import m2u from "../../assets/pic1.png";
import "./about.css";
import AnimationPage from "../../AnimationPage";
import Loading from "../Loading/Loading";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `About | mIIu`;
  }, []);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 250);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <AnimationPage>
          <section className="about-wrapper">
            <img className="about-profile" src={m2u} alt="profile" />
            <section className="about-box">
              <h1 className="about-name">
                <a href="https://namu.wiki/w/M2U" target="_blink">
                  Music To You, Shin dong-hwi
                </a>
              </h1>
              <section className="about-desc">
                <p>I doesn't think of game music as just one</p>
                <p>use and throw it away. Gone are the days when</p>
                <p>
                  game music was simply additional content. Unlike in the past,
                </p>
                <p>
                  game music is now a great help in creating a sense of urgency
                </p>
                <p>in the mind or situation of the protagonist.</p>
                <br />
                <p>Now, I think game music should get out of the game and</p>
                <p>
                  actively listen to the public. I will continue to do my best
                </p>
                <p>
                  to make game music and subculture music accessible to users
                  and
                </p>
                <p>various people who love Korean game music.</p>
              </section>
            </section>
          </section>
        </AnimationPage>
      )}
    </>
  );
};

export default About;
