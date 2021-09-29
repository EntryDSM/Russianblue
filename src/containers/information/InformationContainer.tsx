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
import { useIsApplicationDate, useIsLogin } from '../../util/api/default';
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
  useIsApplicationDate();

  useEffect(() => {
    dispatch({ type: GET_SELECTTYPE });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (educationalStatus === 'GRADUATE') {
      dispatch({ type: GET_GRADUATE_INFORMATION });
    } else if (educationalStatus === 'QUALIFICATION_EXAM') {
      dispatch({ type: GET_INFORMATION });
      dispatch({ type: GET_GED_SCORE });
    } else if (educationalStatus === 'PROSPECTIVE_GRADUATE') {
      dispatch({ type: GET_GRADUATE_INFORMATION });
    }
    console.log(educationalStatus);
    console.log(mounted.current);
  }, [educationalStatus]);

  useEffect(() => {
    if (isFinalSubmitDone) {
      alert(
        '최종제출되었습니다. 접근하시려면 최종제출을 취소하고 접근해주세요. 최종제출은 학교에 연락하여 취소하셔야 합니다.',
      );
      history.push('/');
    }
  }, [isFinalSubmitDone]);

  return <Information {...state} {...setState} />;
};

export default InformationContainer;
