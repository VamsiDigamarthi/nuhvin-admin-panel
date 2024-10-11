import { useState } from "react";
import { API } from "../../../../Core/url";
import { useSelector } from "react-redux";

export const useCaptainHoldMultiHook = () => {
  const [detailsOpen, setDetailsOpen] = useState("");
  const { token } = useSelector((state) => state.token);
  const onWhichOpenDetails = (id) => {
    setDetailsOpen((prev) => (prev === id ? "" : id));
    // setDetailsOpen(id);
    // setOnCancelClickOpenTextarea(false); // close textarea when opening details
  };

  const onCaptainBlock = (id) => {
    API.patch(`/admin/holding-captain/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        alert(res?.data?.message);
      })
      .catch((e) => {
        console.log(e?.response);
        alert("An error occurred while processing your request.");
      });
  };

  return {
    detailsOpen,
    onWhichOpenDetails,
    onCaptainBlock,
  };
};
