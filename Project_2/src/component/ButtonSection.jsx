import React from "react";
import { useState } from "react";

const ButtonSection = ({
  hexColor,
  setHexColor,
  rgbColor,
  setRgbColor,
  randomColor,
  setRandomColor,
  setDisplayColor,
}) => {
  const [changeColor, setChangeColor] = useState("hex");
  const handleHexColor = () => {
    let color = "#";
    let colorHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    for (let i = 0; i < 6; i++) {
      const randomHexColor = Math.floor(Math.random() * colorHex.length);
      color += colorHex[randomHexColor];
    }

    setHexColor(color);
    setDisplayColor(hexColor);
    setChangeColor("hex");

  };

  const handleRGBColor = () => {
    const RedColor = Math.floor(Math.random() * 255);
    const GreenColor = Math.floor(Math.random() * 255);
    const BlueColor = Math.floor(Math.random() * 255);

    const RGB_COLOR = `rgb(${RedColor}, ${GreenColor}, ${BlueColor})`;

    setRgbColor(RGB_COLOR);
    setDisplayColor(rgbColor);
    setChangeColor("rgb");
  };
  // console.log(handleRandomColor);

  return (
    <section className="button-section">
      <button disabled={changeColor === "hex" ? true : false} onClick={() => handleHexColor()}>CREATE HEX COLOR</button>
      <button disabled={changeColor === "rgb" ? true : false} onClick={() => handleRGBColor()}>CREATE RGB COLOR</button>
      <button onClick={() => changeColor === "hex" ? handleHexColor() : handleRGBColor()}>CREATE RANDOM COLOR</button>
    </section>
  );
};

export default ButtonSection;
