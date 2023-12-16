import React, { useState } from "react";
import "./Tooltip.css";

export default function Tooltip({ position }) {
  const [isHover, setHover] = useState(false);

  const toggleToolip = (status) => {
    setHover(status);
  };
  // style the position of message gif
  const tooltipStyle = {
    position: "absolute",
    top: position === "top" ? "-82px" : position === "bottom" ? "63px" : 0,
    left:
      position === "bottom" || position === "top"
        ? "52%"
        : position === "right"
        ? "56%"
        : position === "left"
        ? "36%"
        : 0,
    background: "black",
    color: "white",
    width: "175px",
    height: "61px",
    padding: "5px",
    borderRadius: "5px",
    visibility: isHover ? "visible" : "hidden",
    transition: "visibility 0s, opacity 0.5s ease",
    opacity: isHover ? 1 : 0,
    zIndex: 1,
    transform:
      position === "left" || position === "right" ? "translateY(20%)" : "",
  };
  //style the gif part
  const arrowStyle = {
    position: "absolute",
    content: '""',
    width: "151px",
    height: 0,
    borderTop: "10px solid black",
    borderRight: "10px solid transparent",
    borderBottom: "0px solid transparent",
    borderLeft: "10px solid transparent",
    top: position === "top" ? "3.8px" : position === "bottom" ? "4px" : 0,
    left: position === "left" ? "14px" : position === "right" ? "2px" : 0,
    transform: position === "bottom",
  };

  // Return the tooltip element and the element that the tooltip is associated with
  return (
    <div style={{ position: "relative" }}>
    
      <div
        className="hover"
        onMouseEnter={() => toggleToolip(true)}
        onMouseLeave={() => toggleToolip(true)}
        >
        <button>Hover me</button>
        </div>
      <div style={tooltipStyle}>
        <div style={arrowStyle}>Thanks for hovering! I am tooltip</div>
      </div>
    </div>
  );
}
