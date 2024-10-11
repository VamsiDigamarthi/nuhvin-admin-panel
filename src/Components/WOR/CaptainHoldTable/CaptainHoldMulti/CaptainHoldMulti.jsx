import React from "react";
import "./CaptainHoldMulti.css";
import CaptainTableSingle from "../../CaptainAcceptTable/CaptainAcceptTableSingleCard/CaptainTableSingle/CaptainTableSingle";
import { useCaptainHoldMultiHook } from "./CaptainHoldMulti.hook";
import CaptainReviewCard from "./CaptainReviewCard/CaptainReviewCard";
const CaptainHoldMulti = ({
  captain,
  hasReviewRating,
  // filterReviewsByRating,
}) => {
  const { onWhichOpenDetails, detailsOpen, onCaptainBlock } =
    useCaptainHoldMultiHook();
  console.log(captain?.orders?.[0]?.reviewRating);
  return (
    <div className="captain-hold-multi-card">
      <CaptainTableSingle
        onWhichOpenDetails={onWhichOpenDetails}
        captain={captain}
        btnText={true}
      />

      {detailsOpen === captain?._id && (
        <div className="multi-parents">
          <div className="captain-block">
            <button
              className={`${
                captain?.holdingCaptain ? "captain-un-hold" : "captain-hold-btn"
              }`}
              onClick={() => onCaptainBlock(captain?._id)}
            >
              {captain?.holdingCaptain ? "Un-Hold" : "Block"}
            </button>
          </div>
          {hasReviewRating ? (
            <div className="captain-hold-mutil-second">
              <div className="captain-hold-multi-left">
                {captain.orders
                  .filter((order) => order.reviewRating || order.reviewTest) // Filter only orders with reviews
                  .map((order, index) => (
                    <CaptainReviewCard key={index} order={order} />
                  ))}
              </div>
              <div className="captain-hold-multi-right">
                <h2>Filter By Rating</h2>
                <img
                  // onClick={() => filterReviewsByRating(5)}
                  src="/images/fivestart.png"
                  alt=""
                />
                <img
                  // onClick={() => filterReviewsByRating(4)}
                  src="/images/4s.jpg"
                  alt=""
                />
                <img
                  // onClick={() => filterReviewsByRating(3)}
                  src="/images/3s.png"
                  alt=""
                />
                <img
                  // onClick={() => filterReviewsByRating(2)}
                  src="/images/2s.png"
                  alt=""
                />
                <img
                  // onClick={() => filterReviewsByRating(1)}
                  src="/images/1s.png"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div className="captain-no-reviews">
              <h2>No Reviews Found</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CaptainHoldMulti;
