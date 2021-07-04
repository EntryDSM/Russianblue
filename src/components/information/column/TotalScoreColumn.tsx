import React, { FC, useMemo } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  totalScore: string;
  setGedScore: (payload: string) => void;
}

const TotalScoreColumn: FC<Props> = ({ setGedScore, totalScore }) => {
  const totalScoreChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGedScore(e.target.value);
  };

  const totalScoreInput = useMemo(() => {
    return (
      <Input
        width={114}
        height={42}
        inputChangeHandler={totalScoreChangeHandler}
        defaultValue={String(Number(totalScore) * 6)}
        maxValue={600}
        minValue={360}
        name='totalScore'
        key={totalScore}
      />
    );
  }, [totalScore]);

  return (
    <S.InformationLine width={904}>
      <S.InformationLineTitle>
        <span>*</span>검정고시 총점
      </S.InformationLineTitle>
      {totalScoreInput}
      <S.Unit>점</S.Unit>
    </S.InformationLine>
  );
};

export default TotalScoreColumn;
