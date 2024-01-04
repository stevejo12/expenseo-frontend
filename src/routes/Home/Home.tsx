import React, { useState } from 'react';
import { BiHide, BiShow } from "react-icons/bi";
import { GoQuestion } from "react-icons/go";
import { MdAccountBalanceWallet } from "react-icons/md";
import Menu from '../../components/Menu/Menu'
import { useCurrency } from '../../context/currency';

import "./Home.css";


const Home = () => {
  const { currency, setCurrency } = useCurrency();
  const [hideBalance, setHideBalance] = useState<boolean>(true);
  const [balance, setBalance] = useState<number>(4500000);

  return (
    <div className='home'>
      <Menu />
      <div className="home-content">
        <div className="home-header">
          {hideBalance
            ? <div className='home-userBalance'>
              <span>**********</span>
              <BiHide onClick={() => setHideBalance(false)} />
            </div>
            : <div className='home-userBalance'>
              <span>{currency} {balance.toLocaleString('en-US', {maximumFractionDigits:2})}</span>
              <BiShow onClick={() => setHideBalance(true)} />
            </div>}
          <div className="home-userBalanceInfo">
            <span>Total Balance</span>
            <GoQuestion />
          </div>
        </div>
        <div className="home-main">
          <div className='home-userWallet expenseo-border-full'>
            <div>
              <span>My Wallets</span>
              <span>See all</span>
            </div>
            <div>
              <div>
                <MdAccountBalanceWallet />
                <span>Cash</span>
              </div>
              <span>{currency} {balance.toLocaleString('en-US', {maximumFractionDigits:2})}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home