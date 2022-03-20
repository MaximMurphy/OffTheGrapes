import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getWines } from "./wineList";

class Wines extends Component {
  state = {
    wines: getWines(),
  };
  render() {
    return (
      <div className="wineView">
        <div class="columns">
          {this.state.wines
            .sort((a, b) => a.producer.localeCompare(b.producer))
            .map((wine) => (
              <div class="column">
                <Link to={`/wine/${wine._id}`} className="name-link">
                  <h1>{wine.name}</h1>
                </Link>
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
