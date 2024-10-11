import React from "react";
import "./CaptainReviewCard.css";
import { FaStar } from "react-icons/fa";
import { imageUrl } from "../../../../../Core/url";
const CaptainReviewCard = ({ order }) => {
  let imagePath = order?.head?.profilePic
    ? `${imageUrl}/${order?.head?.profilePic}`
    : "/images/user-profile.png";
  return (
    <div className="captain-review-card">
      <div className="captain-single-revi-fc">
        <div className="captain-single-revi-fc-left">
          <img src={imagePath} alt="" />
          <div>
            <h3>{order?.head?.name ? order?.head?.name : "Name"}</h3>
            <span>
              {order?.head?.mobile ? order?.head?.mobile : "9098765432"}
            </span>
          </div>
        </div>
        <div>
          <FaStar size={30} color="gold" />
          <div>
            <h3>
              <span>{order?.reviewRating ? order?.reviewRating : "0"}</span> / 5
            </h3>
          </div>
        </div>
      </div>
      <hr />
      <span>
        {order?.reviewTest
          ? order?.reviewTest
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "}
      </span>
    </div>
  );
};

export default CaptainReviewCard;
