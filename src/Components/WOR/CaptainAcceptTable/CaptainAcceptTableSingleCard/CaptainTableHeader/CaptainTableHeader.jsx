import React from "react";
import "./CaptainTableHeader.css";
const CaptainTableHeader = ({
  isUseCaptainHoldingComponent = "Joining-Date",
}) => {
  return (
    <div className="captaine-accept-header">
      <span>Captain</span>
      <span>Phone</span>
      <span>Status</span>
      <span>{isUseCaptainHoldingComponent}</span>
      <span></span>
    </div>
  );
};

export default CaptainTableHeader;
