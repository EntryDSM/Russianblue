import React from 'react';
import { processType } from './interface';

export const START_DATE = 'START_DATE' as const;
export const END_DATE = 'END_DATE' as const;
export const FIRST_ANNOUNCE = 'FIRST_ANNOUNCE' as const;
export const BEFORE_INTERVIEW = 'BEFORE_INTERVIEW' as const;
export const INTERVIEW = 'INTERVIEW' as const;
export const SECOND_ANNOUNCE = 'SECOND_ANNOUNCE' as const;
export const BEFORE_SECOND_ANNOUNCE = 'BEFORE_SECOND_ANNOUNCE' as const;
export const NOT_APPLICATION_PERIOD = 'NOT_APPLICATION_PERIOD' as const;
export const BEFORE_FIRST_ANNOUNCE = 'BEFORE_FIRST_ANNOUNCE' as const;

export type statusType =
  | typeof START_DATE
  | typeof END_DATE
  | typeof FIRST_ANNOUNCE
  | typeof SECOND_ANNOUNCE
  | typeof INTERVIEW
  | typeof NOT_APPLICATION_PERIOD
  | typeof BEFORE_FIRST_ANNOUNCE
  | typeof BEFORE_SECOND_ANNOUNCE
  | typeof BEFORE_INTERVIEW;

const mainConstance: Record<statusType, processType> = {
  [NOT_APPLICATION_PERIOD]: {
    title: <p>지금은 원서접수기간이 아닙니다.</p>,
    getDescription: (date: string) => <p>원서접수 기간은 {<span>{date}</span>}에 시작됩니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: false,
    uri: '',
  },
  [START_DATE]: {
    title: <p>지금은 {<span>원서 작성</span>} 기간입니다.</p>,
    getDescription: (date: string) => <p>원서 접수 기간은 {<span>{date}</span>}까지 입니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: true,
    uri: '/',
  },
  [BEFORE_FIRST_ANNOUNCE]: {
    title: <p>원서 접수가 끝났습니다.</p>,
    getDescription: (date: string) => <p>1차 발표일은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: false,
    uri: '',
  },
  [FIRST_ANNOUNCE]: {
    title: <p>지금은 {<span>1차 발표</span>} 기간입니다.</p>,
    getDescription: () => '',
    isHaveTerm: true,
    buttonText: '1차 발표 결과',
    isButtonAble: false,
    uri: '',
  },
  [BEFORE_INTERVIEW]: {
    title: <p>면접 진행 전입니다.</p>,
    getDescription: (date: string) => <p>면접 기간은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '면접 일정 확인',
    isButtonAble: false,
    uri: '',
  },
  [INTERVIEW]: {
    title: <p>지금은 {<span>면접</span>} 기간입니다.</p>,
    getDescription: (date: string) => <p>면접 기간은 {<span>{date}</span>}입니다. </p>,
    isHaveTerm: true,
    buttonText: '면접 일정 확인',
    isButtonAble: false,
    uri: '',
  },
  [BEFORE_SECOND_ANNOUNCE]: {
    title: <p>면접이 끝났습니다.</p>,
    getDescription: (date: string) => <p>2차 발표일은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: false,
    uri: '',
  },
  [SECOND_ANNOUNCE]: {
    title: <p>지금은 {<span>발표 및 등록</span>} 기간입니다.</p>,
    getDescription: (date: string) => <p>등록 기간은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '결과 보기',
    isButtonAble: false,
    uri: '',
  },
  [END_DATE]: {
    title: '원서 접수가 끝났습니다.',
    getDescription: () => <p>내년을 기약해 주세요.</p>,
    isHaveTerm: true,
    buttonText: '결과 보기',
    isButtonAble: false,
    uri: '',
  },
};

export const mainProcessNumber = {
  [NOT_APPLICATION_PERIOD]: 1,
  [START_DATE]: 2,
  [BEFORE_FIRST_ANNOUNCE]: 3,
  [FIRST_ANNOUNCE]: 4,
  [INTERVIEW]: 5,
  [SECOND_ANNOUNCE]: 6,
  [END_DATE]: 7,
};

export default mainConstance;
