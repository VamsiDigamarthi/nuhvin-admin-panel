import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../Core/url";

const initialState = {
  loading: false,
  token: null,
  error: "",
};

export const userLogin = createAsyncThunk(
  "admin/login",
  async ({ email, password, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.post("/admin/login", {
        email, // Passing the username
        password, // Passing the password
      });
      navigate("/");
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
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload?.token;
        state.error = "";
        localStorage.setItem("token", JSON.stringify(action?.payload?.token));
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.token = [];
        state.error = action.payload || action.error.message;
      });
  },
});

export default tokenSlice.reducer;
