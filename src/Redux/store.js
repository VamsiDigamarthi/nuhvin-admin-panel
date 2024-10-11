import { configureStore } from "@reduxjs/toolkit";
import token from "./features/LoginSlice";
import Profile from "./features/ProfileSlice";
import captains from "./features/WOR/CaptainDetails.redux";
import captainModal from "./features/WOR/ModalOpenSlice";
import captainReviews from "./features/WOR/CaptainReview";
import orderReviews from "./features/WOR/ReviewsSlice";
const store = configureStore({
  reducer: {
    token: token,
    profile: Profile,
    captains: captains,
    captainModal: captainModal, // just state value like true or false for open modal
    captainReviews: captainReviews,
    orderReviews: orderReviews,
  },
});

export default store;
