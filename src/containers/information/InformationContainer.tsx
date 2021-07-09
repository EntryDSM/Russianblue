import React, { useEffect, useRef } from 'react';
import useInformation from '../../util/hooks/information';
import Information from '../../components/information';
import { useDispatch } from 'react-redux';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import useSelectType from '../../util/hooks/selectType';
import {
  GET_GED_SCORE,
  GET_GRADUATE_INFORMATION,
  GET_INFORMATION,
} from '../../modules/redux/action/information/interface';
import { useIsLogin } from '../../util/api/default';
import { useUser } from '../../util/hooks/user';
import { useHistory } from 'react-router-dom';

const InformationContainer = () => {
  const { state, setState } = useInformation();
  const educationalStatus = useSelectType().state.educationalStatus;
  const isFinalSubmitDone = useUser().state.isfinalSubmitDone;
  const dispatch = useDispatch();
  const history = useHistory();
  const mounted = useRef(false);
  useIsLogin();
  useEffect(() => {
    dispatch({ type: GET_SELECTTYPE });
    dispatch({ type: GET_INFORMATION });
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (educationalStatus === 'QUALIFICATION_EXAM') {
        dispatch({ type: GET_GED_SCORE });
      } else {
        dispatch({ type: GET_GRADUATE_INFORMATION });
      }
    }
  }, [educationalStatus]);

  useEffect(() => {
    if (isFinalSubmitDone) history.push('/');
  }, [isFinalSubmitDone]);

  return <Information {...state} {...setState} />;
};

export default InformationContainer;
