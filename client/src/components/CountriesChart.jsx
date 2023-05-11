


import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import userData from "../data/data.json";

const CountriesChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const countries = userData.reduce((acc, user) => {
      if (user.country in acc) {
        acc[user.country] += 1;
      } else {
        acc[user.country] = 1;
      }
      return acc;
    }, {});

    setChartData({
      labels: Object.keys(countries),
      datasets: [
        {
          label: "Number of Users",
          data: Object.values(countries),
          backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <div>
      <h2>User Chart</h2>
      {Object.keys(chartData).length > 0 && (
        <div>
          <ul>
            {chartData.labels.map((country, index) => (
              <li key={index}>{country}: {chartData.datasets[0].data[index]}</li>
            ))}
          </ul>
          <Bar data={chartData} />
        </div>
      )}
    </div>
  );
};

export default CountriesChart;












