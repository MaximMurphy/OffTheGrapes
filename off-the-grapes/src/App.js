import React from "react";
import { render } from "react-dom";
import Sketch from "react-p5";
import Header from "./Components/header";
import "./App.css";

const App = () => {
  let canvas;
  let img;
  let x, y;
  let xSpeed;
  let ySpeed;

  let preload = (p5) => {
    img = p5.loadImage("https://i.imgur.com/5495IUB.png");
  };

  let setup = (p5, canvasParentRef) => {
    canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.style("display", "block");

    //can change the starting position here
    x = 500;
    y = 500;
    xSpeed = 4;
    ySpeed = 4;
  };

  let windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  let draw = (p5) => {
    p5.background(225);
    p5.image(img, x, y);
    x = x + xSpeed;
    y = y + ySpeed;

    //testing when walls are hit
    if (x + img.width - 40 >= p5.windowWidth || x <= -40) {
      xSpeed = -xSpeed;
    }
    if (y + img.height - 40 >= p5.windowHeight || y <= -40) {
      ySpeed = -ySpeed;
    }
  };

  return (
    <div className="App">
      <Header />
      <Sketch
        preload={preload}
        setup={setup}
        windowResized={windowResized}
        draw={draw}
      />
    </div>
  );
};

export default App;
