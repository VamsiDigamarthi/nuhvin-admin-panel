import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../../Core/url";

const initialState = {
  loading: false,
  captainReviws: [],
  error: "",
};

export const adminCaptainReviews = createAsyncThunk(
  "admin/captainreviews",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await API.get(`/admin/captain-review`, {
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
      .addCase(adminCaptainReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminCaptainReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.captainReviws = action.payload;
        state.error = "";
      })
      .addCase(adminCaptainReviews.rejected, (state, action) => {
        state.loading = false;
        state.captainReviws = [];
        state.error = action.payload || action.error.message;
      });
  },
});

export default tokenSlice.reducer;
