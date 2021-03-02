import React from 'react';

const mainConstance = {
  notStarted: {
    title: <p>지금은 원서접수기간이 아닙니다.</p>,
    description: <p>원서접수 기간은 {<span>2020-01-01</span>}에 시작됩니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: false,
  },
  makeApplication: {
    title: <p>지금은 {<span>원서 작성</span>} 기간입니다.</p>,
    description: <p>원서 접수 기간은 {<span>2020-01-01</span>}까지 입니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: true,
  },
  endedMakeApplication: {
    title: <p>원서 접수가 끝났습니다.</p>,
    description: <p>1차 발표일은 {<span>2020-01-01</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: false,
  },
  firstAnnouncement: {
    title: <p>지금은 {<span>1차 발표</span>} 기간입니다.</p>,
    description: '',
    isHaveTerm: true,
    buttonText: '1차 발표 결과',
    isButtonAble: true,
  },
  meeting: {
    title: <p>지금은 {<span>면접</span>} 기간입니다.</p>,
    description: <p>면접 기간은 {<span>2020-01-01</span>}입니다. </p>,
    isHaveTerm: true,
    buttonText: '면접 일정 확인',
    isButtonAble: true,
  },
  finalAnnouncement: {
    title: <p>지금은 {<span>발표 및 등록</span>} 기간입니다.</p>,
    description: <p>등록 기간은 {<span>2020-01-01</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '결과 보기',
    isButtonAble: true,
  },
  ended: {
    getgetTitle: '원서 접수가 끝났습니다.',
    description: <p>내년을 기약해 주세요.</p>,
    isHaveTerm: true,
    buttonText: '결과 보기',
    isButtonAble: false,
  },
};

export enum mainProcessNumber {
  notStarted = 1,
  makeApplication = 2,
  endedMakeApplication = 3,
  firstAnnouncement = 4,
  meeting = 5,
  finalAnnouncement = 6,
  ended = 7,
}

export default mainConstance;
