import { createSlice } from "@reduxjs/toolkit";

const captainModal = createSlice({
  name: "captain",
  initialState: {
    openAdhaPanModal: false, // To control modal visibility
    openContent: "",
    whatDisplayDocs: "",
    captain: {}, // To control modal visibility
  },
  reducers: {
    openAdharModalFunc: (state, action) => {
      state.openAdhaPanModal = true;
      state.openContent = action.payload?.title;
      state.whatDisplayDocs = action.payload?.whatDisplayDocs; // To control modal visibility
      state.captain = action.payload?.captain;
    },
    closeAdharModalFunc: (state) => {
      state.openAdhaPanModal = false; // Close the modal
    },
  },
});

export const {
  openAdharModalFunc, //
  closeAdharModalFunc, //
} = captainModal.actions;

export default captainModal.reducer;
