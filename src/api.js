import axios from 'axios';

const API = axios.create({
  baseURL: 'https://notes-app-backend-h5h7.onrender.com', // backend URL
});

export default API;
