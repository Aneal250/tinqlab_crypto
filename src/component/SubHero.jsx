import React from "react";
import Wrapper from "./Wrapper";
import Polygon from "./imgs/Polygon.png";

const SubHero = () => {
  return (
    <Wrapper>
      <div className="flex flex-col ">
        <p className="text-gray-300">Current Balance</p>
        <div className="flex items-center">
          <div>
            <p className="text-6xl font-bold text-white">$3,742.15</p>
          </div>
          <div className="flex ">
            <p className="mx-4 bg_indicator px-1 py-1 rounded-sm text-green-500">
              <span>
                <img src={Polygon} />
              </span>
              0.55%
            </p>
          </div>
        </div>
      </div>

      {/* Buy and sell Section */}
      <div className="flex items-center ">
        <div className="mx-4">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" className="group_button_l bg_purple">
              Buy
            </button>

            <button type="button" className="group_button_r bg_purple">
              Sell
            </button>
          </div>
        </div>

        <div className="mx-4">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" className="group_button_l bg-dark-gray ">
              Send
            </button>

            <button type="button" className="group_button_r bg-dark-gray">
              Recive
            </button>
          </div>
        </div>
        <div className="mx-4">
          <button className="group_button_single bg-dark-gray"> ...</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubHero;
