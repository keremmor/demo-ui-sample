import React from "react";

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
