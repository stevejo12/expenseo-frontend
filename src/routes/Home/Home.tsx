import React, { useState } from "react";
import dayjs from "dayjs";
import { BiHide, BiShow } from "react-icons/bi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Chart } from "react-google-charts";
import { ExpensesAmount } from "../../models/expense";
import Menu from "../../components/Menu/Menu";
import { useCurrency } from "../../context/currency";

import "./Home.css";

const Home = () => {
  const startMonth = dayjs().startOf("month").format("dddd, D MMMM YYYY");
  const endMonth = dayjs(new Date()).format("dddd, D MMMM YYYY");
  const { currency, setCurrency } = useCurrency();
  const [hideBalance, setHideBalance] = useState<boolean>(true);
  const [balance, setBalance] = useState<number>(4500000);
  const [expensesTable, setExpensesTable] = useState<((string|number)[])[]>([
    ["Element", "Amount"],
    ["Investment", 3055000],
    ["Food & Beverage", 313400],
    ["Other Expenses", 300000],
    ["Transportation", 113400],
    ["Houseware", 61000],
    // ["", 0],
    // ["", 0],
    // ["", 0],
    // ["", 0],
    // ["", 0],
  ]);
  const [expensePieChart, setExpensePieChart] = useState<((string|number)[])[]>([
    ["Element", "Amount"],
    ["Income", 4500000],
    ["Expense", 829400],
    ["Savings", 3055000],
  ]);
  const chartLegend = ["Element", "Density"]

  return (
    <div className="home">
      <Menu />
      <div className="home-content">
        <div className="home-content-left">
          <div className="home-left-header">
            <div className="home-header-left">
              <span className="home-header-title">Dashboard</span>
              <span className="home-header-subTitle">{`${startMonth} - ${endMonth}`}</span>
            </div>
            <div className="home-header-balanceInfo">
              <div className="home-header-balanceInfo-left">
                <span>Total balance</span>
                {hideBalance ? (
                  <div className="home-header-amount">
                    <span>**********</span>
                    <BiHide onClick={() => setHideBalance(false)} />
                  </div>
                ) : (
                  <div className="home-header-amount">
                    <span>
                      {`${currency} ${balance.toLocaleString("en-US", {"maximumFractionDigits": 2})}`}
                    </span>
                    <BiShow onClick={() => setHideBalance(true)} />
                  </div>
                )}
              </div>
              <HiOutlineDotsHorizontal />
            </div>
          </div>
          {/* <div className="home-left-expenseTable"></div> */}
          <div className="home-left-expenseTableContainer">
            <span className="expenseo-title home-left-expenseoTableTitle">Top 5 Expenses</span>
            <Chart chartType="ColumnChart" data={expensesTable} width="100%" height="100%" className="home-left-chart" />
          </div>
          <div className="home-left-expenseTableContainer">
            <span className="expenseo-title home-left-expenseoTableTitle">Report Overview</span>
            <Chart chartType="PieChart" data={expensePieChart} width="100%" height="100%" className="home-left-chart" options={{ is3D: false, pieHole: 0.4}} />
          </div>
        </div>
        <div className="home-content-right"></div>
      </div>
    </div>
  );
};

export default Home;
