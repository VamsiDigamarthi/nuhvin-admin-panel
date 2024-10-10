import React from "react";
import "./PanCheck.css";
import PanLeft from "./PanLeft/PanLeft";
import { usePanCheckHook } from "./PanCheck.hook";
import PanRight from "./PanRight/PanRight";
const PanCheck = () => {
  const {
    whatDisplayImage,
    whatDisplayDocument,
    whatDisplayContent,
    onPanOrAadharVerificationFun,
  } = usePanCheckHook();
  return (
    <div className="pan-check">
      <PanCheckSomeUi />
      {/* <div className="pan-check-verified-btn">
        <button>Not-Verified</button>
      </div> */}
      <div className="pan-check-verified-btn-two">
        <button onClick={onPanOrAadharVerificationFun}>Verified</button>
      </div>
      {/* main content */}
      <div className="pan-main-content">
        <div className="pan-main-content-left">
          <PanLeft
            panCard={whatDisplayImage}
            whatDisplayDocument={whatDisplayDocument}
          />
        </div>
        <div className="pan-main-content-right">
          <PanRight panCardDetails={whatDisplayContent} />
        </div>
      </div>
    </div>
  );
};

const PanCheckSomeUi = () => {
  return (
    <>
      <div className="pan-left-slight"></div>
      <div className="pan-left-curv-first"></div>
      <div className="vs-card">
        <h2>VS</h2>
      </div>
      <div className="pan-right-slight"></div>
      <div className="pan-left-curv-second"></div>
    </>
  );
};

export default PanCheck;
