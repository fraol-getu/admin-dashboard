import React, { useState } from 'react'
 import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/auth/Authslice'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LOGIN_URL = '/auth/login'

const Header = ({opensideBarToggle}) => {
    const {isSucess} = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [forceRender, setForceRender] = useState(false);

    const handleLogout = async () => {
       dispatch(logOut())
      localStorage.removeItem('token')
     }
    
   return (
  
  <header className="header  h-[60px] flex items-center justify-between px-[30px]">
    <div className="menu-icons md:hidden">
        <BsJustify className='icons align-middle leading-[1px] text-[20px]' onClick={opensideBarToggle} />
    </div>
    <div className="header-left">
        <BsSearch className='icons text-red-600   align-middleleading-[1px] text-[20rem]' />
    </div>
      <button className='header-btn' onClick={handleLogout}>logout</button>
   </header>
  )
}

export default Header