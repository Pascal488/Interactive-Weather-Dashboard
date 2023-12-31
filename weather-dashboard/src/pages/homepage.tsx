import Searchpanel from "./searchpanel";
import WeatherContext from "../context/weather.context";
import useWeather from "../hooks/useWeather"
import { IconLoader } from "@tabler/icons-react";
import Celsiustoggle from "../components/ui/celsiustoggle";
import  { weatherConditionsIcons } from "../components/ui/weathercard";
import HightlightsCard from "../components/ui/hightlightcards"
import FiveDayForecastChart from "../components/charts/fivedayForecast"
import {  useEffect, useState } from "react";
import { getOrganizedNextDaysWeatherData } from "../services";
import Temperature from "../components/ui/temparature";
import { WeatherInfo } from "../types";


const homepage = () => {
  
   const {
     isMetric,
     weatherData,
     setWeatherData,
     setNextDaysWeatherData,
     locationRef,
     setIsMetric,
     isLoading,nextDaysWeatherData
   } = useWeather()
   const windSpeed = Math.round(weatherData?.wind?.speed || 0);
   const humidity = weatherData?.main?.humidity;
   const visibility = weatherData?.visibility;
   const pressure = weatherData?.main?.pressure;
    const [dayMeasurements, setDayMeasurements] = useState<Record<
    string,
    WeatherInfo
  > | null>(null);

  useEffect(() => {
    if (nextDaysWeatherData) {
      const organizedData =
        getOrganizedNextDaysWeatherData(nextDaysWeatherData);
      setDayMeasurements(organizedData);
    }
  }, [nextDaysWeatherData]);

 const formatDate = (date: Date): string => {
   const options: Intl.DateTimeFormatOptions = {
     weekday: "short",
     day: "2-digit",
     month: "short",
   };
   return new Intl.DateTimeFormat("en-US", options).format(date);
 };

   const windSpeedUnit = isMetric ? "m/s" : "mph";
  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        nextDaysWeatherData,
        setWeatherData,
        setNextDaysWeatherData,
        isMetric,
        locationRef,
      }}
    >
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-screen bg-gray-800">
          <IconLoader size={30} className="animate-spin mx-auto text-white" />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-16 xl:gap-16  h-screen bg-gray-900">
          <div className="lg:flex-1 lg:w-[20%]   ">
            <Searchpanel />
          </div>
          <div className="lg:w-[80%]  dark:bg-gray-900 h-full bg-indigo-800 lg:overflow-y-auto">
            <header className="flex justify-center">
              <div></div>
              <div className="flex space-x-4">
                <Celsiustoggle isMetric={isMetric} setIsMetric={setIsMetric} />
              </div>
            </header>
            <section className="lg:p-10 space-y-10 p-7 dark:bg-gray-900 bg-indigo-800">
              <main className="flex flex-col justify-center gap-4">
                {nextDaysWeatherData && (
                  <FiveDayForecastChart
                    nextDaysWeatherData={nextDaysWeatherData}
                  />
                )}
                <div className="grid grid-cols-2 lg:gap-x-6 lg:gap-y-8 md:grid-cols-3 lg:grid-cols-5 md:gap-6 gap-5">
                  {dayMeasurements &&
                    Object.entries(dayMeasurements).map(([date, info]) => {
                      const formattedDate = formatDate(new Date(date));
                      return (
                        <div
                          key={date}
                          className="relative dark:bg-[#1E213A] lg:w-[200px] md:w-[200px] w-[160px] h-[290px] p-5 bg-blue-600"
                        >
                          <div className="flex flex-col justify-center items-center">
                            <div>
                              <p className="dark:text-white text-slate-100">
                                {formattedDate}
                              </p>
                            </div>
                            <div className="flex justify-center w-full">
                              <img
                                src={weatherConditionsIcons[info.icon][0]}
                                alt=""
                                className="mb-5"
                              />
                            </div>
                            <div className="flex justify-between w-full absolute bottom-4 p-3">
                              <p className="text-white">{info.weather}</p>
                              <p className="dark:text-gray-500 text-white">
                                <Temperature value={info.temps[0]} />
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <section className="">
                  <h1 className="text-2xl text-white font-bold">
                    Today’s Highlights
                  </h1>
                  <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
                    <HightlightsCard
                      title={"WindStatus"}
                      value={{
                        unit: windSpeedUnit,
                        value: windSpeed,
                      }}
                    />
                    <HightlightsCard
                      title={"Humidity"}
                      value={{
                        unit: "%",
                        value: humidity,
                      }}
                    />
                    <HightlightsCard
                      title={"Visibility"}
                      value={{
                        unit: "m",
                        value: visibility,
                      }}
                    />
                    <HightlightsCard
                      title={"Air Pressure"}
                      value={{
                        unit: "hPa",
                        value: pressure,
                      }}
                    />
                  </div>
                </section>
              </main>
            </section>
          </div>
        </div>
      )}
    </WeatherContext.Provider>
  );
};

export default homepage


