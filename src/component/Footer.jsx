import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import axios from "axios";
import CrytoCoin from "./CrytoCoin";
import Loading from "./Loading";

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
      <div className="overflow-x-scroll bg-dark">
        <p className="text-white text-2xl py-2"> Your Assest</p>
        <table className="table-auto text-white">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="w-64 text-left text-sm font-normal text-gray-400">
                Coin
              </th>
              <th className="table_items_header">Holdings</th>
              <th className="table_items_header">Price</th>
              <th className="table_items_header">Market Cap</th>
              <th className="table_items_header">Volume (24h)</th>
              <th className="table_items_header">Last (24h)</th>
              <th className="table_items_header">Culculating Supply</th>
              <th className="table_items_header">Action</th>
            </tr>
          </thead>
          {!coinData.length && <Loading />}
          <tbody>
            {coinData.map((coin) => (
              <CrytoCoin key={coin.id} coin={coin} />
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Footer;
