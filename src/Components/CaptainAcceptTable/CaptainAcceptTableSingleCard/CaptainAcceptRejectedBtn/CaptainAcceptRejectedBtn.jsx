import React from "react";
import "./CaptainAcceptRejectedBtn.css";
import Chart from "react-apexcharts";
const CaptainAcceptRejectedBtn = ({
  onCancelClickOpenTextarea,
  onCancelClick,
}) => {
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

  const update = [30, 70];

  return (
    <div className="captain-accept-table-btn-text-card">
      <div className="captaine-accept-table-single-confirm-btn">
        <button className="verified-btn">Verified</button>
        <Chart options={options} series={update} type="donut" width="100%" />

        <button onClick={onCancelClick}>
          {onCancelClickOpenTextarea ? "Submit" : "Cancel"}
        </button>
      </div>
    </div>
  );
};

export default CaptainAcceptRejectedBtn;
