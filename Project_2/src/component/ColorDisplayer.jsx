import React from "react";

const ColorDisplayer = ({ displayColor }) => {
  return (
    <section className="color-container" style={{ backgroundColor: displayColor }}>
      <h1>{displayColor}</h1>
    </section>
  );
};

export default ColorDisplayer;
