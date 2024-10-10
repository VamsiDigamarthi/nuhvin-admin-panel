import React from "react";
import "./CaptainAcceptTableSingleCard.css";
import CaptainAcceptImageCard from "../CaptainAcceptTableImageCard/CaptainAcceptImageCard";
import CaptainTableSingle from "./CaptainTableSingle/CaptainTableSingle";
import { useCaptainAcceptTableSingleCard } from "./CaptainAcceptTableSingleCard.hook";

import CaptainAcceptRejectedBtn from "./CaptainAcceptRejectedBtn/CaptainAcceptRejectedBtn";

const CaptainAcceptTableSingleCard = ({ captain }) => {
  const {
    onCancelClickOpenTextarea,
    onCancelClick,
    onWhichOpenDetails,
    detailsOpen,
    storeUnVerifiedDetails,
    onChangeTextArea,
  } = useCaptainAcceptTableSingleCard();

  return (
    <div className="captaine-accept-table-single-arent">
      <CaptainTableSingle
        onWhichOpenDetails={onWhichOpenDetails}
        captain={captain}
      />
      {detailsOpen === captain?._id && (
        <>
          <div className="captaine-accept-table-single-parent-inner">
            <CaptainAcceptImageCard captain={captain} />
          </div>
          <CaptainAcceptRejectedBtn
            onCancelClickOpenTextarea={onCancelClickOpenTextarea}
            onCancelClick={onCancelClick}
            captain={captain}
            storeUnVerifiedDetails={storeUnVerifiedDetails}
          />
          {onCancelClickOpenTextarea && (
            <textarea
              value={storeUnVerifiedDetails}
              onChange={onChangeTextArea}
              placeholder="Description"
              className="captain-accept-table-btn-text-card-textarea"
            />
          )}
        </>
      )}
    </div>
  );
};

export default CaptainAcceptTableSingleCard;
