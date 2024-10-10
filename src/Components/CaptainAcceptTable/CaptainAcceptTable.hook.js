import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminCaptainDetails } from "../../Redux/features/CaptainDetails.redux";

export const useCaptainAcceptTable = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.token);
  const { loading, captainDetailsRe, error } = useSelector(
    (state) => state.captains
  );

  // fetch all captain details with async/await
  useEffect(() => {
    token && dispatch(adminCaptainDetails({ token }));
  }, [token, dispatch]);

  return {
    loading,
    captainDetailsRe,
    error,
  };
};
