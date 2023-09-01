import React from "react";
import "../styles/mouse.scss";

const Mouse = () => {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let width = (w / 2 / w) * 100;
  let height = (h / 2.2 / h) * 100;
  console.log(w / 2);
  const scrolltop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      style={{
        right: "4rem",
        bottom: "4rem",
      }}
      onClick={() => scrolltop()}
      className="mouse"
    >
      <div className="innermouse"></div>
    </div>
  );
};

export default Mouse;
