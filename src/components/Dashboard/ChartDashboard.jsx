import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ["Book", "service", "review", "admin"],
  datasets: [
    {
      label: "# of Votes",
      data: [4, 9, 4, 1],
      backgroundColor: ["green", "#dd7a09", "#333333", "#dc3545"],

      borderWidth: 1,
    },
  ],
};
const ChartDashboard = () => {
  return (
    <div className="container" style={{ maxWidth: "450px", marginTop: "50px" }}>
      <Pie data={data} />
    </div>
  );
};

export default ChartDashboard;
