import React, { useState } from 'react';
import { CiBellOn, CiSearch } from "react-icons/ci";
import { FiDollarSign } from 'react-icons/fi';
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSavings } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { TbChartCircles } from "react-icons/tb";
import Menu from '../../components/Menu/Menu'
import ExpenseCard from '../../components/ExpenseCard/ExpenseCard';

import "./Home.css";

const Home = () => {
  const options = ["Last 30 Days", "This Month", "Last Month"];
  const [optionSelected, setOptionSelected] = useState<number>(0);
  const [userAvatar, setUserAvatar] = useState<string>("https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg");

  return (
    <div className='home'>
      <Menu />
      <div className="home-content">
        <div className="home-header">
          <select
            className='home-optionSelect'
            onChange={(e) => setOptionSelected(parseInt(e.target.value, 10))}
          >
            {options.map((option, key) => (
              <option value={key} key={key}>{option}</option>
            ))}
          </select>
          <div className='separator'></div>
          <CiBellOn fontSize={32} />
          <div className='separator'></div>
          <CiSearch fontSize={32} />
          <div className='separator'></div>
          {userAvatar 
            ? <img className='home-header-userAvatar' src={userAvatar} alt='user-avatar' /> 
            : <RxAvatar fontSize={32} />
          }
        </div>
        <div className="home-main">
          <div className="home-expensesCard">
            <ExpenseCard
              amount={4500000}
              percentChange={6}
              title={"total income"}
            >
              <FiDollarSign className='logo' fontSize={24} />
            </ExpenseCard>
            <ExpenseCard
              amount={2500000}
              percentChange={-40}
              title={"total expense"}
            >
              <TbChartCircles className='logo' fontSize={24} />
            </ExpenseCard>
            <ExpenseCard
              amount={25000000}
              percentChange={6}
              title={"total savings"}
            >
              <MdOutlineSavings className='logo' fontSize={24} />
            </ExpenseCard>
            <ExpenseCard
              amount={1500000}
              percentChange={0}
              title={"most spendings"}
            >
              <IoWalletOutline className='logo' fontSize={24} />
            </ExpenseCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home