import React from "react";
import "./home.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="home-wrapper">
      <ul className="home-images">
        <div className="g1">
          <li className="home-image">
            <img src={require("../../assets/pic1.png")} alt="pic1" />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic3.png")}
              alt="pic3"
              data-aos="flip-left"
              data-aos-offset="400"
            />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic5.png")}
              alt="pic5"
              data-aos="flip-left"
              data-aos-offset="500"
            />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic7.png")}
              alt="pic7"
              data-aos="flip-left"
            />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic9.png")}
              alt="pic9"
              data-aos="flip-left"
            />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic11.png")}
              alt="pic11"
              data-aos="flip-left"
            />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic13.png")}
              alt="pic13"
              data-aos="flip-left"
            />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic15.png")}
              onClick={scrollToTop}
              alt="pic15"
              data-aos="flip-left"
            />
          </li>
        </div>
        <div className="g2">
          <li className="home-image">
            <img src={require("../../assets/pic2.png")} alt="pic2" />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic4.png")}
              alt="pic4"
              data-aos="flip-left"
              data-aos-offset="600"
            />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic6.png")}
              alt="pic6"
              data-aos="flip-left"
            />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic8.png")}
              alt="pic8"
              data-aos="flip-left"
            />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic10.png")}
              alt="pic10"
              data-aos="flip-left"
            />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic12.png")}
              alt="pic12"
              data-aos="flip-left"
            />
          </li>
          <li className="home-image">
            <img
              src={require("../../assets/pic14.png")}
              alt="pic14"
              data-aos="flip-left"
            />
          </li>
        </div>
      </ul>
      <button className="top-btn" onClick={scrollToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 7l4-4m0 0l4 4m-4-4v18"
          />
        </svg>
      </button>
    </section>
  );
};

export default Home;
