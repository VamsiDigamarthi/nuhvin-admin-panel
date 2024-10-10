import React from "react";
import "./Loader.css";
// import { Oval } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="loader">
      {/* <Oval color="#00BFFF" height={30} width={30} /> */}
      <img src="/svg/Spinner@1x-1.0s-200px-200px.svg" alt="loader" />
    </div>
  );
};

export default Loader;
