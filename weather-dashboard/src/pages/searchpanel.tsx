import React from "react";
import background from "../assets/images/Cloud-background.png";
import test from "../assets/images/LightCloud.png";
import { IconCurrentLocation, IconMapPinFilled } from "@tabler/icons-react";
import { Popover } from "@headlessui/react";
import Searcher from "../components/ui/searcher";
const searchpanel = () => {
  return (
    <React.Fragment>
      <Popover className="relative">
        <section className="dark:bg-gray-800 h-screen relative overflow-hidden z-0 lg:min-w-[400px] ">
          <img
            src={background}
            alt=""
            className="absolute -left-32 top-16 lg:top-28 opacity-10 min-w-[160%] -z-10"
          />
          <div className=" flex flex-col">
            <div className="flex justify-between w-full p-5">
              <Popover.Button className="bg-gray-500 py-1.5 px-2 text-white outline-none">
                Seach for places
              </Popover.Button>
              <div className="flex space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-500 flex justify-center items-center">
                  <IconCurrentLocation className="text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-500 flex justify-center items-center">
                  <IconCurrentLocation className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-10 lg:h-screen md:h-screen">
              <div>
                <img src={test} alt="" className="w-full" />
              </div>
              <div className="flex flex-col gap-5 text-white">
                <div>
                  <p className="text-[5rem] lg:text-[9rem] md:text-[9rem]">
                    15℃
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[3rem]">Shower</p>
                </div>
                <div className="text-center">
                  <p className="text-[2rem]">Shower</p>
                </div>
                <div className="text-center flex justify-center items-center space-x-3">
                  <IconMapPinFilled size={32} />
                  <p className="text-[2rem] ">Shower</p>
                </div>
              </div>
            </div>
            <Popover.Panel className="absolute  z-40 h-screen w-[400px] md:w-full">
              <div className="h-screen bg-[#1E213A]">
                    <Searcher />
              </div>
            </Popover.Panel>
          </div>
        </section>
      </Popover>
    </React.Fragment>
  );
};

export default searchpanel;
