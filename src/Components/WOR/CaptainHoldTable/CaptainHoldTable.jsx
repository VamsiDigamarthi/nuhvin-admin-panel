import React from "react";
import "./CaptainHoldTable.css";
import CaptainTableHeader from "../CaptainAcceptTable/CaptainAcceptTableSingleCard/CaptainTableHeader/CaptainTableHeader";
import CaptainHoldMulti from "./CaptainHoldMulti/CaptainHoldMulti";
import { useCaptainHoldTableHook } from "./CaptainHoldTable.hook";
import Loader from "../../../utils/Loader/Loader";
import Erro from "../../../utils/Error/Erro";

const CaptainHoldTable = () => {
  const { captainReviws, loading, error } = useCaptainHoldTableHook();
  console.log(captainReviws);
  return (
    <div className="captain-hold-table">
      <CaptainTableHeader isUseCaptainHoldingComponent="Averag rating" />
      <div className="captaine-hold-table-body">
        {loading && <Loader />}
        {error && <Erro error={error} />}
        {!loading &&
          !error &&
          captainReviws?.map((captain, index) => {
            const hasReviewRating = captain.orders.some((order) =>
              order.hasOwnProperty("reviewRating")
            );
            return (
              <CaptainHoldMulti
                key={index}
                captain={captain}
                hasReviewRating={hasReviewRating}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CaptainHoldTable;
