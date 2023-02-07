import React from "react";
import Wrapper from "./Wrapper";
import Polygon from "./imgs/Polygon.png";

const SubHero = () => {
  return (
    <Wrapper>
      <div className="flex flex-col  w-full md:w-1/2 my-4">
        <p className="text-gray-300">Current Balance</p>
        <div className="flex items-center">
          <div>
            <p className="md:text-6xl text-5xl font-bold text-white">
              $3,742.15
            </p>
          </div>
          <div className="flex mx-4 bg_indicator px-1 py-1 rounded-sm text-green-500 items-center gap-1 ">
            <div>
              <img src={Polygon} />
            </div>
            <div>
              <p className="">0.55%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buy and sell Section */}
      <div className="flex items-center my-4">
        <div>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="md:px-6 md:py-4 px-3 py-2 md:text-sm text-xs font-medium text-white rounded-l-lg border-r border-gray-400 bg_purple "
            >
              Buy
            </button>

            <button
              type="button"
              className="md:px-6 md:py-4 px-3 py-2 md:text-sm text-xs font-medium text-white rounded-r-lg  border-gray-400 bg_purple "
            >
              Sell
            </button>
          </div>
        </div>

        <div className="mx-4">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="md:px-6 md:py-4 px-3 py-2 md:text-sm text-xs font-medium text-white rounded-l-lg border-r border-gray-400 bg-dark-gray shadow-slate-700"
            >
              Send
            </button>

            <button
              type="button"
              className="md:px-6 md:py-4 px-3 py-2 md:text-sm text-xs font-medium text-white rounded-r-lg  border-gray-400 bg-dark-gray shadow-slate-700"
            >
              Recive
            </button>
          </div>
        </div>
        <div className="mx-4">
          <button className="md:px-6 md:py-4 px-3 py-2 md:text-sm text-xs font-medium text-white rounded-r-lg rounded-l-lg bg-dark-gray shadow-md shadow-slate-700">
            ...
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubHero;
