import React, { useMemo, useState } from 'react';
import * as S from '../style';
import { GRADE } from '../../../constance/grade';

const isCheckInit = {
  a: false,
  b: false,
  c: false,
  d: false,
  e: false,
};

const ResetGrade = () => {
  const [isClick, setIsClick] = useState(isCheckInit);
  const gradeBtnClickHandler = e => {
    const gradeId = e.target.dataset.id;
    setIsClick({ ...isCheckInit, [gradeId]: true });
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
