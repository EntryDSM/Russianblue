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
  const startDate = processState.state.date[4].date;
  const endDate = processState.state.date[0].date;
  const dates = {
    year: nowDate.getFullYear(),
    month: nowDate.getMonth() + 1,
    date: nowDate.getDate(),
    hour: nowDate.getHours(),
  };
  const startDates = {
    year: Number(startDate.slice(0, 4)),
    month: Number(startDate.slice(5, 7)),
    date: Number(startDate.slice(8, 10)),
    hour: Number(startDate.slice(11, 13)),
  };
  const endDates = {
    year: Number(endDate.slice(0, 4)),
    month: Number(endDate.slice(5, 7)),
    date: Number(endDate.slice(8, 10)),
    hour: Number(endDate.slice(11, 13)),
  };
  if (dates.year < startDates.year || dates.year > endDates.year) {
    history.push('/');
    alert('원서 접수 기간이 아니면 이용하실 수 없습니다.');
  } else if (dates.month < startDates.month || dates.month > endDates.month) {
    history.push('/');
    alert('원서 접수 기간이 아니면 이용하실 수 없습니다.');
  } else if (dates.date < startDates.date || dates.date > endDates.date) {
    history.push('/');
    alert('원서 접수 기간이 아니면 이용하실 수 없습니다.');
  }
  // } else if (
  //   dates.year === startDates.year &&
  //   dates.month === startDates.month &&
  //   dates.date === startDates.date
  // ) {
  //   if (dates.hour < startDates.hour) {
  //     history.push('/');
  //     console.log('원서 접수 기간 전');
  //     alert('원서 접수 기간이 아니면 이용하실 수 없습니다.');
  //   }
  // } else if (
  //   dates.year === endDates.year &&
  //   dates.month === endDates.month &&
  //   dates.date === endDates.date
  // ) {
  //   if (dates.hour >= endDates.hour) {
  //     history.push('/');
  //     console.log('원서 접수 기간 후');
  //     alert('원서 접수 기간이 아니면 이용하실 수 없습니다.');
  //   }
  // }
};
