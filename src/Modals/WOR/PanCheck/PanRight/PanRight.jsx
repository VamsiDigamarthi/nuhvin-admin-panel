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
    status,
    fatherName,
    name,
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
          {renderDetail("Status", status)}
        </div>
      )}
    </div>
  );
};

export default PanRight;
