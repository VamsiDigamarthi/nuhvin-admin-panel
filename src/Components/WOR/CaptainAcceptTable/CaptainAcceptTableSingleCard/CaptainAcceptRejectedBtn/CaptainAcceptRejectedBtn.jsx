import React from "react";
import "./CaptainAcceptRejectedBtn.css";
import Chart from "react-apexcharts";
import { useCaptainAcceptRejectedHook } from "./CaptainAcceptRejectedBtn.hook";
const CaptainAcceptRejectedBtn = ({
  onCancelClickOpenTextarea,
  onCancelClick,
  captain,
  storeUnVerifiedDetails,
}) => {
  const { options, update, onCaptainVerified, onCaptainUnVerified } =
    useCaptainAcceptRejectedHook({
      captain,
      storeUnVerifiedDetails,
    });
  return (
    <div className="captain-accept-table-btn-text-card">
      <div className="captaine-accept-table-single-confirm-btn">
        <button className="verified-btn" onClick={onCaptainVerified}>
          Verified
        </button>
        <Chart options={options} series={update} type="donut" width="100%" />
        {onCancelClickOpenTextarea ? (
          <button onClick={onCaptainUnVerified}>Submit</button>
        ) : (
          <button onClick={onCancelClick}>Cancel</button>
        )}
      </div>
    </div>
  );
};

export default CaptainAcceptRejectedBtn;
