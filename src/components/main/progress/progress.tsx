import React, { FC } from 'react';
import * as S from '../style';
import ProgressContent from './progressContent';
import { mainProcessNumber } from '../../../modules/redux/reducer/status/mainConstance';
interface Props {
  status: string;
}

const Progress: FC<Props> = ({ status }) => {
  return (
    <S.Progress>
      <ProgressContent
        progressName='원서 접수'
        isNow={status === 'makeApplication'}
        isPassed={mainProcessNumber[status] >= 2}
      />
      <S.ProgressBlankBar />
      <ProgressContent
        progressName='1차 발표'
        isNow={status === 'firstAnnouncement'}
        isPassed={mainProcessNumber[status] >= 4}
      />
      <S.ProgressBlankBar />
      <ProgressContent
        progressName='면접'
        isNow={status === 'meeting'}
        isPassed={mainProcessNumber[status] >= 5}
      />
      <S.ProgressBlankBar />
      <ProgressContent
        progressName='발표 및 접수'
        isNow={status === 'finalAnnouncement'}
        isPassed={mainProcessNumber[status] >= 6}
      />
      <div />
    </S.Progress>
  );
};

export default Progress;
