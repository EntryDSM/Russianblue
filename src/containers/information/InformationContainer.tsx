import React, { useEffect } from 'react';
import { useInformation } from '../../util/hooks/information';
import Information from '../../components/information';
import { useDispatch } from 'react-redux';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';

const InformationContainer = () => {
  const { state, setState } = useInformation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_SELECTTYPE });
  }, []);
  return <Information {...state} {...setState} />;
};

export default InformationContainer;
