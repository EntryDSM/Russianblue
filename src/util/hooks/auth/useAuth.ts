import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import { setAccessToken, setIsLogin } from '../../../modules/redux/action/auth';

const useAuth = () => {
  const dispatch = useDispatch();
  const state = useSelectState().auth;
  const setState = {
    setAccessToken: (payload: string) => dispatch(setAccessToken(payload)),
    setIsLogin: (payload: boolean) => dispatch(setIsLogin(payload)),
  };
  return {
    state,
    setState,
  };
};

export default useAuth;
