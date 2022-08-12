import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home-wrapper">
      <ul className="home-images">
        <div className="g1">
          <li className="home-image">
            <img src={require("../../assets/pic1.png")} alt="pic1" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic3.png")} alt="pic3" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic5.png")} alt="pic5" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic7.png")} alt="pic7" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic9.png")} alt="pic9" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic11.png")} alt="pic11" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic13.png")} alt="pic13" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic15.png")} alt="pic15" />
          </li>
        </div>
        <div className="g2">
          <li className="home-image">
            <img src={require("../../assets/pic2.png")} alt="pic2" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic4.png")} alt="pic4" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic6.png")} alt="pic6" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic8.png")} alt="pic8" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic10.png")} alt="pic10" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic12.png")} alt="pic12" />
          </li>
          <li className="home-image">
            <img src={require("../../assets/pic14.png")} alt="pic14" />
          </li>
        </div>
      </ul>
    </section>
  );
};

export default Home;
