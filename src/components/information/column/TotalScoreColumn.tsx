import React, { FC } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  setInput: (payload: { name: string; value: string }) => void;
}

const TotalScoreColumn: FC<Props> = ({ setInput }) => {
  const totalScoreChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };

  return (
    <S.InformationLine width={904}>
      <S.InformationLineTitle>
        <span>*</span>검정고시 총점
      </S.InformationLineTitle>
      <Input
        width={114}
        height={42}
        inputChangeHandler={totalScoreChangeHandler}
        name='totalScore'
      />
      <S.Unit>점</S.Unit>
    </S.InformationLine>
  );
};

export default TotalScoreColumn;
