import React from 'react'
import './sidebar.css'
import icon from "../assets/icon.svg"
import home from "../assets/Home.svg"
import timer from "../assets/Timer.svg"
import chart from "../assets/Chart_Icon.svg"
import rocket from "../assets/Rocket.svg"
import layers from "../assets/Layers.svg"
import settings from "../assets/Settings.svg"
import logout from "../assets/Logout.svg"
import leftArrow from "../assets/left_arrow.svg"
const Sidebar = () => {
  return (
    <div className='sidebar'>
     <img className="sidebar-leftarrow"src={leftArrow}/>
<div className='sidebar-title'>
<img src={icon} alt="" />
Catalix
</div>
 <div className="sidebar-menu">
  <div className='sidebar-menu-tab'>
    <img src={home}/>
  Home</div>
  <div className='sidebar-menu-tab'>
    <img src={timer}/>
  Activities</div>
  <div className='sidebar-menu-tab'>
    <img src={chart}/>
  Analytics</div>
  <div className='sidebar-menu-tab'>
    <img src={rocket}/>
  Transformation</div>
  <div className='sidebar-menu-tab'>
    <img src={layers}/>
  Library</div>
 </div>
 <div className='sidebar-bottom-menu'>
 <div className='sidebar-menu-tab'>
    <img src={settings}/>
  Settings</div>
  <div className='sidebar-menu-tab'>
    <img src={logout}/>
  Logout</div>
 </div>
    </div>
  )
}

export default Sidebar