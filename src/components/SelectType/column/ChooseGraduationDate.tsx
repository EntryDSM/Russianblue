import React, { FC, useEffect, useMemo } from 'react';
import * as S from '../style';
import { YearSelect, MonthSelect } from '../Select';
import { GRADUATION_DATE_EXPLAIN } from '../../../constance/SelectType';

interface Props {
  graduated_at: string;
  isProspective: boolean;
  educational_status: string;
  graduationMonth: number;
  graduationYear: number;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
}

const ChooseGraduationDate: FC<Props> = ({
  isProspective,
  educational_status,
  graduationMonth,
  graduationYear,
  setGraduationMonth,
  setGraduationYear,
  graduated_at,
}) => {
  useEffect(() => {
    if (graduated_at) {
      const graduatedYear = graduated_at.slice(0, 4);
      const graduatedMonth = graduated_at.slice(4);
      setGraduationYear(Number(graduatedYear));
      setGraduationMonth(Number(graduatedMonth));
    }
  }, [graduated_at]);

  const graduationDateTitle = useMemo(() => {
    if (educational_status === 'QUALIFICATION_EXAM')
      return (
        <S.LineTitle>
          <span>*</span>합격 연월
        </S.LineTitle>
      );
    else
      return (
        <S.LineTitle>
          <span>*</span>졸업 연월
        </S.LineTitle>
      );
  }, [educational_status]);

  const explain = useMemo(() => {
    if (educational_status === 'QUALIFICATION_EXAM') return;
    else
      return (
        <S.Explain>
          <span>*</span>
          {GRADUATION_DATE_EXPLAIN}
        </S.Explain>
      );
  }, [educational_status]);

  return (
    <S.Line>
      {graduationDateTitle}
      <YearSelect
        graduationYear={graduationYear}
        setGraduationYear={setGraduationYear}
        disabled={isProspective ? 'block' : 'normal'}
      />
      <S.Date>년</S.Date>
      <MonthSelect graduationMonth={graduationMonth} setGraduationMonth={setGraduationMonth} />
      <S.Date>월</S.Date>
      {explain}
    </S.Line>
  );
};

export default ChooseGraduationDate;
