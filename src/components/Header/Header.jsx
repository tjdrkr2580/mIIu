import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="web-header">
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
    </header>
  );
};

export default Header;
