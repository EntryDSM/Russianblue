import React, { FC } from 'react';
import * as S from './style';

interface Props {
  subTitle: String;
}

const DateInput: FC<Props> = ({ subTitle }) => {
  return (
    <S.DateInput>
      <p>{subTitle}</p>
      <div>
        <S.Input />
        <p>일</p>
      </div>
    </S.DateInput>
  );
};

export default DateInput;
