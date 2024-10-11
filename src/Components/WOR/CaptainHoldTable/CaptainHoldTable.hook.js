import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminCaptainReviews } from "../../../Redux/features/WOR/CaptainReview";

export const useCaptainHoldTableHook = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.token);
  const { loading, error, captainReviws } = useSelector(
    (state) => state.captainReviews
  );

  useEffect(() => {
    dispatch(adminCaptainReviews({ token }));
  }, [dispatch, token]);

  return {
    captainReviws,
    loading,
    error,
  };
};
