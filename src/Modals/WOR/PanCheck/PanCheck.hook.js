import { useEffect, useState } from "react";

export const usePanCheckHook = ({ captain }) => {
  const [isPanCardOrAadharCard, setIsPanCardOrAadharCard] = useState(false);

  useEffect(() => {
    if (captain?.panCardDetails !== null) {
      setIsPanCardOrAadharCard(true);
    }
  }, [captain]);

  return {
    isPanCardOrAadharCard,
  };
};
