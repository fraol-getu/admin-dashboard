import React from 'react'
 import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
const Header = ({opensideBarToggle}) => {
  return (
   <header className="header  h-[60px] flex items-center justify-between px-[30px]">
    <div className="menu-icons md:hidden">
        <BsJustify className='icons align-middle leading-[1px] text-[20px]' onClick={opensideBarToggle} />
    </div>
    <div className="header-left">
        <BsSearch className='icons text-red-600   align-middleleading-[1px] text-[20rem]' />
    </div>

    <div className="header-right">
        <BsFillBellFill className='icons align-middle leading-[1px] text-[20px]' /> 
        <BsFillEnvelopeFill className='icons align-middle  leading-[1px] text-[20px]' />
        <BsPersonCircle className='icons align-middle leading-[1px] text-[20px]' />
    </div>
   </header>
  )
}

export default Header