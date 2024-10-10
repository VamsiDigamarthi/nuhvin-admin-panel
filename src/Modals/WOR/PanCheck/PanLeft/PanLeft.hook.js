import { useState } from "react";

export const usePanLeftHook = () => {
  const [zoom, setZoom] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleDoubleClick = (e) => {
    const {
      offsetX: clickOffsetX,
      offsetY: clickOffsetY,
      target,
    } = e.nativeEvent;
    const { width, height } = target;

    // Calculate the percentage of the click position relative to the image
    const xPercent = (clickOffsetX / width) * 100;
    const yPercent = (clickOffsetY / height) * 100;

    setOffsetX(xPercent);
    setOffsetY(yPercent);
    setZoom(!zoom); // Toggle the zoom state
  };

  // Compute the zoom styles based on the zoom state and the offsets
  const zoomStyles = zoom
    ? {
        transformOrigin: `${offsetX}% ${offsetY}%`,
        transform: "scale(2)", // Adjust the zoom scale factor here
      }
    : {};

  return {
    handleDoubleClick,
    zoomStyles,
    zoom,
  };
};
