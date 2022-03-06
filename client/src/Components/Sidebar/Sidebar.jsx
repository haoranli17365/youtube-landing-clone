import './sidebar.css';
import { Home, ExploreOutlined, Menu, SubscriptionsOutlined, VideoLibraryOutlined } from '@mui/icons-material'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className="sidebar-wrapper">
            <button className='sidebar-menu'>
                <Menu className='sidebar-menu-icon' style={{fontSize: '26px'}}/>
            </button>
            
            <button className="sidebar-item">
                <Home className='sidebar-icon' style={{fontSize: '26px'}}/>
                <span className='sidebar-text'>Home</span>
            </button>
            <button className="sidebar-item">
                <ExploreOutlined className='sidebar-icon' style={{fontSize: '26px'}}/>
                <span className='sidebar-text'>Explore</span>
            </button>
            <button className="sidebar-item">
                <SubscriptionsOutlined className='sidebar-icon' style={{fontSize: '26px'}}/>
                <span className='sidebar-text'>Subscription</span>
            </button>
            <button className="sidebar-item">
                <VideoLibraryOutlined className='sidebar-icon' style={{fontSize: '26px'}}/>
                <span className='sidebar-text'>Library</span>
            </button>
        </div>
    </div>
  )
}

export default Sidebar