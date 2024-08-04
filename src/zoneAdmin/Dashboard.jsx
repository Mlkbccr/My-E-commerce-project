import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ArrowUp, ArrowDown } from "lucide-react";

const Dashboard = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 80],
    },
  ]);
  return (
    <div>
      <div className=" flex gap-4 justify-around  my-12 ">
        <div className="bg-white p-4 flex flex-col justify-center items-center gap-2 shadow rounded-sm">
          <span className="text-xl font-medium">Ventes Hebdomadaires</span>
          <span className="text-xl font-medium text-green-600 flex gap-1 ">
            <ArrowUp /> 1,500.000 USD
          </span>
        </div>

        <div className="bg-white p-4 flex flex-col justify-center items-center gap-2 shadow rounded-sm">
          <span className="text-xl font-medium">Ventes Mensuelles</span>
          <span className="text-xl font-medium text-green-600 flex gap-1 ">
            <ArrowUp /> 8,500.000 USD
          </span>
        </div>

        <div className="bg-white p-4 flex flex-col justify-center items-center gap-2 shadow rounded-sm">
          <span className="text-xl font-medium">Ventes Annuelles</span>
          <span className="text-xl font-medium text-red-600 flex gap-1 ">
            <ArrowDown /> 92,500.000 USD
          </span>
        </div>

        <div className="bg-white p-4 flex flex-col justify-center items-center gap-2 shadow rounded-sm">
          <span className="text-xl font-medium">Chiffre d'affaire Annuel</span>
          <span className="text-xl font-medium text-green-600 flex gap-1 ">
            <ArrowUp /> 120,500.000 USD
          </span>
        </div>
      </div>

      <div className="flex justify-around ">
        <Chart options={options} series={series} type="bar" width="600" />
        <Chart options={options} series={series} type="line" width="600" />
      </div>
    </div>
  );
};
export default Dashboard;
