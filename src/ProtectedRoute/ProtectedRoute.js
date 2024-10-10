// src/components/ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../Redux/features/ProfileSlice";
import Loader from "../utils/Loader/Loader";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const tokenFromStorage = localStorage.getItem("token");
  const { loading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    if (tokenFromStorage) {
      const token = JSON.parse(tokenFromStorage);
      dispatch(fetchUserProfile(token)); // Call profile API with token
    }
  }, [dispatch, tokenFromStorage]);

  if (loading) {
    // Show a loading indicator while fetching the profile
    return <Loader />;
  }

  if (!tokenFromStorage || error) {
    // If no token or profile API failed, redirect to login
    return <Navigate to="/login" />;
  }

  // If profile API is successful, allow access to the protected route
  return <Outlet />;
};

export default ProtectedRoute;
