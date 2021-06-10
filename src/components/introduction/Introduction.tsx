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
import useIntroduction from '../../util/hooks/Introduction';

interface Props {
  setIntroduction: (payload: string) => void;
  setStudyPlan: (payload: string) => void;
}

const Introduction: FC<Props> = () => {
  const { state, setState } = useIntroduction();
  return (
    <S.AllContents>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>자기소개서 {'&'} 학업계획서</S.Title>
      </div>
      <SubContents subTitle={SELFINTRODUCTION} explain={INTRODUCTIONEXPLAIN} />
      <SubContents subTitle={STUDYPLAN} explain={STUDYPLANEXPLAIN} />
      {state.selfIntroduction && state.studyPlan && (
        <Pagination nowPage={[false, false, false, true, false]} isNextPage />
      )}
      {!(state.selfIntroduction && state.studyPlan) && (
        <Pagination nowPage={[false, false, false, true, false]} />
      )}
    </S.AllContents>
  );
};

export default Introduction;
