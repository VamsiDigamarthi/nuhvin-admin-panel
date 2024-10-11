import React from "react";
import "./CaptainAceptTableImageCard.css";
import { FaCaretDown } from "react-icons/fa";
import CaptainImageDisplay from "../CaptainAcceptTableSingleCard/CaptainImageDisplay/CaptainImageDisplay";
import { useDispatch } from "react-redux";
import { openAdharModalFunc } from "../../../../Redux/features/WOR/ModalOpenSlice";
import { useCaptainAcceptImageCard } from "./CaptainAcceptImageCard.hook";

const CaptainAcceptImageCard = ({ captain, userRole }) => {
  const dispatch = useDispatch();
  const { verificationData } = useCaptainAcceptImageCard();
  console.log("iuytreddfghj", captain);
  return (
    <div className="captain-accept-image-card">
      <CaptainImageDisplay captain={captain} />
      <div className="captain-accept-image-second-card">
        <div className="captain-accept-image-second-f-card">
          <div className="captain-accept-image-second-f-f">
            <span className="captain-accept-image-percentage-span">
              {userRole === "captain"
                ? captain?.panAadharCardVerified
                  ? "30%"
                  : "0%"
                : captain?.panAadharCardVerified
                ? "100%"
                : "0%"}
            </span>
            <FaCaretDown
              onClick={() =>
                dispatch(
                  openAdharModalFunc({
                    title: "Pan Aadhar Card Verification",
                    captain: captain,
                    whatDisplayDocs: "pan-aadhar",
                  })
                )
              }
              color="gold"
              size={25}
            />
            <div>
              <span>Not-Verified</span>
            </div>
          </div>
          {userRole === "captain" && (
            <>
              <div className="captain-accept-image-second-f-s">
                <span className="captain-accept-image-percentage-span">
                  {captain?.rcCardVerified ? "30%" : "0%"}
                </span>
                <FaCaretDown
                  onClick={() =>
                    dispatch(
                      openAdharModalFunc({
                        title: "Vehicle Rc Verification",
                        captain: captain,
                        whatDisplayDocs: "rc",
                      })
                    )
                  }
                  color="gold"
                  size={25}
                />
                <div>
                  <span>Not-Verified</span>
                </div>
              </div>

              <div className="captain-accept-image-second-ff-t">
                <span className="captain-accept-image-percentage-span">
                  {captain?.licenseCardVerified ? "40%" : "0%"}
                </span>
                <FaCaretDown
                  onClick={() =>
                    dispatch(
                      openAdharModalFunc({
                        title: "Driving Licence Verification",
                        captain: captain,
                        whatDisplayDocs: "licence",
                      })
                    )
                  }
                  color="gold"
                  size={25}
                />
                <div>
                  <span>Not-Verified</span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="captain-accept-image-second-center">
          {verificationData
            .filter(
              (data) =>
                userRole === "captain" || data.title === "Pan/Aadhar - Card"
            )
            .map((eachData) => (
              <div key={eachData.title}>
                <h2>{eachData.title}</h2>
                <span>{eachData.description}</span>
              </div>
            ))}
          {/* <Chart options={options} series={update} type="pie" width="100%" /> */}
        </div>
        <div className="captain-accept-image-second-f-card">
          <div className="captain-accept-image-second-f-t">
            <div>
              <span>Not-Verified</span>
            </div>
            <span className="captain-accept-image-percentage-span">
              {" "}
              {captain?.panAadharCardVerified ? "30%" : "0%"}
            </span>
            <FaCaretDown
              onClick={() =>
                dispatch(
                  openAdharModalFunc({
                    title: "Pan Aadhar Card Verification",
                    captain: captain,
                    whatDisplayDocs: "pan/aadhar",
                  })
                )
              }
              color="gold"
              size={25}
            />
          </div>
          {userRole === "captain" && (
            <>
              <div className="captain-accept-image-second-t-s">
                <div>
                  <span>Not-Verified</span>
                </div>
                <span className="captain-accept-image-percentage-span">
                  {captain?.rcCardVerified ? "30%" : "0%"}
                </span>
                <FaCaretDown
                  onClick={() =>
                    dispatch(
                      openAdharModalFunc({
                        title: "Vehicle Rc Verification",
                        captain: captain,
                        whatDisplayDocs: "rc",
                      })
                    )
                  }
                  color="gold"
                  size={25}
                />
              </div>
              <div className="captain-accept-image-second-ff-tt">
                <div>
                  <span>Not-Verified</span>
                </div>
                <span className="captain-accept-image-percentage-span">
                  {captain?.licenseCardVerified ? "40%" : "0%"}
                </span>
                <FaCaretDown
                  onClick={() =>
                    dispatch(
                      openAdharModalFunc({
                        title: "Driving Licence Verification",
                        captain: captain,
                        whatDisplayDocs: "licence",
                      })
                    )
                  }
                  color="gold"
                  size={25}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaptainAcceptImageCard;
