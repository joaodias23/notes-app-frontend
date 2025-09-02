import axios from 'axios';

const API = axios.create({
  baseURL: 'https://notes-app-backend-h5h7.onrender.com'
});

// attach JWT token automatically if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
