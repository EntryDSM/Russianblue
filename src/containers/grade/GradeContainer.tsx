import React, { useEffect } from 'react';
import { useGrade } from '../../util/hooks/grade';
import Grade from '../../components/grade';
import { useDispatch } from 'react-redux';
import { GET_GRADE } from '../../modules/redux/action/grade/interface';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import { useIsApplicationDate, useIsLogin } from '../../util/api/default';
import useSelectType from '../../util/hooks/selectType';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../util/hooks/user';

const GradeContainer = () => {
  const { state, setState } = useGrade();
  const educationalStatus = useSelectType().state.educationalStatus;
  const isFinalSubmitDone = useUser().state.isfinalSubmitDone;
  const dispatch = useDispatch();
  const history = useHistory();
  useIsLogin();
  useIsApplicationDate();

  useEffect(() => {
    dispatch({ type: GET_GRADE });
    dispatch({ type: GET_SELECTTYPE });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (isFinalSubmitDone) {
      alert(
        '최종제출되었습니다. 접근하시려면 최종제출을 취소하고 접근해주세요. 최종제출은 학교에 연락하여 취소하셔야 합니다.',
      );
      history.push('/');
    }
  }, [isFinalSubmitDone]);

  useEffect(() => {
    if (educationalStatus === 'QUALIFICATION_EXAM') history.push('/introduction');
  }, [educationalStatus]);

  return <Grade {...state} {...setState} />;
};

export default GradeContainer;
