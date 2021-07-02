import React, { useEffect } from 'react';
import useInformation from '../../util/hooks/information';
import Information from '../../components/information';
import { useDispatch } from 'react-redux';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import useSelectType from '../../util/hooks/selectType';
import {
  GET_GRADUATE_INFORMATION,
  GET_INFORMATION,
} from '../../modules/redux/action/information/interface';

const InformationContainer = () => {
  const { state, setState } = useInformation();
  const educationalStatus = useSelectType().state.educationalStatus;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_SELECTTYPE });
    dispatch({ type: GET_INFORMATION });
    if (educationalStatus !== 'QUALIFICATION_EXAM') {
      dispatch({ type: GET_GRADUATE_INFORMATION });
    }
  }, []);
  return <Information {...state} {...setState} />;
};

export default InformationContainer;
