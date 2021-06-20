import React, { FC } from 'react';
import * as S from './style';
import SubContents from './SubContents';
import {
  SELFINTRODUCTION,
  INTRODUCTIONEXPLAIN,
  STUDYPLAN,
  STUDYPLANEXPLAIN,
  SCHOOL,
} from '../../constance/introduction';
import Pagination from '../default/Pagination';

interface Props {
  selfIntroduction: string;
  studyPlan: string;
  setIntroduction: (payload: string) => void;
  setStudyPlan: (payload: string) => void;
}

const Introduction: FC<Props> = ({
  selfIntroduction,
  studyPlan,
  setIntroduction,
  setStudyPlan,
}) => {
  return (
    <S.AllContents>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>자기소개서 {'&'} 학업계획서</S.Title>
      </div>
      <SubContents
        subTitle={SELFINTRODUCTION}
        explain={INTRODUCTIONEXPLAIN}
        setIntroduction={setIntroduction}
      />
      <SubContents subTitle={STUDYPLAN} explain={STUDYPLANEXPLAIN} setStudyPlan={setStudyPlan} />
      {selfIntroduction && studyPlan && (
        <Pagination nowPage={[false, false, false, true, false]} isNextPage />
      )}
      {!(selfIntroduction && studyPlan) && (
        <Pagination nowPage={[false, false, false, true, false]} />
      )}
    </S.AllContents>
  );
};

export default Introduction;
