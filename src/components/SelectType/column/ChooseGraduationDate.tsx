import React, { FC, useState } from 'react';
import * as S from '../style';
import { YearSelect, MonthSelect } from '../Select';
import { GRADUATION_DATE_EXPLAIN } from '../../../constance/SelectType';

interface Props {
  isProspective: boolean;
  graduationMonth: number;
  graduationYear: number;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
}

const ChooseGraduationDate: FC<Props> = ({
  isProspective,
  graduationMonth,
  graduationYear,
  setGraduationMonth,
  setGraduationYear,
}) => {
  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>졸업 연월
      </S.LineTitle>
      <YearSelect
        graduationYear={graduationYear}
        setGraduationYear={setGraduationYear}
        disabled={isProspective ? 'block' : 'normal'}
      />
      <S.Date>년</S.Date>
      <MonthSelect graduationMonth={graduationMonth} setGraduationMonth={setGraduationMonth} />
      <S.Date>월</S.Date>
      <S.Explain>
        <span>*</span>
        {GRADUATION_DATE_EXPLAIN}
      </S.Explain>
    </S.Line>
  );
};

export default ChooseGraduationDate;
