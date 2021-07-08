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
import { useSelectState } from '../../util/hooks/default';
import ToastPopUp from '../default/toastPopUp/ToastPopUp';

interface Props {
  selfIntroduction: string;
  studyPlan: string;
  isSuccessSaveSelfIntroduction: boolean;
  isSuccessSaveStudyPlan: boolean;
  setIntroduction: (payload: string) => void;
  setStudyPlan: (payload: string) => void;
}
const Introduction: FC<Props> = ({
  selfIntroduction,
  studyPlan,
  isSuccessSaveSelfIntroduction,
  isSuccessSaveStudyPlan,
  setIntroduction,
  setStudyPlan,
}) => {
  const educationalStatus = useSelectState().selectType.educationalStatus;
  const pagination = useMemo(() => {
    if (selfIntroduction !== '' && studyPlan !== '') {
      if (educationalStatus === 'QUALIFICATION_EXAM')
        return (
          <Pagination
            prevPagePath={'/information'}
            nextPagePath={'/preview'}
            isQualification
            isNextPage
          />
        );
      else return <Pagination prevPagePath={'/grade'} nextPagePath={'/preview'} isNextPage />;
    } else {
      if (educationalStatus === 'QUALIFICATION_EXAM')
        return <Pagination prevPagePath={'/information'} isQualification />;
      else return <Pagination prevPagePath={'/grade'} />;
    }
  }, [selfIntroduction, studyPlan]);

  return (
    <S.AllContents>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>자기소개서 {'&'} 학업계획서</S.Title>
      </div>
      <SubContents
        selfIntroduction={selfIntroduction}
        subTitle={SELFINTRODUCTION}
        explain={INTRODUCTIONEXPLAIN}
        setIntroduction={setIntroduction}
      />
      <SubContents
        studyPlan={studyPlan}
        subTitle={STUDYPLAN}
        explain={STUDYPLANEXPLAIN}
        setStudyPlan={setStudyPlan}
      />
      {pagination}
      {isSuccessSaveSelfIntroduction !== undefined ? (
        <ToastPopUp isSuccessSave={isSuccessSaveSelfIntroduction} />
      ) : (
        ''
      )}
      {isSuccessSaveStudyPlan !== undefined ? (
        <ToastPopUp isSuccessSave={isSuccessSaveStudyPlan} />
      ) : (
        ''
      )}
    </S.AllContents>
  );
};

export default Introduction;
