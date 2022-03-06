import React from 'react'
import './Tagbar.css'
const Tagbar = () => {
    const topics = [
        'All',
        'Javascript',
        'React.js',
        'MERN-stack',
        'Haoran Li',
        'HTML5',
        'CSS3',
        'RESTful API'
    ]
  return (
    <div className='tagbar-container'>
        <div className="tagbar-wrapper">
        {topics.map(t => (
            <div className="tagbar-label">
                {t}
            </div>
        ))}
        </div>
    </div>
  )
}

export default Tagbar