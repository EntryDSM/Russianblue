import React, { useEffect } from 'react';
import { useGrade } from '../../util/hooks/grade';
import Grade from '../../components/grade';
import { useDispatch } from 'react-redux';
import { GET_GRADE } from '../../modules/redux/action/grade/interface';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import { useIsLogin } from '../../util/api/default';
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

  useEffect(() => {
    dispatch({ type: GET_GRADE });
    dispatch({ type: GET_SELECTTYPE });
  }, []);

  useEffect(() => {
    if (isFinalSubmitDone) history.push('/');
  }, [isFinalSubmitDone]);

  useEffect(() => {
    if (educationalStatus === 'QUALIFICATION_EXAM') history.push('/introduction');
  }, [educationalStatus]);

  return <Grade {...state} {...setState} />;
};

export default GradeContainer;
