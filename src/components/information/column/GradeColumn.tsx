import React, { FC, useMemo } from 'react';
import * as S from '../style';
import Input from '../../default/input';
import { GRADE } from '../../../constance/information';

interface Props {
  stdGrade: string;
  stdNumber: string;
  stdClass: string;
  setInput: (payload: { name: string; value: string }) => void;
}

const GradeColumn: FC<Props> = ({ setInput, stdClass, stdGrade, stdNumber }) => {
  const gradeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };

  const grade = useMemo(() => {
    let gradeDefaultValue = '';
    return GRADE.map(grade => {
      if (grade.name === 'stdGrade') gradeDefaultValue = stdGrade;
      else if (grade.name === 'stdClass') gradeDefaultValue = stdClass;
      else if (grade.name === 'stdNumber') gradeDefaultValue = stdNumber;
      return (
        <>
          <Input
            width={63}
            height={42}
            inputChangeHandler={gradeChangeHandler}
            defaultValue={gradeDefaultValue}
            name={grade.name}
          />
          <S.Unit>{grade.content}</S.Unit>
        </>
      );
    });
  }, [stdGrade, stdClass, stdNumber]);

  return (
    <S.InformationLine width={860}>
      <S.InformationLineTitle>
        <span>*</span>학번
      </S.InformationLineTitle>
      {grade}
    </S.InformationLine>
  );
};

export default GradeColumn;
