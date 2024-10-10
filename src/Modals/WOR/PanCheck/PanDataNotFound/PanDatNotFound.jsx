import React from "react";
import { AiFillNotification } from "react-icons/ai";
import "./PanDataNotFound.css";

const PanDatNotFound = ({
  title,
  reverseOrder = false,
  color,
  rotate = "0deg",
}) => {
  return (
    <div className={`pan-data-not-found ${reverseOrder ? "reverse" : ""}`}>
      <h2>{title}</h2>
      <span
        style={{
          background: color,
          transform: `rotateY(${rotate})`,
        }}
      >
        <AiFillNotification size={25} color="#fff" />
      </span>
    </div>
  );
};

export default PanDatNotFound;
