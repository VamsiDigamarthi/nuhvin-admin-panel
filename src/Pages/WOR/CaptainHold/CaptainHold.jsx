import React from "react";
import "./CaptainHold.css";
import CaptainHoldTable from "../../../Components/WOR/CaptainHoldTable/CaptainHoldTable";
const CaptainHold = () => {
  return (
    <>
      <div className="captain-accept-card">
        <div className="captaine-accept-top-card">
          <h2>Captain Details</h2>
        </div>
        <div className="captaine-accept-table-main">
          <CaptainHoldTable />
        </div>
      </div>
    </>
  );
};

export default CaptainHold;
