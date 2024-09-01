import React from "react";
import Button from "./Button";

const ButtonList = ({ onButtonClick }) => {
  return (
    <div className="button-container">
      <Button
        color="red"
        label="Kırmızı"
        onClick={() => onButtonClick("set1", "red")}
      />
      <Button
        color="blue"
        label="Mavi"
        onClick={() => onButtonClick("set2", "blue")}
      />
      <Button
        color="green"
        label="Yeşil"
        onClick={() => onButtonClick("set3", "green")}
      />
      <Button
        color="orange"
        label="Turuncu"
        onClick={() => onButtonClick("set4", "orange")}
      />
      <Button
        color="gray"
        label="Gri"
        onClick={() => onButtonClick("set5", "gray")}
      />
      <Button
        color="brown"
        label="Kahverengi"
        onClick={() => onButtonClick("set6", "brown")}
      />
    </div>
  );
};

export default ButtonList;
