import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Astronauts in Space"
                  statTitle="13"
                  // statArrow="up"
                  // statPercent="3.48"
                  // statPercentColor="text-emerald-500"
                  // statDescripiron="Since last month"
                  statIconName="fa fa-rocket"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Number of Astronauts"
                  statTitle="357"
                //   statArrow="down"
                //   statPercent="3.48"
                //   statPercentColor="text-red-500"
                // statDescripiron="Since last week"
                  statIconName="fas fa-users"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Satellites Launched"
                  statTitle="6542"
              //     statArrow="down"
              //     statPercent="1.10"
              //     statPercentColor="text-orange-500"
              // statDescripiron="Since yesterday"
                  statIconName="fas fa-chart-bar"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Active Satellites in Space"
                  statTitle="4852"
            //       statArrow="up"
            //       statPercent="12"
            //       statPercentColor="text-emerald-500"
            // statDescripiron="Since last month"
                  statIconName="fas fa-satellite"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
