import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import {
  refreshToken,
  reset,
  setId,
  setPassword,
  signin,
} from '../../../modules/redux/action/signin';
import { signinRequest } from '../../../models/dto/request/signinRequest';
import { IS_LOGIN } from '../../../modules/redux/action/auth';

const useSignin = () => {
  const dispatch = useDispatch();
  const signinState = useSelectState().signin;
  useEffect(() => {
    if (signinState.error.type) dispatch({ type: IS_LOGIN, payload: false });
  }, [signinState.error]);
  const setState = {
    setId: (payload: string) => {
      dispatch(setId(payload));
    },
    setPassword: (payload: string) => {
      dispatch(setPassword(payload));
    },
    signin: (payload: signinRequest) => {
      dispatch(signin(payload));
    },
    refreshToken: (callback: () => void) => {
      dispatch(refreshToken({ callback }));
    },
    reset: () => {
      dispatch(reset());
    },
  };
  return {
    state: signinState,
    setState,
  };
};

export default useSignin;
