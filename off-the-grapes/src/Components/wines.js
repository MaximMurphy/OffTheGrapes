import React, { Component } from "react";
import { getWines } from "./wineList";

class Wines extends Component {
  state = {
    wines: getWines(),
  };
  render() {
    return (
      <div className="wineView">
        <div class="columns">
          {this.state.wines.map((wine) => (
            <div class="column">
              <h1>{wine.name}</h1>
              <h2>{wine.producer}</h2>
              <p>{wine.type}</p>
              <img src={wine.flag} alt=" " width="20" height="20"></img>
              <p className="review">{wine.review}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Wines;
