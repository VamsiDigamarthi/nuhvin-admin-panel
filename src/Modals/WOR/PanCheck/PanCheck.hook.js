import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../Core/url";
import { closeAdharModalFunc } from "../../../Redux/features/WOR/ModalOpenSlice";
import { adminCaptainDetails } from "../../../Redux/features/WOR/CaptainDetails.redux";

export const usePanCheckHook = () => {
  const dispatch = useDispatch();

  const { captain, whatDisplayDocs } = useSelector(
    (state) => state.captainModal
  );
  const { token } = useSelector((state) => state.token);
  const [whatDisplayDocument, setWhatDisplayDocument] = useState(null);
  const [whatDisplayImage, setWhatDisplayImage] = useState(null);
  const [whatDisplayContent, setWhatDisplayContent] = useState(null);

  useEffect(() => {
    if (whatDisplayDocs === "pan-aadhar") {
      if (captain?.pan) {
        setWhatDisplayImage(captain?.pan); // Set the PAN image
        setWhatDisplayContent(captain?.panCardDetails);
      } else if (captain?.adhar) {
        // Fallback to Aadhar if PAN is not available
        setWhatDisplayImage(captain?.adhar); // Set the Aadhar image
        setWhatDisplayContent(captain?.aadharCardDetails);
      } else {
        // Neither PAN nor Aadhar is available
        setWhatDisplayDocument("PAN/Aadhar Card Details Not Available");
        setWhatDisplayImage(null); // No image available
        setWhatDisplayContent(null);
      }
    } else if (whatDisplayDocs === "rc") {
      setWhatDisplayDocument("RC Card Details Not Available");
      setWhatDisplayImage(captain?.rc);
      setWhatDisplayContent(captain?.rcCardDetails);
    } else {
      setWhatDisplayDocument("Licence Card Details Not Available");
      setWhatDisplayImage(captain?.license);
      setWhatDisplayContent(captain?.licenseCardDetails);
    }
  }, [captain, whatDisplayDocs]);

  // on Pan/aadharVerification

  const onPanOrAadharVerificationFun = () => {
    API.patch(
      `/admin/new-pan-verified/${captain?._id}/context/${whatDisplayDocs}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        console.log(res.data);
        alert(res?.data?.message);
        dispatch(adminCaptainDetails({ token })); // fetch all captaine
        dispatch(closeAdharModalFunc()); // close the modal
      })
      .catch((e) => {
        console.log(e);
        alert(e?.response?.data?.message);
      });
  };

  return {
    whatDisplayImage,
    whatDisplayDocument,
    whatDisplayContent,
    onPanOrAadharVerificationFun,
  };
};
