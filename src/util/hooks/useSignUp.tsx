import { useSelector, useDispatch } from 'react-redux';
import {
  setName,
  setPassword,
  setPhoneCode,
  setPhoneNumber,
  setRuleCheck,
} from '../../modules/redux/action/signup';
import { ReducerType } from 'src/modules/redux/store';

const useSignup = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: ReducerType) => state.signup);
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
