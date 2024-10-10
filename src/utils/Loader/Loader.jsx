import React from "react";
import "./Loader.css";
import { Oval } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="loader">
      <Oval color="#00BFFF" height={30} width={30} />
    </div>
  );
};

export default Loader;
