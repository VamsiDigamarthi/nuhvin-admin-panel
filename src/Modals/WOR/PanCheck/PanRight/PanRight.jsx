import React from "react";
import "./PanRight.css";
import PanDatNotFound from "../PanDataNotFound/PanDatNotFound";

// Reusable component for each detail field
const PanDetailItem = ({ label, value }) => {
  let changeColor = value?.toLowerCase() === "male" && "an-right-change-red";
  return (
    <h2
      style={{
        color: changeColor && "red",
      }}
    >
      <span>{label}: </span> {value}
    </h2>
  );
};

const PanRight = ({ panCardDetails }) => {
  const {
    pan,
    firstName,
    middleName,
    lastName,
    gender,
    dob,
    // status,
    fatherName,
    name,
    rc_body_type_desc,
    rc_eng_no,
    rc_maker_desc,
    rc_maker_model,
    rc_manu_month_yr,
    rc_mobile_no,
    rc_owner_name,
    rc_owner_sr,
    rc_permanent_address,
    rc_present_address,
    rc_registered_at,
    rc_regn_no,
    issueDate,
    fatherOrHusband,
    bloodGroup,
    dlNumber,
  } = panCardDetails || {};
  // Helper function to render the PAN detail fields
  const renderDetail = (label, value) => {
    return value ? <PanDetailItem label={label} value={value} /> : null;
  };

  return (
    <div className="pan-right">
      {panCardDetails === null ? (
        <div className="pan-right-first">
          <PanDatNotFound
            title="Perfios Data Not Found"
            reverseOrder={true}
            color="#e8f593"
            rotate="-180deg"
          />
        </div>
      ) : (
        <div>
          {renderDetail("Name", name)} {/* Aadhar card details */}
          {renderDetail("Father Name", fatherName)} {/* Aadhar card details */}
          {renderDetail("PAN No", pan)}
          {renderDetail("First Name", firstName)}
          {renderDetail("Middle Name", middleName)}
          {renderDetail("Last Name", lastName)}
          {renderDetail("Gender", gender)}
          {renderDetail("Date of Birth", dob)}
          {/* {renderDetail("Status", status)} */}
          {/* RC Card Details */}
          {renderDetail("RC Body Type Description", rc_body_type_desc)}
          {renderDetail("RC Engine Number", rc_eng_no)}
          {renderDetail("RC Maker Description", rc_maker_desc)}
          {renderDetail("RC Maker Model", rc_maker_model)}
          {renderDetail("RC Manufacture Month/Year", rc_manu_month_yr)}
          {renderDetail("RC Mobile Number", rc_mobile_no)}
          {renderDetail("RC Owner Name", rc_owner_name)}
          {renderDetail("RC Owner Series", rc_owner_sr)}
          {renderDetail("RC Permanent Address", rc_permanent_address)}
          {renderDetail("RC Present Address", rc_present_address)}
          {renderDetail("RC Registered At", rc_registered_at)}
          {renderDetail("RC Registration Number", rc_regn_no)}
          {/* License Card Details */}
          {renderDetail("Issue Date", issueDate)}
          {renderDetail("Father/Husband", fatherOrHusband)}
          {renderDetail("Blood Group", bloodGroup)}
          {renderDetail("Driving License Number", dlNumber)}
        </div>
      )}
    </div>
  );
};

export default PanRight;
