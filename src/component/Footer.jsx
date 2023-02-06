import React from "react";
import Avater from "./imgs/Avatar.png";

const Footer = () => {
  return (
    <div>
      <p> Your Assest</p>
      <table class="table-fixed">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Holdings</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Vloume (24h)</th>
            <th>Last (24h)</th>
            <th>Profit/ Loss</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={Avater} />
            </td>
            <td>
              <p>$1,19223</p>
            </td>
            <td>
              <p>$47,19223</p>
            </td>
            <td>
              <p>$1000009,19223</p>
            </td>
            <td>
              <p>$1,19223</p>
            </td>
            <td>
              <p>$23,89879</p>
            </td>
            <td>
              <p> + ...</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Footer;
