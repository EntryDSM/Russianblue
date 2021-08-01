import React from 'react';
import { processType } from './interface';

export const START_DATE = 'START_DATE' as const;
export const END_DATE = 'END_DATE' as const;
export const FIRST_ANNOUNCEMENT = 'FIRST_ANNOUNCEMENT' as const;
export const BEFORE_INTERVIEW = 'BEFORE_INTERVIEW' as const;
export const INTERVIEW = 'INTERVIEW' as const;
export const SECOND_ANNOUNCEMENT = 'SECOND_ANNOUNCEMENT' as const;
export const BEFORE_SECOND_ANNOUNCE = 'BEFORE_SECOND_ANNOUNCE' as const;
export const NOT_APPLICATION_PERIOD = 'NOT_APPLICATION_PERIOD' as const;
export const BEFORE_FIRST_ANNOUNCE = 'BEFORE_FIRST_ANNOUNCE' as const;
export const END = 'END' as const;

export type statusType =
  | typeof START_DATE
  | typeof END_DATE
  | typeof FIRST_ANNOUNCEMENT
  | typeof SECOND_ANNOUNCEMENT
  | typeof INTERVIEW
  | typeof NOT_APPLICATION_PERIOD
  | typeof BEFORE_FIRST_ANNOUNCE
  | typeof BEFORE_SECOND_ANNOUNCE
  | typeof BEFORE_INTERVIEW
  | typeof END;

const mainConstance: Record<statusType, processType> = {
  [NOT_APPLICATION_PERIOD]: {
    title: <p>지금은 원서접수기간이 아닙니다.</p>,
    getDescription: (date: string) => <p>원서접수 기간은 {<span>{date}</span>}에 시작됩니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: false,
    uri: '/',
  },
  [START_DATE]: {
    title: <p>지금은 {<span>원서 작성</span>} 기간입니다.</p>,
    getDescription: (date: string) => <p>원서 접수 기간은 {<span>{date}</span>}까지 입니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: true,
    uri: '/select-type',
  },
  [BEFORE_FIRST_ANNOUNCE]: {
    title: <p>원서 접수가 끝났습니다.</p>,
    getDescription: (date: string) => <p>1차 발표일은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '원서 작성',
    isButtonAble: false,
    uri: '',
  },
  [FIRST_ANNOUNCEMENT]: {
    title: <p>지금은 {<span>1차 발표</span>} 기간입니다.</p>,
    getDescription: () => '학교 페이지에서 결과를 확인해 주세요.',
    isHaveTerm: true,
    buttonText: '1차 발표 결과',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
  [BEFORE_INTERVIEW]: {
    title: <p>면접 진행 전입니다.</p>,
    getDescription: (date: string) => <p>면접 기간은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '면접 일정 확인',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
  [INTERVIEW]: {
    title: <p>지금은 {<span>면접</span>} 기간입니다.</p>,
    getDescription: (date: string) => <p>면접 기간은 {<span>{date}</span>}입니다. </p>,
    isHaveTerm: true,
    buttonText: '면접 일정 확인',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
  [BEFORE_SECOND_ANNOUNCE]: {
    title: <p>면접이 끝났습니다.</p>,
    getDescription: (date: string) => <p>2차 발표일은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '발표 일정 확인',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
  [SECOND_ANNOUNCEMENT]: {
    title: <p>지금은 {<span>발표 및 등록</span>} 기간입니다.</p>,
    getDescription: (date: string) => <p>등록 기간은 {<span>{date}</span>}입니다.</p>,
    isHaveTerm: true,
    buttonText: '결과 보기',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
  [END_DATE]: {
    title: <p>원서 접수가 마감되었습니다.</p>,
    getDescription: () => '',
    isHaveTerm: true,
    buttonText: '학교 보기',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
  [END]: {
    title: <p>2022년 지원이 끝났습니다.</p>,
    getDescription: () => <p>내년을 기약해 주세요.</p>,
    isHaveTerm: true,
    buttonText: '학교 보기',
    isButtonAble: true,
    uri: 'https://dsmhs.djsch.kr/main.do',
    isOutsideUrl: true,
  },
};

export const mainProcessNumber = {
  [NOT_APPLICATION_PERIOD]: 1,
  [START_DATE]: 2,
  [END_DATE]: 3,
  [BEFORE_FIRST_ANNOUNCE]: 4,
  [FIRST_ANNOUNCEMENT]: 5,
  [INTERVIEW]: 6,
  [SECOND_ANNOUNCEMENT]: 7,
};

export default mainConstance;
