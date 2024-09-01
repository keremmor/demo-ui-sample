import React from "react";

const Header = ({ headerColor }) => {
  return (
    <header className="custom-header" style={{ backgroundColor: headerColor }}>
      <div className="menu-icon">
        <img
          src="/icons/app-logo.png"
          alt="Menu Icon"
          className="menu-icon-image"
        />
      </div>
      <h1 className="title">Test</h1>
    </header>
  );
};

export default Header;
