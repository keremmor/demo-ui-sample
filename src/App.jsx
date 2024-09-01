import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import ButtonList from "./components/ButtonList";
import TableComponent from "./components/TableComponent";
import dataJson from "./data.json";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [headerColor, setHeaderColor] = useState("red");

  useEffect(() => {
    setData(dataJson.set1);
  }, []);

  const handleButtonClick = (setName, color) => {
    setData(dataJson[setName]);
    setHeaderColor(color);
  };

  return (
    <div>
      <Header headerColor={headerColor} />
      <ButtonList onButtonClick={handleButtonClick} />
      <TableComponent data={data} />
    </div>
  );
};

export default App;
