import React from "react";
import "./CaptaineAcceptTable.css";
import CaptainAcceptTableSingleCard from "./CaptainAcceptTableSingleCard/CaptainAcceptTableSingleCard";
import { useCaptainAcceptTable } from "./CaptainAcceptTable.hook";
import Loader from "../../../utils/Loader/Loader";
import Erro from "../../../utils/Error/Erro";
const CaptainAcceptTable = () => {
  const { loading, error, captainDetailsRe } = useCaptainAcceptTable();
  return (
    <div className="captaine-accept-table">
      <div className="captaine-accept-header">
        <span>Captain</span>
        <span>Phone</span>
        <span>Status</span>
        <span>Joining-Date</span>
        <span></span>
      </div>
      <div className="captaine-accept-table-body">
        {loading && <Loader />}
        {error && <Erro error={error} />}
        {!loading &&
          !error &&
          captainDetailsRe?.map((detail, index) => (
            <CaptainAcceptTableSingleCard key={index} captain={detail} />
          ))}
      </div>
    </div>
  );
};

export default CaptainAcceptTable;
