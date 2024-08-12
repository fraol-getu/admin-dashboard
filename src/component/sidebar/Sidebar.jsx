import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'
  import { FaContao, FaNewspaper } from "react-icons/fa6";
  import { IoIosCodeWorking } from "react-icons/io";
  import { MdAdminPanelSettings } from "react-icons/md";
 import { Link } from 'react-router-dom';

const Sidebar = ({opensideBarToggle, openSideBar}) => {
  return (
  <aside id='sidebar' className={openSideBar ? 'sidebar-responsive' : ''}>
    <div className="sidebar-title">
      <div className="sidebar-brand">
        <MdAdminPanelSettings />  251
      </div>
      <span className=' icons close-icon' onClick={opensideBarToggle}>X</span>
    </div>
    <ul className="sidebar-list">
    <li className="side-bar-list-item">
      <Link to="/"> <BsGrid1X2Fill className='leading-[1px] text-[20px] align-middle icons' />   Dashboard
      </Link>
      </li>

      <li className="side-bar-list-item">
      <Link to="/news"> <FaNewspaper className='leading-[1px] text-[20px] align-middle icons' />  News</Link>
      </li>

      <li className="side-bar-list-item">
      <a href=""> <IoIosCodeWorking  className='leading-[1px] text-[20px] align-middle icons' /> Jobs</a>
      </li>

      <li className="side-bar-list-item">
      <a href=""> <BsPeopleFill className='leading-[1px] text-[20px] align-middle icons' />  Users </a>
      </li>
      
      <li className="side-bar-list-item">
      <a href=""> <FaContao className='leading-[1px] text-[20px] align-middle icons' />  Contact</a>
      </li>

      <li className="side-bar-list-item">
      <a href=""> <BsMenuButtonWideFill className='leading-[1px] text-[20px] align-middle icons' />  Reports
      </a>
      </li>

      <li className="side-bar-list-item">
      <a href=""> <BsFillGearFill className='leading-[1px] text-[20px] align-middle icons' />  Settings
      </a>
      </li>
    </ul>

  </aside>
  )
}

export default Sidebar