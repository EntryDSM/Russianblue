import React, { useEffect } from 'react';
import { useGrade } from '../../util/hooks/grade';
import Grade from '../../components/grade';
import { useDispatch } from 'react-redux';
import { GET_GRADE } from '../../modules/redux/action/grade/interface';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';

const GradeContainer = () => {
  const { state, setState } = useGrade();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_GRADE });
    dispatch({ type: GET_SELECTTYPE });
  }, []);

  return <Grade {...state} {...setState} />;
};

export default GradeContainer;
