import React from "react";
import "./Button.css"; // Özel stil dosyanız

const Button = ({ color, label, rounded, onClick }) => {
  return (
    <button
      className={`color-button ${color} ${rounded ? "rounded" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
