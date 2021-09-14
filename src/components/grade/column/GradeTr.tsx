import React from 'react';
import * as S from '../style';

const GradeTr = () => {
  return (
    <S.GradeTr>
      <S.TableTitle height={145} padding={0} />
      <div>
        <div>
          <S.GradeTd width={535.5}>3학년</S.GradeTd>
          <S.GradeTd width={535.5}>성적이 있는 최근 학기</S.GradeTd>
        </div>
        <div>
          <S.SemesterTd width={267.75}>2학기</S.SemesterTd>
          <S.SemesterTd width={267.75}>1학기</S.SemesterTd>
          <S.SemesterTd width={267.75}>직전 학기</S.SemesterTd>
          <S.SemesterTd width={267.75}>직전전 학기</S.SemesterTd>
        </div>
      </div>
    </S.GradeTr>
  );
};

export default GradeTr;
