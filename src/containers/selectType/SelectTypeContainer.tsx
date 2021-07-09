import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import SelectType from '../../components/SelectType';
import useSelectType from '../../util/hooks/selectType';
import { useIsLogin } from '../../util/api/default';

const SelectTypeContainer = () => {
  const { state, setState } = useSelectType();
  const dispatch = useDispatch();
  useIsLogin();
  useEffect(() => {
    dispatch({ type: GET_SELECTTYPE });
  }, []);
  return <SelectType {...state} {...setState} />;
};

export default SelectTypeContainer;
