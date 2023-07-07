import React from "react";
import Laptop from "./laptop.jpg";

export default function Bottom() {
  return (
    <div className="bg-white w-full py-10 px-4">
      <div className="max-w-[1240px] grid mx-auto md:grid-cols-2 text-[#000300]">
        <img src={Laptop} alt="" className="w-[450px] mx-auto" />
        <div className="mx-auto flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold p-2 md:text-2xl text-xl ">DATA ANALYTICS DASHBOARD</p>

          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold px-2">Manage Data Analytics</h1>

          <p className="font-medium px-2 mt-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            facere nihil dicta tenetur! Hic iusto iure soluta ipsum nemo sit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, nihil.
          </p>
          <button className="my-6 text-[#00df9a] bg-[#000300] font-bold p-3 text-lg  md:text-xl w-[150px] md:w-[200px] text-center rounded-xl mx-auto md:mx-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
