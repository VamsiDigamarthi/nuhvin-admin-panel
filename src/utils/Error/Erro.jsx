import React from "react";
import "./Error.css";
const Erro = ({ error }) => {
  return (
    <div className="error">
      <h2>{error}</h2>
    </div>
  );
};

export default Erro;
