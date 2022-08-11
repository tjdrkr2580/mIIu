import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Barcode from "../../assets/barcode.png";

const Header = () => {
  return (
    <header className="web-header">
      <div className="header-wrapper">
        <Link to="/">
          <a className="logo">mIIu</a>
        </Link>
        <ul className="web-navs">
          <Link to="/">
            <li className="web-nav"></li>
          </Link>
          <Link to="/">
            <li className="web-nav">About</li>
          </Link>
          <Link to="/">
            <li className="web-nav">Musics</li>
          </Link>
          <Link to="/">
            <li className="web-nav">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="header-bottom">
        <p>Music To You.</p>
        <img className="barcode" src={Barcode} alt="II barcode" />
      </div>
    </header>
  );
};

export default Header;
