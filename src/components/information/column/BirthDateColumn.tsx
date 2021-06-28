import React, { FC, useEffect } from 'react';
import * as S from '../style';
import { YearSelect, MonthSelect, DateSelect } from '../select';

interface Props {
  width: number;
  birthDay: string;
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
  birthDay,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
}) => {
  useEffect(() => {
    const birthYear = birthDay ? Number(birthDay.slice(0, 4)) : 2006;
    const birthMonth = birthDay ? Number(birthDay.slice(4, 6)) : 1;
    const birthDate = birthDay ? Number(birthDay.slice(6)) : 1;
    setBirthYear(birthYear);
    setBirthMonth(birthMonth);
    setBirthDate(birthDate);
  }, [birthDay]);

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
