import { IconCurrentLocation } from "@tabler/icons-react";
import React from "react";
import Weathercard from "../components/ui/weathercard";
import {
  HumiditystatusCard,
  WindstatusCard,
  VisibilitystatusCard,
  AirPressureCard,
} from "../components/ui/hightlightcards";

const mainpanel = () => (
  <React.Fragment>
    <section className="lg:p-10 space-y-10 p-7 bg-gray-900">
      <header className="flex justify-between">
        <div></div>
        <div className="flex space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-500 flex justify-center items-center">
            <IconCurrentLocation className="text-white" />
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-500 flex justify-center items-center">
            <IconCurrentLocation className="text-white" />
          </div>
        </div>
      </header>
      <main className="flex flex-col justify-center gap-4">
        {/* <div className="lg:flex lg:justify-between lg:w-full gap-2  md:flex-wrap flex flex-wrap ">
          <HourlytemperatureChart />
          <TemperatureChart />
        </div> */}
        <div className="grid grid-cols-2 lg:gap-x-6  lg:gap-y-8 md:grid-cols-3 lg:grid-cols-5 md:gap-6 gap-5">
          <Weathercard />
          <Weathercard />
          <Weathercard />
          <Weathercard />
          <Weathercard />
        </div>
        <section className="">
          <h1 className="text-2xl text-white font-bold">Today’s Hightlights</h1>
          <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
            <HumiditystatusCard />
            <WindstatusCard />
            <AirPressureCard />
            <VisibilitystatusCard />
          </div>
        </section>
      </main>
    </section>
  </React.Fragment>
);

export default mainpanel;
