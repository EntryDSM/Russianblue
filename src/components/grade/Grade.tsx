import React from 'react';
import * as S from './style';
import { SCHOOL, ENTERGRADE } from './Constance';
import { VolunteerTable, GradeTable } from './';
import Page from '../default/Page';

const Grade = () => {
  return (
    <S.Grade>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{ENTERGRADE}</S.Title>
      </div>
      <VolunteerTable />
      <S.EnterGradeTitle>
        <p>성적입력</p>
        <div>
          <p>전체 성적 초기화</p>
          <S.AllGradeBtn>A</S.AllGradeBtn>
          <S.AllGradeBtn>B</S.AllGradeBtn>
          <S.AllGradeBtn>C</S.AllGradeBtn>
          <S.AllGradeBtn>D</S.AllGradeBtn>
          <S.AllGradeBtn>E</S.AllGradeBtn>
        </div>
      </S.EnterGradeTitle>
      <GradeTable />
      <Page />
    </S.Grade>
  );
};

export default Grade;
