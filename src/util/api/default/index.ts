import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useProcess } from '../../../util/hooks/main';
import { useModal } from '../../../util/hooks/modal';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://munchkin.entrydsm.hs.kr',
    withCredentials: true,
    headers: {
      withCredentials: true,
    },
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: 'json' | 'blob' | 'text' = 'json',
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://munchkin.entrydsm.hs.kr',
    headers: {
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    },
    responseType: type,
    withCredentials: true,
  });
  return request;
};

export const useIsLogin = () => {
  const history = useHistory();
  const setModalOn = useModal().setState.setModalOn;
  useEffect(() => {
    const ACCESS_TOKEN = localStorage.getItem('access_token');
    if (!ACCESS_TOKEN) {
      history.push('/');
      setModalOn('signin');
    }
  }, [history]);
};

export const useIsApplicationDate = () => {
  const history = useHistory();
  const processState = useProcess();
  const nowDate = new Date();
  const startDate = new Date(processState.state.date[4].date);
  const endDate = new Date(processState.state.date[0].date);
  if (nowDate.getTime() < startDate.getTime()) {
    console.log('원서 접수 전');
    history.push('/');
    alert('원서 접수 기간이 아니면 이용하실 수 없습니다.');
  } else if (nowDate.getTime() > endDate.getTime()) {
    console.log('원서 접수 후');
    history.push('/');
    alert('원서 접수 기간이 아니면 이용하실 수 없습니다.');
  }
};
