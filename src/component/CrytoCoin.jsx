import React from "react";
import Avater from "./imgs/Avatar.png";
const CrytoCoin = ({ coin }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center">
          <div>
            <img src={coin.image} className="mr-4 w-8 h-8" />
          </div>
          <div>
            <p className="">
              {coin.name}{" "}
              <span className="text-gray-400 text-sm">{coin.symbol}</span>
            </p>
          </div>
        </div>
      </td>
      <td className="table_items">
        <p>$1,19223</p>
      </td>
      <td className="table_items">
        <p>${coin.current_price}</p>
      </td>
      <td className="table_items">
        <p>${coin.market_cap}</p>
      </td>
      <td className="table_items">
        <p>{coin.total_volume}</p>
      </td>
      <td className="table_items">
        <p>${coin.price_change_percentage_24h}</p>
      </td>
      <td className="table_items">
        <p>$23,89879</p>
      </td>
      <td className="table_items">
        <p> + &nbsp;&nbsp;&nbsp;...</p>
      </td>
    </tr>
  );
};

export default CrytoCoin;
