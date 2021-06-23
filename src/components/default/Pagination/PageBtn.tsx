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
  const educational_status = selectTypeState.educational_status;
  const application_type = selectTypeState.application_type;
  const is_daejeon = selectTypeState.is_daejeon;
  const application_remark = selectTypeState.application_remark;
  const graduation_year = selectTypeState.graduationYear;
  const graduation_month = selectTypeState.graduationMonth;
  let graduated_YM = '';
  if (String(graduation_month).length === 1) {
    graduated_YM = String(graduation_year) + '0' + String(graduation_month);
  } else {
    graduated_YM = String(graduation_year) + String(graduation_month);
  }

  const change = [
    selfIntroduction,
    studyPlan,
    educational_status,
    application_remark,
    application_type,
    is_daejeon,
    graduation_month,
    graduation_year,
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
          educational_status: educational_status,
          application_type: application_type,
          is_daejeon: is_daejeon,
          application_remark: application_remark,
          graduated_at: graduated_YM,
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
          educational_status: educational_status,
          application_type: application_type,
          is_daejeon: is_daejeon,
          application_remark: application_remark,
          graduated_at: graduated_YM,
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
