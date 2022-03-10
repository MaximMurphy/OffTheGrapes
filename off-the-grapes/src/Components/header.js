import React from "react";

const Header = () => {
  return (
    <header>
      <div className="title">
        <span> OffTheGrapes </span>
      </div>
      <div className="instagram">
        <a href="https://www.instagram.com/offthegrapes/">
          <img
            src="https://i.imgur.com/nHGbiLJ.png"
            alt="sharing good wine"
            width="25"
            height="25"
          ></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
