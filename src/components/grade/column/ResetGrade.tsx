import React, { FC, useMemo, useState } from 'react';
import * as S from '../style';
import { GRADE } from '../../../constance/grade';
import { GradeType, semesterType } from '../../../modules/redux/action/grade/interface';

interface Props {
  grade: GradeType;
  isResetZeroClick: semesterType;
  setIsResetZeroClick: React.Dispatch<React.SetStateAction<semesterType>>;
  setGrade: (payload: { grade: GradeType }) => void;
}

const isCheckInit = {
  a: false,
  b: false,
  c: false,
  d: false,
  e: false,
};

const ResetGrade: FC<Props> = ({ isResetZeroClick, setIsResetZeroClick, grade, setGrade }) => {
  const [isClick, setIsClick] = useState(isCheckInit);
  const gradeBtnClickHandler = e => {
    const gradeId = e.target.dataset.id;
    const score = gradeId.toUpperCase().repeat(5);
    setIsClick({ ...isCheckInit, [gradeId]: true });
    setIsResetZeroClick({
      freshmanFirst: false,
      freshmanSecond: false,
      sophomoreFirst: false,
      sophomoreSecond: false,
      seniorFirst: false,
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
        <S.GradeBtn
          key={grade.id}
          data-id={grade.id}
          onClick={gradeBtnClickHandler}
          isClick={isClick[grade.id]}
        >
          {grade.grade}
        </S.GradeBtn>
      );
    });
  }, [isClick]);

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
