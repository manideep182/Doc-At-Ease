import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
// import CardLineChart1 from "components/Cards/CardLineChart1.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
// import CardLineChart1 from "components/Cards/CardLineChart1";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap ml-4">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
         <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardBarChart/>
        </div> 
      </div>
      {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
    </>
  );
}
