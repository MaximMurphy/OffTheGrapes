import React from "react";
import Header from "./Header/header";
import BouncingLogo from "./Sketch/sketch";
import Wines from "./Components/wines";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BouncingLogo />
      <Wines />
    </div>
  );
};

export default App;
