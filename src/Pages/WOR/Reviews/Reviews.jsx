import React from "react";
import "./Reviews.css";
import CaptainReviewCard from "../../../Components/WOR/CaptainHoldTable/CaptainHoldMulti/CaptainReviewCard/CaptainReviewCard";
import { useOrderReviews } from "./Reviews.hook";
import Loader from "../../../utils/Loader/Loader";
import Erro from "../../../utils/Error/Erro";
const Reviews = () => {
  const { rorderReviews, loading, error } = useOrderReviews();
  console.log(rorderReviews);
  return (
    <div className="reviews-main">
      {loading && <Loader />}
      {error && <Erro error={error} />}
      {/* <div className="reviews-filter">
        <select
          name="
        "
          id=""
        >
          <option selected hidden disabled>
            SELECT RATING
          </option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </div> */}
      <div className="-all-reviws-">
        {rorderReviews?.map((singleReviw) => (
          <div className="new-sdfv-single-review">
            <CaptainReviewCard order={singleReviw} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
