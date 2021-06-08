import React from 'react';
import * as S from '../style';

const CheckColumn = () => {
  const btn = [...Array(5)].map(i => i + 1);
  return (
    <S.GradeColumn>
      <S.TableTitle height={75} padding={28}>
        미이수학기
      </S.TableTitle>
      {btn.map(i => {
        return (
          <S.GradeTableTd key={i} border>
            <S.CheckBtnBox data-id={i}>
              <S.CheckedBtnBox />
            </S.CheckBtnBox>
          </S.GradeTableTd>
        );
      })}
    </S.GradeColumn>
  );
};

export default CheckColumn;
