import React from "react";


const CrytoCoin = ({ coin }) => {
  const ConvertedAmount = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
              <span className="text-gray-400 text-sm">{coin.symbol}</span>
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
        <p>${coin.price_change_percentage_24h}</p>
      </td>
      <td className="w-40 text-right text-sm ">
        <p>{ConvertedAmount(coin.circulating_supply)}</p>
      </td>
      <td className="table_items">
        <p> + &nbsp;&nbsp;&nbsp;...</p>
      </td>
    </tr>
  );
};

export default CrytoCoin;
