import React, { ReactChild, ReactFragment, ReactPortal, useState } from 'react';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

import "./ExpenseCard.css";

interface IProps {
  amount: number,
  children: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined,
  percentChange: number,
  title: string
}

const ExpenseCard = ({ amount, children, percentChange, title }: IProps) => {
  const [currency, setCurrency] = useState<string>("Rp.")

  return (
    <div className='expenseCard-container'>
      <div className="expenseCard-logoContainer">
        {children}
      </div>
      <BiDotsHorizontalRounded className="expenseCard-detail" fontSize={24} />
      <div className="expenseCard-title">
        <span className='expenseCard-title-text'>{title}</span>
        <span className='expenseCard-title-amount'>
          {currency} {amount.toLocaleString('en-US', {maximumFractionDigits:2})}
        </span>
      </div>
      <div className="expenseCard-footer">
        {percentChange >= 0 
          ? <FaArrowTrendUp fontSize={21} className='expenseCard-footer-arrowUp' /> 
          : <FaArrowTrendDown fontSize={21} className='expenseCard-footer-arrowDown' />}
        <span>{` ${Math.abs(percentChange)}% vs last 30 days`}</span>
      </div>
    </div>
  )
}

export default ExpenseCard