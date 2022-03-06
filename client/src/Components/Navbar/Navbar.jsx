import { AppsOutlined, Mic, NotificationsOutlined, Search, VideoCallOutlined } from '@mui/icons-material'
import React from 'react'
import Tagbar from '../Tagbar/Tagbar'
import './navbar.css'
const Navbar = ({user}) => {
  return (
      <div className='navbar-tagbar'>
    <div className='navbar-container'>
        <div className="navbar-left">
            <img className='navbar-logo' src='yt-logo.svg' alt=''/>
        </div>
        <div className="navbar-center">
            <input type="text" className="navbar-search" placeholder='Search'/>
            <button className='navbar-search-button'>
                <Search className='navbar-search-icon'/>
            </button>
            <button className='navbar-mic-button'>
                <Mic className='navbar-mic-icon' classNamestyle={{fontSize: '26px'}}/>
            </button>
        </div>
        <div className="navbar-right">
            <VideoCallOutlined className="navbar-right-icon" />
            <AppsOutlined className="navbar-right-icon" />
            <NotificationsOutlined className="navbar-right-icon" />
            <img className="navbar-avatar" src={user.avatar} alt="" />
        </div>
    </div>
    <Tagbar />
    </div>
  )
}

export default Navbar