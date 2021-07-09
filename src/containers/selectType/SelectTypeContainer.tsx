import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import SelectType from '../../components/SelectType';
import useSelectType from '../../util/hooks/selectType';
import { useIsLogin } from '../../util/api/default';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../util/hooks/user';

const SelectTypeContainer = () => {
  const { state, setState } = useSelectType();
  const isFinalSubmitDone = useUser().state.isfinalSubmitDone;
  const dispatch = useDispatch();
  const history = useHistory();
  useIsLogin();
  useEffect(() => {
    dispatch({ type: GET_SELECTTYPE });
  }, []);
  useEffect(() => {
    if (isFinalSubmitDone) history.push('/');
  }, [isFinalSubmitDone]);
  return <SelectType {...state} {...setState} />;
};

export default SelectTypeContainer;
