import { useSelector, useDispatch } from 'react-redux';
import {
  setName,
  setPassword,
  setPhoneCode,
  setPhoneNumber,
  setRuleCheck,
} from '../../../modules/redux/action/signup';
import { useSelectState } from '../default';

const useSignup = () => {
  const dispatch = useDispatch();
  const state = useSelectState().signup;
  const setState = {
    setName: (payload: string) => {
      dispatch(setName(payload));
    },
    setPassword: (payload: string) => {
      dispatch(setPassword(payload));
    },
    setPhoneNumber: (payload: string) => {
      dispatch(setPhoneNumber(payload));
    },
    setPhoneCode: (payload: string) => {
      dispatch(setPhoneCode(payload));
    },
    setRuleCheck: (payload: boolean) => {
      dispatch(setRuleCheck(payload));
    },
  };
  return { state, setState };
};

export default useSignup;
