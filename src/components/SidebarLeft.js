import React from 'react'
import logo from '../assests/logo.svg'
import {sidebarMenu} from '../ultis/menu'
import { NavLink } from 'react-router-dom'

const notActiveStyle = 'py-2 px-[25px] text-[#b1afb3] text-[13px] font-bold flex gap-[12px] items-center'
const activeStyle = 'py-2 px-[25px] text-[#f0f4f8] text-[13px] font-bold flex gap-[12px] items-center'

const SidebarLeft = () => {
  return (
    <div className='flex flex-col bg-[#231b2e]'>
      <div className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'>
        <img src={logo} alt="Lala-logo" />
        {/* className='w-[128px] h-10' */}
      </div>
      <div className='flex flex-col'>
        {sidebarMenu.map(item => (
          <NavLink
          to={item.path}
          key={item.path}
          end={item.end}
          className={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
          {item.icons}
          <span>{item.text}</span>
        </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SidebarLeft