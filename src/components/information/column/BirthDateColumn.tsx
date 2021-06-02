import React from 'react';
import * as S from '../style';
import { YearSelect, MonthSelect, DateSelect } from '../select';

const BirthDateColumn = () => {
  return (
    <S.InformationLine width={860}>
      <S.InformationLineTitle>
        <span>*</span>생년월일
      </S.InformationLineTitle>
      <YearSelect />
      <S.Unit>년</S.Unit>
      <MonthSelect />
      <S.Unit>월</S.Unit>
      <DateSelect />
      <S.Unit>일</S.Unit>
    </S.InformationLine>
  );
};

export default BirthDateColumn;
