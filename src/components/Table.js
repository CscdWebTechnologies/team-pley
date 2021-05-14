import React from "react";
import btc from "../assets/images/bitcoin.png";
import eth from "../assets/images/etherum.png";
import lite from "../assets/images/litecoin.png";
import cash from "../assets/images/bitcoin-cash.png";
import chart from "../assets/images/chart.png";
import "../assets/table.css";

const items = [
  {
    icon: btc,
    name: "Bitcoin",
    code: "BTC",
    price: "GHS 314,259.22",
    change: -41.86,
    chart: chart,
  },
  {
    icon: eth,
    name: "Ethereum",
    code: "ETH",
    price: "GHS 314,654.22",
    change: -89.75,
    chart: chart,
  },
  {
    icon: lite,
    name: "Litecoin",
    code: "LTC",
    price: "GHS 894,479.22",
    change: -59.23,
    chart: chart,
  },
  {
    icon: cash,
    name: "Bitcoin Cash",
    code: "BCH",
    price: "GHS 6534,259.22",
    change: -44.15,
    chart: chart,
  },
];

const Table = () => {
  return (
    <div className="main__table">
      <div className="table__wrapper">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="index">#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Chart</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr>
                  <td className="index">{index + 1}</td>
                  <td className="table__name">
                    <img src={item.icon} alt="logo" />
                    <h4 class="name">{item.name}</h4>
                    <h4 className="code">{item.code}</h4>
                  </td>
                  <td className="price">{item.price}</td>
                  <td className="change">{item.change}</td>
                  <td>
                    <img src={item.chart} alt="chart logo" />
                  </td>
                  <td>
                    <button class="trade__btn">Buy</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
