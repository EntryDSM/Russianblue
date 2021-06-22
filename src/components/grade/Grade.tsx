import React, { FC, useState } from 'react';
import * as S from './style';
import { SCHOOL, ENTERGRADE } from '../../constance/grade';
import Pagination from '../default/Pagination';
import { ResetGrade } from './column';
import { VolunteerTable, GradeTable } from './table';
import { GradeType } from '../../modules/redux/action/grade/interface';

interface Props {
  grade: GradeType;
  setInput: (payload: { name: string; value: number }) => void;
  setGrade: (payload: { grade: GradeType }) => void;
}

const Grade: FC<Props> = ({ setInput, setGrade, grade }) => {
  const [isResetZeroClick, setIsResetZeroClick] = useState({
    freshmanFirst: false,
    freshmanSecond: false,
    sophomoreFirst: false,
    sophomoreSecond: false,
    seniorFirst: false,
  });
  return (
    <S.Grade>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{ENTERGRADE}</S.Title>
      </div>
      <S.TableName>봉사 {'&'} 출석</S.TableName>
      <VolunteerTable setInput={setInput} />
      <ResetGrade
        isResetZeroClick={isResetZeroClick}
        setIsResetZeroClick={setIsResetZeroClick}
        grade={grade}
        setGrade={setGrade}
      />
      <GradeTable
        isResetZeroClick={isResetZeroClick}
        setIsResetZeroClick={setIsResetZeroClick}
        setGrade={setGrade}
        grade={grade}
      />
      <Pagination />
    </S.Grade>
  );
};

export default Grade;
