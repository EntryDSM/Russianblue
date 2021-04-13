import axios from 'axios';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: process.env.BASE_URL,
  });
  return request;
};

export const getRequestWithAccessToken = (token: string) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: process.env.BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request;
};
