import React, { FC } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  totalScore: number;
  setGedScore: (payload: number) => void;
}

const TotalScoreColumn: FC<Props> = ({ setGedScore, totalScore }) => {
  const totalScoreChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGedScore(Number(e.target.value));
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
        defaultValue={String(totalScore)}
        name='totalScore'
      />
      <S.Unit>점</S.Unit>
    </S.InformationLine>
  );
};

export default TotalScoreColumn;
