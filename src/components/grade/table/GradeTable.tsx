import React, { FC } from 'react';
import * as S from '../style';
import { GradeColumn, CheckColumn, GradeTr } from '../column';
import { GradeType, SemesterType, SUBJECTANDTITLE } from '../../../constance/grade';

interface Props {
  isGraduated: boolean;
  grade: GradeType;
  isResetZeroClick: SemesterType;
  setIsResetZeroClick: React.Dispatch<React.SetStateAction<SemesterType>>;
  setGrade: (payload: { grade: GradeType }) => void;
}

const GradeTable: FC<Props> = ({
  isResetZeroClick,
  setIsResetZeroClick,
  setGrade,
  grade,
  isGraduated,
}) => {
  return (
    <S.GradeTable>
      <GradeTr />
      <CheckColumn
        isResetZeroClick={isResetZeroClick}
        setIsResetZeroClick={setIsResetZeroClick}
        grade={grade}
        setGrade={setGrade}
        isGraduated={isGraduated}
      />
      {SUBJECTANDTITLE.map(data => {
        return (
          <GradeColumn
            isGraduated={isGraduated}
            title={data.title}
            subject={data.subject}
            setGrade={setGrade}
            grade={grade}
            key={data.subject}
          />
        );
      })}
    </S.GradeTable>
  );
};

export default GradeTable;
