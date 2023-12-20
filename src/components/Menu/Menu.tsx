import React from 'react';
import { BiCoinStack } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { FiTag, FiHelpCircle } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import ExpenseoLogo from "../../assets/ExpenseoLogo.png";

import "./Menu.css";

// https://www.cssscript.com/hamburger-sidebar-navigation/
const Menu = () => {
  return (
    // Mobile Sidebar
    <div className='menu-mobileSidebar'>
      <header className='menu-mobileSidebar-header'>
        <img
          className='menu-logo'
          src={ExpenseoLogo} 
          alt="companyLogo" 
        />
        <span className='menu-companyName'>Expenseo</span>
      </header>
      <div className='menu-options-container'>
        <ul className="menu-topOptions">
          <li className='menu-list'>
            <LuLayoutDashboard fontSize={21} />
            <span>Dashboard</span>
          </li>
          <li className='menu-list'>
            <FiTag fontSize={21} />
            <span>Sales</span>
          </li>
          <li className='menu-list'>
            <BiCoinStack fontSize={21} />
            <span>Purchase</span>
          </li>
          <li className='menu-list'>
            <BsBoxSeam fontSize={21} />
            <span>Inventory</span>
          </li>
          <li className='menu-list'>
            <GoPeople fontSize={21} />
            <span>Accounts</span>
          </li>
          <li className='menu-list'>
            <VscGraph fontSize={21} />
            <span>Reports</span>
          </li>
        </ul>
        <hr />
        <ul className="menu-bottomOptions">
          <li className='menu-list'>
            <LuSettings fontSize={21} />
            <span>Settings</span>
          </li>
          <li className='menu-list'>
            <FiHelpCircle fontSize={21} />
            <span>Help</span>
          </li>
        </ul>
        <hr />
        <div className="menu-userInfo">
          <div className="menu-userImage">
            <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="userPhoto" />
          </div>
          <div className="menu-userData">
            <span className='menu-userName'>Chris Flores</span>
            <span className='menu-userEmail'>felicia.reid@exple.com</span>
          </div>
          <div className='menu-userArrow-container'>
            <MdOutlineKeyboardArrowRight fontSize={21} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu