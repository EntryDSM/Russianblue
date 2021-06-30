import React, { FC } from 'react';
import * as S from '../style';
import { YearSelect, MonthSelect, DateSelect } from '../select';

interface Props {
  width: number;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
}

const BirthDateColumn: FC<Props> = ({
  width,
  birthYear,
  birthMonth,
  birthDate,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
}) => {
  return (
    <S.InformationLine width={width}>
      <S.InformationLineTitle>
        <span>*</span>생년월일
      </S.InformationLineTitle>
      <YearSelect birthYear={birthYear} setBirthYear={setBirthYear} />
      <S.Unit>년</S.Unit>
      <MonthSelect birthMonth={birthMonth} setBirthMonth={setBirthMonth} />
      <S.Unit>월</S.Unit>
      <DateSelect
        birthDate={birthDate}
        birthYear={birthYear}
        birthMonth={birthMonth}
        setBirthDate={setBirthDate}
      />
      <S.Unit>일</S.Unit>
    </S.InformationLine>
  );
};

export default BirthDateColumn;
