import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  GET_SELF_INTRODUCTION,
  GET_STUDY_PLAN,
} from '../../modules/redux/action/Introduction/interface';
import useIntroduction from '../../util/hooks/Introduction';
import { useIsApplicationDate, useIsLogin } from '../../util/api/default';
import { useUser } from '../../util/hooks/user';
import { useHistory } from 'react-router-dom';

const Introduction = React.lazy(() => import('../../components/introduction'));

const IntroductionContainer: FC = () => {
  const { state, setState } = useIntroduction();
  const isFinalSubmitDone = useUser().state.isfinalSubmitDone;
  const dispatch = useDispatch();
  const history = useHistory();
  useIsApplicationDate();

  useEffect(() => {
    dispatch({ type: GET_SELF_INTRODUCTION });
    dispatch({ type: GET_STUDY_PLAN });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (isFinalSubmitDone) {
      alert(
        '최종제출되었습니다. 접근하시려면 최종제출을 취소하고 접근해주세요. 최종제출은 학교에 연락하여 취소하셔야 합니다.',
      );
      history.push('/');
    }
  }, [isFinalSubmitDone]);

  useIsLogin();
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Introduction {...state} {...setState} />
    </Suspense>
  );
};

export default IntroductionContainer;
