import React, { useState } from 'react';
import { CiBellOn, CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import Menu from '../../components/Menu/Menu'

import "./Home.css";

const Home = () => {
  const options = ["Last 30 Days", "This Month", "Last Month"];
  const [optionSelected, setOptionSelected] = useState<number>(0);
  const [userAvatar, setUserAvatar] = useState<string>("https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg");

  console.log("selected:", optionSelected);

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
      </div>
    </div>
  )
}

export default Home