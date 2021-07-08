import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  GET_SELF_INTRODUCTION,
  GET_STUDY_PLAN,
} from '../../modules/redux/action/Introduction/interface';
import useIntroduction from '../../util/hooks/Introduction';

const Introduction = React.lazy(() => import('../../components/introduction'));

const IntroductionContainer: FC = () => {
  const { state, setState } = useIntroduction();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_SELF_INTRODUCTION });
    dispatch({ type: GET_STUDY_PLAN });
  }, []);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Introduction {...state} {...setState} />
    </Suspense>
  );
};

export default IntroductionContainer;
