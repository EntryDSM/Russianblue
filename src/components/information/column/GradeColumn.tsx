import React, { FC, useMemo } from 'react';
import * as S from '../style';
import Input from '../../default/input';
import { GRADE } from '../../../constance/information';

interface Props {
  setInput: (payload: { name: string; value: string }) => void;
}

const GradeColumn: FC<Props> = ({ setInput }) => {
  const gradeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };

  const grade = useMemo(() => {
    return GRADE.map(grade => {
      return (
        <>
          <Input width={63} height={42} inputChangeHandler={gradeChangeHandler} name={grade.name} />
          <S.Unit>{grade.content}</S.Unit>
        </>
      );
    });
  }, []);

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
