import React, { FC, useMemo } from 'react';
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

const Introduction: FC<Props> = ({ selfIntroduction, studyPlan }) => {
  const pagination = useMemo(() => {
    if (selfIntroduction !== '') {
      if (studyPlan !== '') {
        return <Pagination prevPagePath={'/grade'} nextPagePath={'/preview'} isNextPage />;
        // 검정고시라면 <Pagination prevPagePath={'/information'} nextPagePath={'/preview'} isQualification isNextPage />
      }
    } else {
      return <Pagination prevPagePath={'/grade'} />;
      // 검정고시라면 <Pagination prevPagePath={'/information'} nextPagePath={'/preview'} isQualification />
    }
  }, [selfIntroduction, studyPlan]);

  return (
    <S.AllContents>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>자기소개서 {'&'} 학업계획서</S.Title>
      </div>
      <SubContents subTitle={SELFINTRODUCTION} explain={INTRODUCTIONEXPLAIN} />
      <SubContents subTitle={STUDYPLAN} explain={STUDYPLANEXPLAIN} />
      {pagination}
    </S.AllContents>
  );
};

export default Introduction;
