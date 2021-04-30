import React, { FC } from 'react';
import * as S from './style';

interface Props {
  title: Array<string>;
}

const InfoGrade: FC<Props> = ({ title }) => {
  return (
    <S.InfoGrade>
      {title.map(arr => {
        return (
          <S.InfoGrade>
            <S.InfoGradeInput />
            <S.InfoGradeTitle>{arr}</S.InfoGradeTitle>
          </S.InfoGrade>
        );
      })}
    </S.InfoGrade>
  );
};

export default InfoGrade;
