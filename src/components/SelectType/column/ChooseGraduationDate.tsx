import React, { FC, useEffect, useMemo } from 'react';
import * as S from '../style';
import { YearSelect, MonthSelect } from '../Select';
import { GRADUATION_DATE_EXPLAIN } from '../../../constance/SelectType';

interface Props {
  graduatedAt: string;
  isProspective: boolean;
  educationalStatus: string;
  graduationMonth: number;
  graduationYear: number;
  applicationRemark: string;
  applicationType: string;
  isDaejeon: boolean;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  autoSaveSelectType: (payload: {
    educationalStatus: string;
    applicationType: string;
    isDaejeon: boolean;
    applicationRemark: string;
    graduatedAt: string;
  }) => void;
}

const ChooseGraduationDate: FC<Props> = ({
  isProspective,
  educationalStatus,
  setGraduationMonth,
  setGraduationYear,
  graduationMonth,
  graduationYear,
  graduatedAt,
  applicationRemark,
  applicationType,
  isDaejeon,
  autoSaveSelectType,
}) => {
  useEffect(() => {
    if (graduatedAt) {
      const graduatedYear = graduatedAt ? graduatedAt.slice(0, 4) : 2022;
      const graduatedMonth = graduatedAt ? graduatedAt.slice(4) : 3;
      setGraduationYear(Number(graduatedYear));
      setGraduationMonth(Number(graduatedMonth));
    }
  }, [graduatedAt]);

  const graduationDateTitle = useMemo(() => {
    if (educationalStatus === 'QUALIFICATION_EXAM')
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
  }, [educationalStatus]);

  const explain = useMemo(() => {
    if (educationalStatus === 'QUALIFICATION_EXAM') return;
    else
      return (
        <S.Explain>
          <span>*</span>
          {GRADUATION_DATE_EXPLAIN}
        </S.Explain>
      );
  }, [educationalStatus]);

  return (
    <S.Line>
      {graduationDateTitle}
      <YearSelect
        graduationYear={graduationYear}
        setGraduationYear={setGraduationYear}
        disabled={isProspective ? 'block' : 'normal'}
        applicationType={applicationType}
        isDaejeon={isDaejeon}
        educationalStatus={educationalStatus}
        graduationMonth={graduationMonth}
        applicationRemark={applicationRemark}
        autoSaveSelectType={autoSaveSelectType}
      />
      <S.Date>년</S.Date>
      <MonthSelect
        graduationMonth={graduationMonth}
        setGraduationMonth={setGraduationMonth}
        applicationType={applicationType}
        isDaejeon={isDaejeon}
        educationalStatus={educationalStatus}
        graduationYear={graduationYear}
        applicationRemark={applicationRemark}
        autoSaveSelectType={autoSaveSelectType}
      />
      <S.Date>월</S.Date>
      {explain}
    </S.Line>
  );
};

export default ChooseGraduationDate;
