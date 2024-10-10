import { configureStore } from "@reduxjs/toolkit";
import token from "./features/LoginSlice";
import Profile from "./features/ProfileSlice";
import captains from "./features/WOR/CaptainDetails.redux";
import captainModal from "./features/WOR/ModalOpenSlice";
const store = configureStore({
  reducer: {
    token: token,
    profile: Profile,
    captains: captains,
    captainModal: captainModal, // just state value like true or false for open modal
  },
});

export default store;
