import React, { FC } from 'react';
import * as S from './style';
import { SCHOOL, SELECTTYPE } from '../../constance/SelectType';
import Pagination from '../default/Pagination';
import SelectLine from './SelectLine';

interface Props {
  socialType: string;
  graduation_month: number;
  graduation_year: number;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setArea: (payload: string) => void;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  setRemark: (payload: string) => void;
}

const SelectType: FC<Props> = ({
  socialType,
  graduation_month,
  graduation_year,
  setType,
  setSocialType,
  setArea,
  setGraduation,
  setGraduationMonth,
  setGraduationYear,
  setRemark,
}) => {
  return (
    <S.SelectType>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{SELECTTYPE}</S.Title>
      </div>
      <SelectLine
        socialType={socialType}
        graduation_month={graduation_month}
        graduation_year={graduation_year}
        setType={setType}
        setSocialType={setSocialType}
        setArea={setArea}
        setGraduation={setGraduation}
        setGraduationMonth={setGraduationMonth}
        setGraduationYear={setGraduationYear}
        setRemark={setRemark}
      />
      <Pagination nowPage={[true, false, false, false, false]} />
    </S.SelectType>
  );
};

export default SelectType;
