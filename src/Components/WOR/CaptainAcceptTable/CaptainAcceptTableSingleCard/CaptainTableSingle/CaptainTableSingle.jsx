import React from "react";
import "./CaptainTableSingle.css";
import { FaChevronDown } from "react-icons/fa";
import { imageUrl } from "../../../../../Core/url";
const CaptainTableSingle = ({
  captain,
  onWhichOpenDetails,
  btnText = false,
}) => {
  let imagePath =
    captain?.profilePic?.length > 0
      ? `${imageUrl}/${captain?.profilePic}`
      : "/images/user-profile.png";
  const statusColor = captain?.holdingCaptain
    ? "#f7b602" // If the captain is holding
    : captain?.reviewToVerified
    ? "#3bd4c2" // If the captain's review is verified
    : "#4fa953";
  return (
    <div className="captaine-accept-table-single-card">
      <div>
        <img src={imagePath} alt="" />
        <div>
          <span>{captain?.name}</span>
          <span>{captain?.email ? captain.email : "mail not provided..!"}</span>
        </div>
      </div>
      <span>{captain?.mobile}</span>
      <span>
        <span
          style={{
            background: statusColor,
          }}
        >
          {btnText
            ? captain?.holdingCaptain
              ? "Hold"
              : "Release"
            : captain?.reviewToVerified
            ? "Review"
            : "Pending"}
        </span>
      </span>
      <span>{captain?.averageRating ? captain?.averageRating : "0"}</span>
      <span>
        <FaChevronDown
          onClick={() => onWhichOpenDetails(captain?._id)}
          size={20}
        />
      </span>
    </div>
  );
};

export default CaptainTableSingle;
