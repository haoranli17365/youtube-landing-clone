import React, {useState, useEffect} from 'react'
import './feed.css'
import { axiosInstance } from '../../config';
import Post from '../Post/Post'
import Loading from '../Loading/Loading'

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try{
        const res = await axiosInstance.get('/api/video/1')
        setVideos(res.data)
        setIsLoading(false)
      }catch(err){
        console.log(err)
      }
    }
    fetchPosts()

  }, [])
  
  return (
    <div className='feed-container'>
      {isLoading? 
      Array.apply(0, Array(10)).map( () => (
        <Loading className="flex-item" /> 
      ))
      : 
      videos.map(v => (
        <Post key={v._id} video={v} />
      ))}
    </div>
  )
}

export default Feed