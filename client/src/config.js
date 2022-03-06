import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL : "https://youtube-landing-clone.herokuapp.com/",
})