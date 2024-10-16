import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../../Core/url";

const initialState = {
  loading: false,
  captainDetailsRe: [],
  error: "",
};

export const adminCaptainDetails = createAsyncThunk(
  "admin/captaindetails",
  async ({ token, userRole }, { rejectWithValue }) => {
    try {
      const response = await API.get(`/admin/captains/${userRole}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token here
        },
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

const tokenSlice = createSlice({
  name: "token",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(adminCaptainDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminCaptainDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.captainDetailsRe = action.payload;
        state.error = "";
      })
      .addCase(adminCaptainDetails.rejected, (state, action) => {
        state.loading = false;
        state.captainDetailsRe = [];
        state.error = action.payload || action.error.message;
      });
  },
});

export default tokenSlice.reducer;
