import React from "react";
import Searchpanel from "./searchpanel";
import Mainpanel from "./mainpanel";

const homepage = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-16  h-screen">
        <div className="lg:flex-1 lg:w-[20%]   ">
          <Searchpanel />
        </div>
        <div className="lg:w-[80%]  bg-gray-900 h-full">
           <Mainpanel/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default homepage;
