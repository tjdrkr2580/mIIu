import React from "react";
import "./home.css";

const Home = () => {
  const pic = [
    { src: require("../../assets/pic1.png"), alt: "Picture 1" },
    { src: require("../../assets/pic2.png"), alt: "Picture 2" },
    { src: require("../../assets/pic3.png"), alt: "Picture 3" },
    { src: require("../../assets/pic4.png"), alt: "Picture 4" },
    { src: require("../../assets/pic5.png"), alt: "Picture 5" },
    { src: require("../../assets/pic6.png"), alt: "Picture 6" },
    { src: require("../../assets/pic7.png"), alt: "Picture 7" },
  ];

  return (
    <section className="home-wrapper">
      <ul className="home-images">
        {pic.map(({ src, alt }) => (
          <li className="home-image" key={alt}>
            <img src={src} alt={alt}></img>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
