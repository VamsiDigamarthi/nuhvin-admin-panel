// src/Redux/features/profileSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../Core/url";

// Thunk to call profile API
export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async (token, { rejectWithValue }) => {
    try {
      const response = await API.get("/admin/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data; // Return profile data if successful
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    profile: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload; // Store profile data
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.profile = null;
        state.error = action.payload; // Store error if failed
      });
  },
});

export default profileSlice.reducer;
