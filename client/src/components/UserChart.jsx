// import React, { useState, useEffect, useRef } from "react";
// import { Bar } from "react-chartjs-2";
// import userData from "../data/data.json";

// import Chart from "chart.js/auto";

// const UserChart = () => {
//   const [chartData, setChartData] = useState({});
//   const canvasRef = useRef(null);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const filteredData = userData.filter((user) => {
//       const birthYear = parseInt(user.dob.slice(-4));
//       const age = new Date().getFullYear() - birthYear;
//       return age > 30;
//     });

//     const genders = filteredData.map((user) => user.gender);
//     const genderCounts = {};
//     genders.forEach((gender) => {
//       genderCounts[gender] = (genderCounts[gender] || 0) + 1;
//     });

//     setChartData({
//       labels: Object.keys(genderCounts),
//       datasets: [
//         {
//           label: "User Gender",
//           data: Object.values(genderCounts),
//           backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
//           borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
//           borderWidth: 1,
//         },
//       ],
//     });

//     if (chartRef.current) {
//       chartRef.current.destroy();
//     }

//     const chart = new Chart(canvasRef.current, {
//       type: "bar",
//       data: chartData,
//     });

//     chartRef.current = chart;
//   }, []);

//   return (
//     <div>
//       <h2>User Chart</h2>

//         <canvas ref={canvasRef}></canvas>

//     </div>
//   );
// };

// export default UserChart;
import React, { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import userData from "../data/data.json";

import Chart from "chart.js/auto";

const UserChart = () => {
  const [chartData, setChartData] = useState({});
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const filteredData = userData.filter((user) => {
      const birthYear = parseInt(user.dob.slice(-4));
      const age = new Date().getFullYear() - birthYear;
      return age > 30;
    });

    const genders = filteredData.map((user) => user.gender);
    const genderCounts = {};
    genders.forEach((gender) => {
      genderCounts[gender] = (genderCounts[gender] || 0) + 1;
    });

    setChartData({
      labels: Object.keys(genderCounts),
      datasets: [
        {
          label: "User Gender",
          data: Object.values(genderCounts),
          backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    });

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: chartData, // use the updated chartData variable here
    });

    chartRef.current = chart;
  }, []);

  return (
    <div>
      <h2>User Chart</h2>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default UserChart;

