import React, { FC } from 'react';
import * as S from './style';
import SubContents from './SubContents';
import {
  SELFINTRODUCTION,
  INTRODUCTIONEXPLAIN,
  STUDYPLAN,
  STUDYPLANEXPLAIN,
  SCHOOL,
} from './Constance';
import Page from '../default/Page';

interface Props {
  setIntroduction: (payload: string) => void;
  setStudyPlan: (payload: string) => void;
}

const Introduction: FC<Props> = () => {
  return (
    <S.AllContents>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>자기소개서 &#38; 학업계획서</S.Title>
      </div>
      <SubContents subTitle={SELFINTRODUCTION} explain={INTRODUCTIONEXPLAIN} />
      <SubContents subTitle={STUDYPLAN} explain={STUDYPLANEXPLAIN} />
      <Page />
    </S.AllContents>
  );
};

export default Introduction;
