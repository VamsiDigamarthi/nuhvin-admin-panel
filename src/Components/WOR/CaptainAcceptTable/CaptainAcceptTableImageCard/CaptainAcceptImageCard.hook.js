export const useCaptainAcceptImageCard = () => {
  const verificationData = [
    {
      title: "Pan/Aadhar - Card",
      description: "Check the captain PAN or AADHAR card verification",
      percentage: "20%",
      status: "Not-Verified",
    },
    {
      title: "Vehicle RC",
      description: "Check the captain Vehicle RC card verification",
      percentage: "20%",
      status: "Not-Verified",
    },
    {
      title: "Driver's License",
      description: "Check the captain Driver's License card verification",
      percentage: "20%",
      status: "Not-Verified",
    },
  ];
  return {
    verificationData,
  };
};
