import React from "react";
import Typed from "react-typed";

export default function Middle() {
  return (
    <div
      className="text-white
    "
    >
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with Data Analytics
        </p>

        <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-2">
          Grow with Data
        </h1>

        <div className="mt-4 flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            Fast, Flexible, Styling For
          </p>
          <Typed
            className="pl-2 md:pl-4 text-gray-500 md:text-3xl sm:text-2xl text-xl font-bold "
            strings={["BTB", "DTC", "BTC", "SAAS"]}
            typeSpeed={120}
            backSpeed={150}
            loop
          />
        </div>

        <p className="md:text-3xl sm:2xl text-xl pt-4 px-2 font-bold  text-gray-500">
          Monitor Your Data analytics to increase revenue for BTB,BTC & SAAS
          Platforms.
        </p>

        <button className="my-6 bg-[#00df9a] text-[#000300] font-bold p-3 text-lg md:p-4 md:text-xl w-[150px] md:w-[200px] text-center rounded-xl mx-auto">Get Started</button>
      </div>
    </div>
  );
}
