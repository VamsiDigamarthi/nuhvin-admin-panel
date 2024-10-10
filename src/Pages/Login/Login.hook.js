import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Redux/features/LoginSlice";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.token);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({ ...user, navigate }));
  };

  return {
    onChangeUser,
    user,
    onLoginSubmit,
    togglePasswordVisibility,
    showPassword,
    loading,
    error,
  };
};
