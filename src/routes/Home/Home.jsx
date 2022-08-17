import React, { useState, useEffect } from "react";
import "./home.css";
import AnimationPage from "./../../AnimationPage";
import Loading from "./../Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 150);
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Home | mIIu`;
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <AnimationPage>
          <section className="home-wrapper" onClick={() => {}}>
            <ul className="home-images">
              <div className="g1">
                <li className="home-image">
                  <img src={require("../../assets/pic2.png")} alt="pic1" />
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
            <button className="top-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7l4-4m0 0l4 4m-4-4v18"
                />
              </svg>
            </button>
          </section>
        </AnimationPage>
      )}
    </>
  );
};

export default Home;
