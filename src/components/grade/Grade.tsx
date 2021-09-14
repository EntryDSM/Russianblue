import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import { SCHOOL, ENTERGRADE, GradeType } from '../../constance/grade';
import Pagination from '../default/Pagination';
import { ResetGrade } from './column';
import { VolunteerTable, GradeTable } from './table';
import { useSelectState } from '../../util/hooks/default';
import ToastPopUp from '../default/toastPopUp/ToastPopUp';

interface Props {
  volunteerTime: number;
  absence: number;
  leave: number;
  lateness: number;
  truancy: number;
  grade: GradeType;
  isSuccessSaveGrade: boolean;
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
  isSuccessSaveGrade,
}) => {
  const graduated = useSelectState().selectType.educationalStatus;
  const [isGraduated, setIsGraduated] = useState<boolean>(false);

  useEffect(() => {
    if (graduated === 'PROSPECTIVE_GRADUATE') setIsGraduated(true);
    else if (graduated === 'GRADUATE') setIsGraduated(false);
  }, [graduated]);

  const pagination = useMemo(() => {
    if (
      volunteerTime &&
      grade.korean !== 'XXXXXX' &&
      grade.english !== 'XXXXXX' &&
      grade.history !== 'XXXXXX' &&
      grade.math !== 'XXXXXX' &&
      grade.science !== 'XXXXXX' &&
      grade.social !== 'XXXXXX' &&
      grade.technical !== 'XXXXXX'
    ) {
      return <Pagination prevPagePath={'/information'} nextPagePath={'/introduction'} isNextPage />;
    } else {
      return <Pagination prevPagePath={'/information'} />;
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
      <ResetGrade grade={grade} setGrade={setGrade} />
      <GradeTable setGrade={setGrade} grade={grade} isGraduated={isGraduated} />
      {pagination}
      <ToastPopUp isSuccessSave={isSuccessSaveGrade} />
    </S.Grade>
  );
};

export default Grade;
