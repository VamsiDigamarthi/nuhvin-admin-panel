import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../../Core/url";

const initialState = {
  loading: false,
  rorderReviews: [],
  error: "",
};

export const adminOrderReviews = createAsyncThunk(
  "admin/reviws",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await API.get(`/admin/all-reviews`, {
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
      .addCase(adminOrderReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminOrderReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.rorderReviews = action.payload;
        state.error = "";
      })
      .addCase(adminOrderReviews.rejected, (state, action) => {
        state.loading = false;
        state.rorderReviews = [];
        state.error = action.payload || action.error.message;
      });
  },
});

export default tokenSlice.reducer;
