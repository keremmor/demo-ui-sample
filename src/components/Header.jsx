// Header.jsx
import React from "react";
import "primereact/resources/themes/saga-blue/theme.css"; // PrimeReact tema
import "primereact/resources/primereact.min.css"; // PrimeReact CSS
import "primeicons/primeicons.css"; // PrimeIcons
import "./Header.css"; // Özel stil dosyanız

const Header = ({ headerColor }) => {
  return (
    <header className="custom-header" style={{ backgroundColor: headerColor }}>
      <div className="menu-icon">
        <i className="pi pi-bars"></i> {/* Menü ikonu */}
      </div>
      <h1 className="title">Test</h1>
      <div className="search-icon">
        <i className="pi pi-search"></i> {/* Arama ikonu */}
      </div>
    </header>
  );
};

export default Header;
