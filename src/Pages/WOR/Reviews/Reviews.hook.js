import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminOrderReviews } from "../../../Redux/features/WOR/ReviewsSlice";

export const useOrderReviews = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.token);

  const { loading, error, rorderReviews } = useSelector(
    (state) => state.orderReviews
  );

  useEffect(() => {
    dispatch(adminOrderReviews({ token }));
  }, [dispatch, token]);

  return {
    rorderReviews,
    loading,
    error,
  };
};
