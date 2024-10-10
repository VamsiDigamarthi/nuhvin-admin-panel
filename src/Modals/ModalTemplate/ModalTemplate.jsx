import React from "react";
import "./ModalTemplate.css";
import { RxCross2 } from "react-icons/rx";
const ModalTemplate = ({ title, onClose, children }) => {
  return (
    <div className="modal-template">
      <div className="modal-template-inner">
        <div className="modal-templet-inner-cross">
          <h2>{title}</h2>
          <RxCross2 size={25} onClick={onClose} />
        </div>
        <div className="modal-template-main">{children}</div>
      </div>
    </div>
  );
};

export default ModalTemplate;
