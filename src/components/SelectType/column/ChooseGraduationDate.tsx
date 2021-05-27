import React, { FC, useState } from 'react';
import * as S from '../style';
import { YearSelect, MonthSelect } from '../Select';
import { GRADUATION_DATE_EXPLAIN } from '../../../constance/SelectType';

interface Props {
  isToBe: boolean;
  graduation_month: number;
  graduation_year: number;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
}

const ChooseGraduationDate: FC<Props> = ({
  isToBe,
  graduation_month,
  graduation_year,
  setGraduationMonth,
  setGraduationYear,
}) => {
  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>졸업 연월
      </S.LineTitle>
      <YearSelect
        graduation_year={graduation_year}
        setGraduationYear={setGraduationYear}
        disabled={isToBe ? 3 : 1}
      />
      <S.Date>년</S.Date>
      <MonthSelect graduation_month={graduation_month} setGraduationMonth={setGraduationMonth} />
      <S.Date>월</S.Date>
      <S.Explain>
        <span>*</span>
        {GRADUATION_DATE_EXPLAIN}
      </S.Explain>
    </S.Line>
  );
};

export default ChooseGraduationDate;
