import React from "react";
import igLogo from "../Images/instagram.png";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <span> offthegrapes </span>
      </div>
      <div className="instagram">
        <a href="https://www.instagram.com/offthegrapes/">
          <img
            src={igLogo}
            alt="sharing good wine"
            width="25"
            height="25"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Header;
