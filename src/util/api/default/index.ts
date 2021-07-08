import axios from 'axios';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://munchkin.entrydsm.hs.kr',
  });
  return request;
};

export const getRequestWithAccessToken = (token: string) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://munchkin.entrydsm.hs.kr',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request;
};
