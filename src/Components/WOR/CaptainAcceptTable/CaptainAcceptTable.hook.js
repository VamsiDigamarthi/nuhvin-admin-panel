import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminCaptainDetails } from "../../../Redux/features/WOR/CaptainDetails.redux";
// import { adminCaptainDetails } from "../../Redux/features/WOR/CaptainDetails.redux";

export const useCaptainAcceptTable = ({ userRole }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.token);
  const { loading, captainDetailsRe, error } = useSelector(
    (state) => state.captains
  );

  // fetch all captain details with async/await
  useEffect(() => {
    dispatch(adminCaptainDetails({ token, userRole }));
  }, [token, dispatch, userRole]);

  return {
    loading,
    captainDetailsRe,
    error,
  };
};
