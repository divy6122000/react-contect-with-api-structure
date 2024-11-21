import axios from 'axios';
import { getAuthToken } from '../utils/authHelper';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors like unauthorized, etc.
    if (error.response?.status === 401) {
      // Handle token expiration, redirect to login, etc.
    }
    return Promise.reject(error);
  }
);

export default httpClient;
