import { createSlice } from "@reduxjs/toolkit";

const captainModal = createSlice({
  name: "captain",
  initialState: {
    openAdhaPanModal: false, // To control modal visibility
    openContent: "",
    openVehicleRcModal: false, // To control modal visibility
    openVehicleRcContent: "",
    openDrivingLicenceModal: false, // To control modal visibility
    openDrivingLicenceContent: "",
    captain: {}, // To control modal visibility
  },
  reducers: {
    openAdharModalFunc: (state, action) => {
      state.openAdhaPanModal = true;
      state.openContent = action.payload?.title;
      state.captain = action.payload?.captain;
    },
    closeAdharModalFunc: (state) => {
      state.openAdhaPanModal = false; // Close the modal
    },
    openVehicleRcModalFunc: (state, action) => {
      state.openVehicleRcModal = true;
      state.openVehicleRcContent = action.payload?.title;
      state.captain = action.payload?.captain;
    },
    closeVehicleRcModalFunc: (state) => {
      state.openVehicleRcModal = false; // Close the modal
    },
    openDrivingLicenceModalFunc: (state, action) => {
      state.openDrivingLicenceModal = true;
      state.openDrivingLicenceContent = action.payload?.title;
      state.captain = action.payload?.captain;
    },
    closeDrivingLicenceModalFunc: (state) => {
      state.openDrivingLicenceModal = false; // Close the modal
    },
  },
});

export const {
  openAdharModalFunc,
  closeAdharModalFunc,
  openVehicleRcModalFunc,
  closeVehicleRcModalFunc,
  openDrivingLicenceModalFunc,
  closeDrivingLicenceModalFunc,
} = captainModal.actions;

export default captainModal.reducer;
