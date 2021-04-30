import React, { FC } from 'react';
import * as S from './style';

interface Props {
  gender: Array<string>;
}

const InfoGender: FC<Props> = ({ gender }) => {
  return (
    <S.InfoGender>
      {gender.map(arr => {
        return (
          <div>
            <S.CheckCircle>
              <S.CheckedCircle />
            </S.CheckCircle>
            {arr}
          </div>
        );
      })}
    </S.InfoGender>
  );
};

export default InfoGender;
