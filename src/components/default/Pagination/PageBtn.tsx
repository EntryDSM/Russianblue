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

interface Props {
  prevPagePath?: string;
  nextPagePath?: string;
  content: String;
  disabled?: boolean;
}

const PageBtn: FC<Props> = ({ content, disabled, prevPagePath, nextPagePath }) => {
  const history = useHistory();
  const { state, setState } = useIntroduction();
  const pathname = useLocation().pathname.slice(1);
  const selfIntroduction = state.selfIntroduction;
  const studyPlan = state.studyPlan;
  const isSuccessSaveBoth = state.isSuccessSaveBoth;
  const [prevNextBtn, setPrevNextBtn] = useState({
    prevBtn: false,
    nextBtn: false,
  });

  useEffect(() => {
    let isSuccessAction = undefined;
    switch (pathname) {
      case 'introduction':
        isSuccessAction = isSuccessSaveBoth;
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
  }, [isSuccessSaveBoth, prevNextBtn.prevBtn, prevNextBtn.nextBtn]);

  const prevBtnClickHandler = () => {
    switch (pathname) {
      case 'introduction':
        setState.saveBoth({ selfIntroduction, studyPlan });
        break;
      default:
    }
    setPrevNextBtn({ prevBtn: true, nextBtn: false });
  };

  const nextBtnClickHandler = () => {
    switch (pathname) {
      case 'introduction':
        setState.saveBoth({ selfIntroduction, studyPlan });
        break;
      default:
    }
    console.log(pathname);
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
  }, [disabled, selfIntroduction, studyPlan]);

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
  }, [disabled, selfIntroduction, studyPlan]);

  return (
    <>
      {prevBtn}
      {nextBtn}
    </>
  );
};

export default PageBtn;
