import { useEffect, useState } from "react";
import { API } from "../../../../../Core/url";
import { useDispatch, useSelector } from "react-redux";
import { adminCaptainDetails } from "../../../../../Redux/features/WOR/CaptainDetails.redux";

export const useCaptainAcceptRejectedHook = ({
  captain,
  storeUnVerifiedDetails,
  userRole,
}) => {
  const { token } = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const options = {
    labels: ["Assign", "Not Assign"],
    colors: ["#f24ea1", "#e8f593"],
    plotOptions: {
      pie: {
        donut: {
          size: "65%", // Controls the thickness of the donut (smaller % makes it thicker)
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: (w) => {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#000"], // Label text color
      },
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      show: false,
      position: "bottom", // Display the labels at the bottom
    },
  };

  const [update, setUpdate] = useState([30, 70]);

  //   useEffect(() => {
  //     const newUpdate = [...update];
  //     if (captain?.panAadharCardVerified) {
  //       newUpdate[0] += 30;
  //     }
  //     if (captain?.rcCardVerified) {
  //       newUpdate[1] += 30;
  //     }
  //     setUpdate(newUpdate);
  //   }, [captain, update]);
  //   console.log(update);

  const onCaptainVerified = () => {
    API.patch(`/admin/captain-verified/${captain?._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        alert(res?.data?.message);
        dispatch(adminCaptainDetails({ token, userRole })); // fetch all captaine
      })
      .catch((e) => {
        console.log(e);
        alert(e?.response?.data?.message);
      });
  };

  //   un verofoed

  const onCaptainUnVerified = () => {
    API.patch(
      `/admin/captain-unverified/${captain?._id}`,
      { storeUnVerifiedDetails },
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
      })
      .catch((e) => {
        console.log(e);
        alert(e?.response?.data?.message);
      });
  };

  /*
    display cursor based on the condition first check if role is user or not
    if user check only one condition like pan or ardhan is verified or not
    if role is captain check pan nd rc and licence is verified or not if not verified final verification btn 
    not aloowed
  */
  const isButtonDisabled =
    userRole === "user"
      ? !captain?.panAadharCardVerified
      : !captain?.panAadharCardVerified ||
        !captain?.rcCardVerified ||
        !captain?.licenseCardVerified;

  return {
    options,
    update,
    onCaptainVerified,
    onCaptainUnVerified,
    isButtonDisabled, // hold verification btn
  };
};
