import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/header";
import BouncingLogo from "./Sketch/sketch";
import Wines from "./Components/wines";
import WinePage from "./Components/winePage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <BouncingLogo />
          </Route>
          <Route path="/wines">
            <Wines />
          </Route>
          <Route path="/wine/:id">
            <WinePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
