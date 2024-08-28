import Header from "./components/Header";
import React, { useState, useEffect } from "react"; // useState'i buradan import edin

import ButtonList from "./components/ButtonList";
import TableComponent from "./components/TableComponent";
import "./App.css"; // Özel stil dosyanız
import dataJson from "./data.json"; // JSON dosyasını import edin

const App = () => {
  const [data, setData] = useState([]);
  const [headerColor, setHeaderColor] = useState("red"); // Varsayılan header rengi

  useEffect(() => {
    setData(dataJson.set1); // Başlangıçta set1 verisini yükleyin
  }, []);

  const handleButtonClick = (setName, color) => {
    setData(dataJson[setName]); // Veri setini güncelle
    setHeaderColor(color); // Header rengini güncelle
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
