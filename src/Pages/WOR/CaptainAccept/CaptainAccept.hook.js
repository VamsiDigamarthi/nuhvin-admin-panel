import { useDispatch, useSelector } from "react-redux";

import { closeAdharModalFunc } from "../../../Redux/features/WOR/ModalOpenSlice";

export const useCaptainAccept = () => {
  const dispatch = useDispatch();

  const { openAdhaPanModal, openContent } = useSelector(
    (state) => state.captainModal
  );

  return {
    dispatch,
    openAdhaPanModal,
    openContent,
    closeAdharModalFunc,
  };
};
