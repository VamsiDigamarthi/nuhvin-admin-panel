import React from "react";
import "./CaptainAccept.css";
import CaptainAcceptTable from "../../../Components/WOR/CaptainAcceptTable/CaptainAcceptTable";

import ModalTemplate from "../../../Modals/ModalTemplate/ModalTemplate";
import { useCaptainAccept } from "./CaptainAccept.hook";
import PanCheck from "../../../Modals/WOR/PanCheck/PanCheck";

const CaptainAccept = ({ userOrCaptainTitle, userRole }) => {
  const { dispatch, openAdhaPanModal, openContent, closeAdharModalFunc } =
    useCaptainAccept();

  return (
    <>
      <div className="captain-accept-card">
        <div className="captaine-accept-top-card">
          <h2>{userOrCaptainTitle} Details</h2>
        </div>
        <div className="captaine-accept-table-main">
          <CaptainAcceptTable userRole={userRole} />
        </div>
      </div>
      {openAdhaPanModal && (
        <ModalTemplate
          title={openContent}
          onClose={() => dispatch(closeAdharModalFunc())}
        >
          <PanCheck userRole={userRole} />
        </ModalTemplate>
      )}
    </>
  );
};

export default CaptainAccept;

// {
//   /* {React.createElement(modalComponents[modalType].component)} */
// }
