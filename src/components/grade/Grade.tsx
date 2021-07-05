import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import { SCHOOL, ENTERGRADE, GradeType } from '../../constance/grade';
import Pagination from '../default/Pagination';
import { ResetGrade } from './column';
import { VolunteerTable, GradeTable } from './table';
import { useSelectState } from '../../util/hooks/default';
import useSelectType from '../../util/hooks/selectType';

interface Props {
  volunteerTime: number;
  absence: number;
  leave: number;
  lateness: number;
  truancy: number;
  grade: GradeType;
  setInput: (payload: { name: string; value: number }) => void;
  setGrade: (payload: { grade: GradeType }) => void;
}

const Grade: FC<Props> = ({
  setInput,
  setGrade,
  grade,
  volunteerTime,
  absence,
  leave,
  lateness,
  truancy,
}) => {
  const graduated = useSelectState().selectType.educationalStatus;
  const [isResetZeroClick, setIsResetZeroClick] = useState({
    freshmanFirst: false,
    freshmanSecond: false,
    sophomoreFirst: false,
    sophomoreSecond: false,
    seniorFirst: false,
    seniorSecond: false,
  });
  const [isGraduated, setIsGraduated] = useState<boolean>(false);
  const educationalStatus = useSelectType().state.educationalStatus;

  useEffect(() => {
    if (graduated === 'PROSPECTIVE_GRADUATE') setIsGraduated(true);
    else if (graduated === 'GRADUATE') setIsGraduated(false);
  }, [graduated]);

  const pagination = useMemo(() => {
    if (
      volunteerTime &&
      absence &&
      leave &&
      lateness &&
      truancy &&
      grade.korean !== 'XXXXXX' &&
      grade.english !== 'XXXXXX' &&
      grade.history !== 'XXXXXX' &&
      grade.math !== 'XXXXXX' &&
      grade.science !== 'XXXXXX' &&
      grade.social !== 'XXXXXX' &&
      grade.technical !== 'XXXXXX'
    ) {
      return <Pagination prevPagePath={'/'} nextPagePath={'/introduction'} isNextPage />;
    } else {
      return <Pagination prevPagePath={'/'} />;
    }
  }, [volunteerTime, absence, leave, lateness, truancy, grade]);

  return (
    <S.Grade>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{ENTERGRADE}</S.Title>
      </div>
      <S.TableName>봉사 {'&'} 출석</S.TableName>
      <VolunteerTable
        setInput={setInput}
        volunteerTime={volunteerTime}
        absence={absence}
        leave={leave}
        lateness={lateness}
        truancy={truancy}
      />
      <ResetGrade setIsResetZeroClick={setIsResetZeroClick} grade={grade} setGrade={setGrade} />
      <GradeTable
        isResetZeroClick={isResetZeroClick}
        setIsResetZeroClick={setIsResetZeroClick}
        setGrade={setGrade}
        grade={grade}
        isGraduated={isGraduated}
      />
      {pagination}
    </S.Grade>
  );
};

export default Grade;
