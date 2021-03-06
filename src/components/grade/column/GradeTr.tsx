import React from 'react';
import * as S from '../style';

const GradeTr = () => {
  return (
    <S.GradeTr>
      <S.TableTitle height={145} padding={0} />
      <div>
        <div>
          <S.GradeTd width={357}>1학년</S.GradeTd>
          <S.GradeTd width={357}>2학년</S.GradeTd>
          <S.GradeTd width={357}>3학년</S.GradeTd>
        </div>
        <div>
          <S.SemesterTd width={178.5}>1학기</S.SemesterTd>
          <S.SemesterTd width={178.5}>2학기</S.SemesterTd>
          <S.SemesterTd width={178.5}>1학기</S.SemesterTd>
          <S.SemesterTd width={178.5}>2학기</S.SemesterTd>
          <S.SemesterTd width={178.5}>1학기</S.SemesterTd>
          <S.SemesterTd width={178.5}>2학기</S.SemesterTd>
        </div>
      </div>
    </S.GradeTr>
  );
};

export default GradeTr;
