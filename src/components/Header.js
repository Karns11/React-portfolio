import React from "react";
import showcase from "../assets/showcase.jpg";
import logo from "../assets/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      <div className="header__showcase">
        <div className="header__showcase-pic-container">
          <img className="showcase-pic" src={showcase} alt="showcase_pic"></img>
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">Aspiring Developer</h1>
          <p className="heading-sub">
            I'm excited to share my journey and projects on this platform with
            you.
          </p>
          <a
            href="#Projects"
            className="header-btn header-btn-white header-btn-animated"
          >
            Check out my projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
