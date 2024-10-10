import React from "react";
import "./CaptainAccept.css";
import CaptainAcceptTable from "../../../Components/WOR/CaptainAcceptTable/CaptainAcceptTable";

import ModalTemplate from "../../../Modals/ModalTemplate/ModalTemplate";
import { useCaptainAccept } from "./CaptainAccept.hook";
import PanCheck from "../../../Modals/WOR/PanCheck/PanCheck";

const CaptainAccept = () => {
  const { dispatch, modalComponents, modals } = useCaptainAccept();

  return (
    <>
      <div className="captain-accept-card">
        <div className="captaine-accept-top-card">
          <h2>Captain Details</h2>
        </div>
        <div className="captaine-accept-table-main">
          <CaptainAcceptTable />
        </div>
      </div>
      {modals.map(
        ({ isOpen, content, modalType }) =>
          isOpen && (
            <ModalTemplate
              key={modalType}
              title={content}
              onClose={() => dispatch(modalComponents[modalType].closeFunc())}
            >
              {/* <PanCheck /> */}
              {React.createElement(modalComponents[modalType].component)}
            </ModalTemplate>
          )
      )}
    </>
  );
};

export default CaptainAccept;
