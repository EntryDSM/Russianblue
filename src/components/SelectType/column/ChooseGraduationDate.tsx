import React from 'react';
import * as S from '../style';
import { YearSelect, MonthSelect } from '../Select';
import { GRADUATION_DATE_EXPLAIN } from '../../../constance/SelectType';

const ChooseGraduationDate = () => {
  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>졸업 연월
      </S.LineTitle>
      <YearSelect active={1} />
      <S.Date>년</S.Date>
      <MonthSelect active={1} />
      <S.Date>월</S.Date>
      <S.Explain>
        <span>*</span>
        {GRADUATION_DATE_EXPLAIN}
      </S.Explain>
    </S.Line>
  );
};

export default ChooseGraduationDate;
