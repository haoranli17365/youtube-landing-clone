import React from 'react'
import './loading.css'

const Loading = () => {
    const COUNTER = 10
  return Array(COUNTER).fill(
    <div className='loading-container'>
        <div className="loading-img"></div>
        <div className="loading-info">
            <div className='loading-avatar'></div>
            <div className='loading-detail'>
                <div className="loading-text"></div>
                <div className="loading-text-sm"></div>    
            </div>
        </div>
    </div>
  )
}

export default Loading