import React, { useState } from 'react'
import {MoreVertOutlined, PlaylistPlay, WatchLaterOutlined, PlaylistAdd, NotInterestedOutlined, DoNotDisturbOnOutlined, FlagOutlined } from '@mui/icons-material'
import './post.css'

const Post = ({ video }) => {
  const [hover, setHover] = useState(false)
  const [hoverVideo, setHoverVideo] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const hiddenclass = hover ? "post-vert display":"post-vert hidden";
  const hiddenDropdown = dropdown ? 'dropdown-content display': 'dropdown-content hidden';

  return (
    <div className='post-container'>
        <div className="post-img-container" onMouseEnter={() => setHoverVideo(true)} onMouseLeave={() => setHoverVideo(false)}>
            <img className='post-img' src={video.img} alt="" />
            <span className='post-duration'>{hoverVideo? "keep hovering to play": video.duration}</span>
        </div>
        <div className="post-content-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <div className='post-content'>
            <img className="post-avatar" src={video.channel.avatar} alt="" />
            <div className="post-info">
                <span className="post-title">{video.title}</span>
                <span className="post-channel">{video.channel.name}</span>
                <span className="post-detail">{video.views} views • {video.date}</span>
            </div>
          </div>
          <div className={hiddenclass} >
              <MoreVertOutlined className='post-more-button' style={{fontSize: '20px'}} onClick={() => {setDropdown(!dropdown)}}/>
          </div>
          {/* dropdown */}
          <div className={hiddenDropdown}>
              <a className='dropdown-item' href="/#">
                <PlaylistPlay style={{fontSize: '29px',margin: '-4px 10px -10px 0px'}}/>
                <span>Add to queue</span>
              </a>
              <a className='dropdown-item' href="/#">
                <WatchLaterOutlined style={{fontSize: '25px', margin: '-4px 14px -8px 0px'}}/>
                <span>Save to watch later</span>
              </a>
              <a className='dropdown-item' href="/#">
                <PlaylistAdd style={{fontSize: '29px', margin: '-6px 10px -8px 0px'}}/>  
                <span>Save to playlist</span>
              </a>
              <hr className='dropdown-hr'/>
              <a className='dropdown-item' href="/#">
                <NotInterestedOutlined style={{fontSize: '25px', margin: '-4px 14px -8px 0px'}}/>
                <span>Not interested</span>
              </a>
              <a className='dropdown-item' href="/#">
                <DoNotDisturbOnOutlined style={{fontSize: '25px', margin: '-4px 14px -8px 0px'}}/>
                <span>Don't recommend channel</span>
              </a>
              <a className='dropdown-item' href="/#">
                <FlagOutlined style={{fontSize: '25px', margin: '-4px 14px -8px 0px'}}/>
                <span>Report</span>
              </a>
          </div>
        </div>
    </div>
  )
}

export default Post