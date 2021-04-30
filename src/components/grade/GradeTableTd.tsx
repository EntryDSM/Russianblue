import React, { FC } from 'react';
import * as S from './style';

interface Props {
  title: string;
}

const GradeTableTd: FC<Props> = ({ title }) => {
  return (
    <tr>
      <S.FristLine>{title}</S.FristLine>
      {Array(5)
        .fill(0)
        .map(arr => (
          <td>
            <S.GradeBtn>{arr}</S.GradeBtn>
          </td>
        ))}
    </tr>
  );
};

export default GradeTableTd;
