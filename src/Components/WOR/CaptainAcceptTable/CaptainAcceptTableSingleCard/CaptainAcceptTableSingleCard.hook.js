import { useState } from "react";

export const useCaptainAcceptTableSingleCard = () => {
  // store which details are open
  const [detailsOpen, setDetailsOpen] = useState("");

  const [onCancelClickOpenTextarea, setOnCancelClickOpenTextarea] =
    useState(false);

  const onCancelClick = () => {
    setOnCancelClickOpenTextarea(!onCancelClickOpenTextarea);
  };

  // change which details are open
  const onWhichOpenDetails = (id) => {
    setDetailsOpen((prev) => (prev === id ? "" : id));
    // setDetailsOpen(id);
    setOnCancelClickOpenTextarea(false); // close textarea when opening details
  };

  return {
    onCancelClickOpenTextarea,
    onCancelClick,
    onWhichOpenDetails, // this function which details are open
    detailsOpen, // return which details are open for editing or viewing
  };
};
