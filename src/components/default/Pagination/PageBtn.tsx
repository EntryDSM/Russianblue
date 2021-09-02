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
import useInformation from '../../../util/hooks/information';
import { useDispatch } from 'react-redux';
import {
  GRADUATE_INFORMATION,
  INFORMATION,
} from '../../../modules/redux/action/information/interface';
import { useGrade } from '../../../util/hooks/grade';
import { SAVE_GRADE } from '../../../modules/redux/action/grade/interface';
import { SELECTTYPE } from '../../../constance/SelectType';

interface Props {
  prevPagePath?: string;
  nextPagePath?: string;
  content: String;
  disabled?: boolean;
  setIsOpenSubmitModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageBtn: FC<Props> = ({
  content,
  disabled,
  prevPagePath,
  nextPagePath,
  setIsOpenSubmitModal,
}) => {
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
  const informationState = useInformation().state;
  const gradeState = useGrade().state;
  const dispatch = useDispatch();

  const change = [selfIntroduction, studyPlan, informationState];

  useEffect(() => {
    let isSuccessAction = undefined;
    switch (pathname) {
      case 'introduction':
        isSuccessAction = introState.isSuccessSaveBoth;
        break;
      case 'select-type':
        isSuccessAction = selectTypeState.isSuccessSaveSelectType;
        break;
      case 'information':
        if (selectTypeState.educationalStatus === 'QUALIFICATION_EXAM')
          isSuccessAction =
            informationState.isSuccessSaveInformation && informationState.isSuccessSaveGedScore;
        else
          isSuccessAction =
            informationState.isSuccessSaveInformation &&
            informationState.isSuccessSaveGraduateInformation;
        break;
      case 'grade':
        isSuccessAction = gradeState.isSuccessSaveGrade;
        break;
    }
    if (isSuccessAction) {
      if (prevNextBtn.nextBtn) {
        history.push(nextPagePath);
      }
    } else if (isSuccessAction === false) {
      console.log('실패');
    } else if (isSuccessAction === undefined) {
      console.log('요청이 안갔습니다');
    }
  }, [
    introState.isSuccessSaveBoth,
    prevNextBtn.prevBtn,
    prevNextBtn.nextBtn,
    selectTypeState.isSuccessSaveSelectType,
    informationState.isSuccessSaveInformation,
    informationState.isSuccessSaveGraduateInformation,
    gradeState.isSuccessSaveGrade,
  ]);

  const prevBtnClickHandler = () => {
    history.push(prevPagePath);
    setPrevNextBtn({ prevBtn: true, nextBtn: false });
  };

  const nextBtnClickHandler = () => {
    switch (pathname) {
      case 'introduction':
        introSetState.saveBoth({ selfIntroduction, studyPlan });
        break;
      case 'select-type':
        dispatch({ type: SELECTTYPE });
        break;
      case 'information':
        dispatch({ type: INFORMATION });
        if (selectTypeState.educationalStatus !== 'QUALIFICATION_EXAM')
          dispatch({ type: GRADUATE_INFORMATION });
        break;
      case 'grade':
        dispatch({ type: SAVE_GRADE });
        break;
      case 'preview':
        setIsOpenSubmitModal(true);
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
