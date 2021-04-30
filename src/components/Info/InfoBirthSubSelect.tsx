import React, { FC } from 'react';
import * as S from './style';

interface Props {
  type: string;
}

const InfoBirthSubSelect: FC<Props> = ({ type }) => {
  return (
    <S.InfoBirthSubSelect>
      <S.GrayLine />
      {type === 'year' &&
        Array(21)
          .fill(0)
          .map((i, index) => <div>{index + 2001}</div>)}
      {type === 'month' &&
        Array(12)
          .fill(0)
          .map((i, index) => <div>{index + 1}</div>)}
      {type === 'date' &&
        Array(31)
          .fill(0)
          .map((i, index) => <div>{index + 1}</div>)}
    </S.InfoBirthSubSelect>
  );
};

export default InfoBirthSubSelect;
