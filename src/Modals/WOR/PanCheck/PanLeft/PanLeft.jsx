import React from "react";
import "./PanLeft.css";
import { imageUrl } from "../../../../Core/url";
import { usePanLeftHook } from "./PanLeft.hook";
import PanDatNotFound from "../PanDataNotFound/PanDatNotFound";

const PanLeft = ({ panCard, whatDisplayDocument }) => {
  const { handleDoubleClick, zoomStyles, zoom } = usePanLeftHook();
  const panImage = `${imageUrl}/${panCard}`;
  return (
    <div className="pan-left">
      {panCard === null ? (
        <PanDatNotFound title={`${whatDisplayDocument}`} color="#e02e88" />
      ) : (
        <div>
          <img
            src={panImage}
            alt="Pan Card"
            className={zoom && "zoom"}
            onDoubleClick={handleDoubleClick}
            style={zoomStyles} // Use the computed zoom styles
          />
        </div>
      )}
    </div>
  );
};

export default PanLeft;
