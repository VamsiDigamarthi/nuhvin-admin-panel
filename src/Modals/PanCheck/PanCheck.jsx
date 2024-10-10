import React from "react";
import "./PanCheck.css";
import { useSelector } from "react-redux";
const PanCheck = () => {
  const { captain } = useSelector((state) => state.captainModal);
  console.log("sdfgh", captain);
  return (
    <div className="pan-check">
      <div className="pan-left-slight"></div>
      <div className="pan-left-curv-first"></div>
      <div className="vs-card">
        <h2>VS</h2>
      </div>
      <div className="pan-right-slight"></div>
      <div className="pan-left-curv-second"></div>
      {/* main content */}
      <div className="pan-main-content">
        <div className="pan-main-content-left"></div>
        <div className="pan-main-content-right"></div>
      </div>
    </div>
  );
};

export default PanCheck;
