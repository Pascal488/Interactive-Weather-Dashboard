import React from "react";
import test from "../../assets/images/Thunderstorm.png"
const weathercard = () => {
  return (
    <React.Fragment>
      <section className="bg-[#1E213A] lg:w-[200px] md:w-[200px] w-[160px] h-full p-5">
        <div className="flex flex-col justify-center items-center">
          <div>
            <p className="text-white">Tomorrow</p>
          </div>
          <div className="flex justify-center w-full">
            <img src={test} alt="" className="mb-5" />
          </div>
          <div className="flex justify-between w-full">
            <p className="text-white">16°C</p>
            <p className="text-gray-500">11°C</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default weathercard;
