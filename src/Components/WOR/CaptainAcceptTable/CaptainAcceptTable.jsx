import React from "react";
import "./CaptaineAcceptTable.css";
import CaptainAcceptTableSingleCard from "./CaptainAcceptTableSingleCard/CaptainAcceptTableSingleCard";
import { useCaptainAcceptTable } from "./CaptainAcceptTable.hook";
import Loader from "../../../utils/Loader/Loader";
import Erro from "../../../utils/Error/Erro";
import CaptainTableHeader from "./CaptainAcceptTableSingleCard/CaptainTableHeader/CaptainTableHeader";
const CaptainAcceptTable = ({ userRole }) => {
  const { loading, error, captainDetailsRe } = useCaptainAcceptTable({
    userRole,
  });

  console.log(captainDetailsRe);
  return (
    <div className="captaine-accept-table">
      <CaptainTableHeader />
      <div className="captaine-accept-table-body">
        {loading && <Loader />}
        {error && <Erro error={error} />}
        {!loading &&
          !error &&
          captainDetailsRe?.map((detail, index) => (
            <CaptainAcceptTableSingleCard
              key={index}
              captain={detail}
              userRole={userRole}
            />
          ))}
      </div>
    </div>
  );
};

export default CaptainAcceptTable;
