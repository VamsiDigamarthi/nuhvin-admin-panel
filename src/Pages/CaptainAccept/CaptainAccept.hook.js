import { useDispatch, useSelector } from "react-redux";
import PanCheck from "../../Modals/PanCheck/PanCheck";
import VehicleRc from "../../Modals/VehicleRc/VehicleRc";
import DrivingLicence from "../../Modals/DrivingLicence/DrivingLicence";
import {
  closeAdharModalFunc,
  closeDrivingLicenceModalFunc,
  closeVehicleRcModalFunc,
} from "../../Redux/features/ModalOpenSlice";

export const useCaptainAccept = () => {
  const dispatch = useDispatch();

  const modalComponents = {
    openAdhaPanModal: { component: PanCheck, closeFunc: closeAdharModalFunc },
    openVehicleRcModal: {
      component: VehicleRc,
      closeFunc: closeVehicleRcModalFunc,
    },
    openDrivingLicenceModal: {
      component: DrivingLicence,
      closeFunc: closeDrivingLicenceModalFunc,
    },
  };
  const {
    openAdhaPanModal,
    openVehicleRcModal,
    openDrivingLicenceModal,
    openContent,
    openVehicleRcContent,
    openDrivingLicenceContent,
  } = useSelector((state) => state.captainModal);

  const modals = [
    {
      isOpen: openAdhaPanModal,
      content: openContent,
      modalType: "openAdhaPanModal",
    },
    {
      isOpen: openVehicleRcModal,
      content: openVehicleRcContent,
      modalType: "openVehicleRcModal",
    },
    {
      isOpen: openDrivingLicenceModal,
      content: openDrivingLicenceContent,
      modalType: "openDrivingLicenceModal",
    },
  ];
  return {
    dispatch,
    modalComponents,
    modals,
  };
};
