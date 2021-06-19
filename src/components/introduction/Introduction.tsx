import React, { FC, useEffect } from 'react';
import * as S from './style';
import SubContents from './SubContents';
import {
  SELFINTRODUCTION,
  INTRODUCTIONEXPLAIN,
  STUDYPLAN,
  STUDYPLANEXPLAIN,
  SCHOOL,
} from '../../constance/introduction';
import {
  GET_SELF_INTRODUCTION,
  GET_STUDY_PLAN,
} from '../../modules/redux/action/Introduction/interface';
import Pagination from '../default/Pagination';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_SELF_INTRODUCTION });
    dispatch({ type: GET_STUDY_PLAN });
  }, []);

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
