import React, { FC, useMemo, useEffect, useState } from 'react';
import * as S from './style';
import {
  left_arrow,
  left_arrow_disabled,
  right_arrow,
  right_arrow_disabled,
} from '../../../assets/default';
import useIntroduction from '../../../util/hooks/Introduction';
import { useHistory, useLocation } from 'react-router-dom';
import useSelectType from '../../../util/hooks/selectType';

interface Props {
  prevPagePath?: string;
  nextPagePath?: string;
  content: String;
  disabled?: boolean;
}

const PageBtn: FC<Props> = ({ content, disabled, prevPagePath, nextPagePath }) => {
  const history = useHistory();
  const pathname = useLocation().pathname.slice(1);
  const [prevNextBtn, setPrevNextBtn] = useState({
    prevBtn: false,
    nextBtn: false,
  });

  const introState = useIntroduction().state;
  const introSetState = useIntroduction().setState;
  const selfIntroduction = introState.selfIntroduction;
  const studyPlan = introState.studyPlan;

  const selectTypeState = useSelectType().state;
  const selectTypeSetState = useSelectType().setState;
  const educationalStatus = selectTypeState.educationalStatus;
  const applicationType = selectTypeState.applicationType;
  const isDaejeon = selectTypeState.isDaejeon;
  const applicationRemark = selectTypeState.applicationRemark;
  const graduationYear = selectTypeState.graduationYear;
  const graduationMonth = selectTypeState.graduationMonth;
  let graduated_YM = '';
  if (String(graduationMonth).length === 1) {
    graduated_YM = String(graduationYear) + '0' + String(graduationMonth);
  } else {
    graduated_YM = String(graduationYear) + String(graduationMonth);
  }

  const change = [
    selfIntroduction,
    studyPlan,
    educationalStatus,
    applicationRemark,
    applicationType,
    isDaejeon,
    graduationMonth,
    graduationYear,
  ];

  useEffect(() => {
    let isSuccessAction = undefined;
    switch (pathname) {
      case 'introduction':
        isSuccessAction = introState.isSuccessSaveBoth;
        break;
      case 'select-type':
        isSuccessAction = selectTypeState.isSuccessSaveSelectType;
        break;
    }
    if (isSuccessAction) {
      if (prevNextBtn.prevBtn) {
        history.push(prevPagePath);
      }
      if (prevNextBtn.nextBtn) {
        history.push(nextPagePath);
      }
    } else if (isSuccessAction === false) {
      alert('실패');
    } else if (isSuccessAction === undefined) {
      console.log('요청이 안갔습니다');
    }
  }, [
    introState.isSuccessSaveBoth,
    prevNextBtn.prevBtn,
    prevNextBtn.nextBtn,
    selectTypeState.isSuccessSaveSelectType,
  ]);

  const prevBtnClickHandler = () => {
    switch (pathname) {
      case 'introduction':
        introSetState.saveBoth({ selfIntroduction, studyPlan });
        break;
      case 'select-type':
        selectTypeSetState.selectType({
          educationalStatus: educationalStatus,
          applicationType: applicationType,
          isDaejeon: isDaejeon,
          applicationRemark: applicationRemark,
          graduatedAt: graduated_YM,
        });
        break;
      default:
    }
    setPrevNextBtn({ prevBtn: true, nextBtn: false });
  };

  const nextBtnClickHandler = () => {
    switch (pathname) {
      case 'introduction':
        introSetState.saveBoth({ selfIntroduction, studyPlan });
        break;
      case 'select-type':
        selectTypeSetState.selectType({
          educationalStatus: educationalStatus,
          applicationType: applicationType,
          isDaejeon: isDaejeon,
          applicationRemark: applicationRemark,
          graduatedAt: graduated_YM,
        });
        break;
      default:
    }
    setPrevNextBtn({ prevBtn: false, nextBtn: true });
  };

  const prevBtn = useMemo(() => {
    if (content === '이전') {
      if (disabled)
        return (
          <S.PageBtn disabled={disabled}>
            <img src={left_arrow_disabled} />
            <div>{content}</div>
          </S.PageBtn>
        );
      else
        return (
          <S.PageBtn disabled={disabled} onClick={prevBtnClickHandler}>
            <img src={left_arrow} />
            <div>{content}</div>
          </S.PageBtn>
        );
    } else return;
  }, [disabled, ...change]);

  const nextBtn = useMemo(() => {
    if (content === '다음') {
      if (disabled)
        return (
          <S.PageBtn disabled={disabled}>
            <div>{content}</div>
            <img src={right_arrow_disabled} />
          </S.PageBtn>
        );
      else
        return (
          <S.PageBtn disabled={disabled} onClick={nextBtnClickHandler}>
            <div>{content}</div>
            <img src={right_arrow} />
          </S.PageBtn>
        );
    } else return;
  }, [disabled, ...change]);

  return (
    <>
      {prevBtn}
      {nextBtn}
    </>
  );
};

export default PageBtn;
