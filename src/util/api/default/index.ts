import axios from 'axios';

const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: process.env.BASE_URL,
  });
  request.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status === '401') {
        // error handling code
      }
      return Promise.reject(error);
    },
  );
};

export default getRequest;
