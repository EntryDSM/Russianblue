import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from '../style';
import Input from '../../default/input';
import { GRADE } from '../../../constance/information';

interface Props {
  stdNumber: string;
  stdClass: string;
  setInput: (payload: { name: string; value: string }) => void;
}

const GradeColumn: FC<Props> = ({ setInput, stdClass, stdNumber }) => {
  const gradeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };

  const numberMaxLength = number => {
    if (number ? number.length > 2 : false) {
      return number.slice(0, 2);
    } else return number;
  };

  const showGrade = useMemo(() => {
    return GRADE.map(grades => {
      return (
        <>
          <Input
            width={63}
            height={42}
            inputChangeHandler={gradeChangeHandler}
            value={
              grades.name === 'stdGrade'
                ? '3'
                : grades.name === 'stdClass'
                ? numberMaxLength(stdClass)
                : numberMaxLength(stdNumber)
            }
            name={grades.name}
            disable={grades.name === 'stdGrade' ? true : false}
          />
          <S.Unit>{grades.content}</S.Unit>
        </>
      );
    });
  }, [setInput, stdNumber, stdClass]);

  return (
    <S.InformationLine width={860}>
      <S.InformationLineTitle>
        <span>*</span>학번
      </S.InformationLineTitle>
      {showGrade}
    </S.InformationLine>
  );
};

export default GradeColumn;
