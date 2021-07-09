import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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

export const useIsLogin = () => {
  const history = useHistory();
  useEffect(() => {
    const ACCESS_TOKEN = localStorage.getItem('access_token');
    if (!ACCESS_TOKEN) history.push('/');
  }, [history]);
};
