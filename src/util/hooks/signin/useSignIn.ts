import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import { refreshToken, setId, setPassword, signin } from '../../../modules/redux/action/signin';
import {} from '../../../modules/redux/action/auth';
import { signinRequest } from 'src/models/dto/request/signinRequest';

const useSignin = () => {
  const dispatch = useDispatch();
  const state = useSelectState().signin;
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
  };
  return {
    state,
    setState,
  };
};

export default useSignin;
