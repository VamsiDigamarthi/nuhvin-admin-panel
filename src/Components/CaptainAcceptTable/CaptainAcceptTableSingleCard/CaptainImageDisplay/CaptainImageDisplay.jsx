import React from "react";
import "./CaptainImageDisplay.css";
import { imageUrl } from "../../../../Core/url";
const CaptainImageDisplay = ({ captain }) => {
  let imagePath =
    captain?.profilePic?.length > 0
      ? `${imageUrl}/${captain?.profilePic}`
      : "/images/user-profile.png";

  let authImage =
    captain?.authenticationImage?.length > 0
      ? `${imageUrl}/${captain?.authenticationImage}`
      : "/images/user-profile.png";

  return (
    <div className="captaine-accept-image-first">
      <img src={imagePath} alt="" />
      <div className="captain-accept-image-first-inner-card">
        <h1>PROFILE COMPARISON</h1>
        <div>
          <span>{captain?.name}</span>
          <span>Authenticated Image</span>
        </div>
      </div>
      <img src={authImage} alt="" />
    </div>
  );
};

export default CaptainImageDisplay;
