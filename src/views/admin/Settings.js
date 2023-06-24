import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
// import CardProfile from "components/Cards/CardProfile.js";
import CardBarChart from "components/Cards/CardBarChart.js";

export default function Settings() {
  return (
    <>
      {/* <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div> */}
      <div className="justify-content:center">
          <div className="w-full xl:w-12/12 px-4">
            <CardBarChart />
          </div>
      </div>
    </>
  );
}
