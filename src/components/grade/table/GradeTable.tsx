import React, { FC } from 'react';
import * as S from '../style';
import { GradeColumn, CheckColumn, GradeTr } from '../column';
import { GradeType } from '../../../modules/redux/action/grade/interface';

interface Props {
  grade: GradeType;
  setGrade: (payload: { grade: GradeType }) => void;
}

const GradeTable: FC<Props> = ({ setGrade, grade }) => {
  return (
    <S.GradeTable>
      <GradeTr />
      <CheckColumn />
      <GradeColumn title={'국어'} subject={'korean'} setGrade={setGrade} grade={grade} />
      <GradeColumn title={'사회'} subject={'social'} setGrade={setGrade} grade={grade} />
      <GradeColumn title={'역사'} subject={'history'} setGrade={setGrade} grade={grade} />
      <GradeColumn title={'수학'} subject={'math'} setGrade={setGrade} grade={grade} />
      <GradeColumn title={'과학'} subject={'science'} setGrade={setGrade} grade={grade} />
      <GradeColumn title={'기술가정'} subject={'technical'} setGrade={setGrade} grade={grade} />
      <GradeColumn title={'영어'} subject={'english'} setGrade={setGrade} grade={grade} />
    </S.GradeTable>
  );
};

export default GradeTable;
