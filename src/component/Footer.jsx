import React from "react";
import Avater from "./imgs/Avatar.png";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <p className="text-white text-2xl py-2"> Your Assest</p>
        <table className="table-fixed text-white">
          <thead>
            <tr className="py-2">
              <td className="w-72 text-left text-sm">Coin</td>
              <td className="table_items">Holdings</td>
              <td className="table_items">Price</td>
              <td className="table_items">Market Cap</td>
              <td className="table_items">Vloume (24h)</td>
              <td className="table_items">Last (24h)</td>
              <td className="table_items">Profit/ Loss</td>
              <td className="table_items">Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center">
                  <div>
                    <img src={Avater} className="mr-4" />
                  </div>
                  <div>
                    <p className="">
                      Bitcoin <span className="text-gray-400 text-sm">BTC</span>
                    </p>
                  </div>
                </div>
              </td>
              <td className="table_items">
                <p>$1,19223</p>
              </td>
              <td className="table_items">
                <p>$47,19223</p>
              </td>
              <td className="table_items">
                <p>$1000009,19223</p>
              </td>
              <td className="table_items">
                <p>$1,19223</p>
              </td>
              <td className="table_items">
                <p>$23,89879</p>
              </td>
              <td className="table_items">
                <p>$23,89879</p>
              </td>
              <td className="table_items">
                <p> + &nbsp;&nbsp;&nbsp;...</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Footer;
