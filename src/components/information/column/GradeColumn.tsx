import React from 'react';
import * as S from '../style';
import Input from '../../default/input';
import { GRADE } from '../../../constance/information';

const GradeColumn = () => {
  const gradeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const classChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const numberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <S.InformationLine width={860}>
      <S.InformationLineTitle>
        <span>*</span>학번
      </S.InformationLineTitle>
      {GRADE.map(grade => {
        return (
          <>
            <Input
              width={63}
              height={42}
              inputChangeHandler={
                grade.name === 'grade'
                  ? gradeChangeHandler
                  : grade.name === 'class'
                  ? classChangeHandler
                  : numberChangeHandler
              }
              name={grade.name}
            />
            <S.Unit>{grade.content}</S.Unit>
          </>
        );
      })}
    </S.InformationLine>
  );
};

export default GradeColumn;
