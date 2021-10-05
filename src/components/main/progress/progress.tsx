import React, { FC } from 'react';
import * as S from '../style';
import ProgressContent from './progressContent';
import {
  APPLICATION_PERIOD,
  FIRST_ANNOUNCEMENT,
  INTERVIEW,
  mainProcessNumber,
  SECOND_ANNOUNCEMENT,
  START_DATE,
  statusType,
} from '../../../modules/redux/reducer/status/mainConstance';
interface Props {
  status: statusType;
  date: string;
}

const SECOND_DATE = 86400000;

const Progress: FC<Props> = ({ status, date }) => {
  const getLeftDate = (date: string): number => {
    const dateObj = new Date(date);
    const nowDateObj = new Date();
    const leftSecond = dateObj.getTime() - nowDateObj.getTime();
    return Math.floor(leftSecond / SECOND_DATE);
  };
  return (
    <S.Progress>
      <ProgressContent
        progressName='원서 접수'
        isNow={status === APPLICATION_PERIOD}
        isPassed={mainProcessNumber[status] >= 2}
        leftDate={getLeftDate(date)}
      />
      <S.ProgressBlankBar />
      <ProgressContent
        progressName='1차 발표'
        isNow={status === FIRST_ANNOUNCEMENT}
        isPassed={mainProcessNumber[status] >= 4}
        leftDate={getLeftDate(date)}
      />
      <S.ProgressBlankBar />
      <ProgressContent
        progressName='면접'
        isNow={status === INTERVIEW}
        isPassed={mainProcessNumber[status] >= 5}
        leftDate={getLeftDate(date)}
      />
      <S.ProgressBlankBar />
      <ProgressContent
        progressName='발표 및 접수'
        isNow={status === SECOND_ANNOUNCEMENT}
        isPassed={mainProcessNumber[status] >= 6}
        leftDate={getLeftDate(date)}
      />
      <div />
    </S.Progress>
  );
};

export default Progress;
