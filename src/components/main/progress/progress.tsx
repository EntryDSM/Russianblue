import React, { FC } from 'react';
import * as S from '../style';
import ProgressContent from './progressContent';

const Progress: FC = () => {
  return (
    <S.Progress>
      <ProgressContent progressName='원서 접수' isNow={false} isPassed={true} />
      <S.ProgressBlankBar />
      <ProgressContent progressName='원서 접수' isNow={true} isPassed={false} />
      <S.ProgressBlankBar />
      <ProgressContent progressName='원서 접수' isNow={false} isPassed={false} />
      <S.ProgressBlankBar />
      <ProgressContent progressName='원서 접수' isNow={false} isPassed={false} />
      <div />
    </S.Progress>
  );
};

export default Progress;
