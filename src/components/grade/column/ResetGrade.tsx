import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from '../style';
import { GRADE, GradeType, SemesterType } from '../../../constance/grade';
import { useSelectState } from '../../../util/hooks/default';

interface Props {
  grade: GradeType;
  setIsResetZeroClick: React.Dispatch<React.SetStateAction<SemesterType>>;
  setGrade: (payload: { grade: GradeType }) => void;
}

const isCheckInit = {
  a: false,
  b: false,
  c: false,
  d: false,
  e: false,
};

const ResetGrade: FC<Props> = ({ setIsResetZeroClick, grade, setGrade }) => {
  const [isClick, setIsClick] = useState(isCheckInit);
  const graduated = useSelectState().selectType.educationalStatus;
  const gradeBtnClickHandler = e => {
    const gradeId = e.target.dataset.id;
    const score =
      graduated === 'PROSPECTIVE_GRADUATE'
        ? gradeId.toUpperCase().repeat(5) + 'X'
        : gradeId.toUpperCase().repeat(6);
    setIsClick({ ...isCheckInit, [gradeId]: true });
    setIsResetZeroClick({
      freshmanFirst: false,
      freshmanSecond: false,
      sophomoreFirst: false,
      sophomoreSecond: false,
      seniorFirst: false,
      seniorSecond: false,
    });
    setGrade({
      grade: {
        ...grade,
        korean: score,
        social: score,
        history: score,
        math: score,
        science: score,
        technical: score,
        english: score,
      },
    });
  };
  const gradeBtn = useMemo(() => {
    return GRADE.map(grade => {
      return (
        <S.GradeBtn key={grade.id} isClick={isClick[grade.id]}>
          <span onClick={gradeBtnClickHandler} data-id={grade.id}>
            {grade.grade}
          </span>
        </S.GradeBtn>
      );
    });
  }, [isClick, graduated]);

  return (
    <S.ResetGrade>
      <S.TableName>성적입력</S.TableName>
      <div>
        <S.ResetTitle>전체 성적 초기화</S.ResetTitle>
        {gradeBtn}
      </div>
    </S.ResetGrade>
  );
};
export default ResetGrade;
