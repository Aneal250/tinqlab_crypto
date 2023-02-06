import React, { useState, useEffect } from "react";
import Avater from "./imgs/Avatar.png";
import Wrapper from "./Wrapper";
import axios from "axios";
import CrytoCoin from "./CrytoCoin";

const Footer = () => {
  const [coinData, setCoinData] = useState([]);

  const FetchTopSixcoins = async () => {
    const response = await axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
    );
    setCoinData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    FetchTopSixcoins();
  }, []);

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
            {coinData &&
              coinData.map((coin) => <CrytoCoin key={coin.id} coin={coin} />)}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Footer;
