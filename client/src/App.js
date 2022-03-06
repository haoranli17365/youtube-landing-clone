import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import {useState, useEffect} from 'react'
import Feed from './Components/Feed/Feed';
import { axiosInstance } from './config';
function App() {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axiosInstance.get('/api/user/1')
        setUser(res.data);
      } catch (err) { console.log(err) }
    };
    getUser();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className='landing-content'>
        <Navbar user={user}/>
        <Feed />
      </div>
    </div>
  );
}

export default App;
