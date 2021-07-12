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
    if (isFinalSubmitDone) {
      alert('최종제출되었습니다. 접근하시려면 최종제출을 취소하고 접근해주세요.');
      history.push('/');
    }
  }, [isFinalSubmitDone]);
  return <SelectType {...state} {...setState} />;
};

export default SelectTypeContainer;
