import React, { useEffect } from "react";
import Polygon from "./imgs/Polygon.png";
import ArrowDown from "./imgs/ArrowDown.png";
import ArrowUp from "./imgs/ArrowUp.png";

const CrytoCoin = ({ coin }) => {
  const ConvertedAmount = (x) => {
    let converted = x.toFixed(1);
    return converted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const toFixedTwo = (x) => {
    let converted = x.toFixed(2);
    return Math.abs(converted);
  };

  return (
    <tr>
      <td>
        <div className="flex items-center">
          <div>
            <img src={coin.image} className="mr-4 md:w-8 md:h-8 w-4 h-4" />
          </div>
          <div>
            <p className="md:text-sm text-xs">
              {coin.name}
              <span className="text-gray-400 text-sm pl-2">{coin.symbol}</span>
            </p>
          </div>
        </div>
      </td>
      <td className="table_items">
        <p>${ConvertedAmount(coin.atl_change_percentage)}</p>
      </td>
      <td className="table_items">
        <p>${ConvertedAmount(coin.current_price)}</p>
      </td>
      <td className="table_items">
        <p>${ConvertedAmount(coin.market_cap)}</p>
      </td>
      <td className="table_items">
        <p>${ConvertedAmount(coin.total_volume)}</p>
      </td>
      <td className="table_items">
        <p
          className={
            Math.sign(coin.price_change_percentage_24h) == 1
              ? " text-green-600"
              : "text-red-500"
          }
        >
          {Math.sign(coin.price_change_percentage_24h) == 1 ? (
            <img src={ArrowUp} className="inline w-2 mr-1" />
          ) : (
            <img src={ArrowDown} className="inline w-3 mr-1" />
          )}
          {toFixedTwo(coin.price_change_percentage_24h)}&#37;
        </p>
      </td>
      <td className="table_items_supply ">
        <p>{ConvertedAmount(coin.circulating_supply)}</p>
      </td>
      <td className="table_items">
        <p> + &nbsp;&nbsp;&nbsp;...</p>
      </td>
    </tr>
  );
};

export default CrytoCoin;
