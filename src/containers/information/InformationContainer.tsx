import React, { useEffect } from 'react';
import useInformation from '../../util/hooks/information';
import Information from '../../components/information';
import { useDispatch } from 'react-redux';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import {
  GET_GEDINFORMATION,
  GET_INFORMATION,
} from '../../modules/redux/action/information/interface';
import useSelectType from '../../util/hooks/selectType';

const InformationContainer = () => {
  const { state, setState } = useInformation();
  const educationalStatus = useSelectType().state.educationalStatus;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_SELECTTYPE });
  }, []);
  useEffect(() => {
    if (educationalStatus === 'QUALIFICATION_EXAM') {
      dispatch({ type: GET_GEDINFORMATION });
    } else {
      dispatch({ type: GET_INFORMATION });
    }
  }, [educationalStatus]);
  return <Information {...state} {...setState} />;
};

export default InformationContainer;
