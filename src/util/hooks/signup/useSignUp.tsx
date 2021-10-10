import { useDispatch } from 'react-redux';
import {
  checkVertifyCode,
  sendVertifyCode,
  setName,
  setPassword,
  setPasswordCheck,
  setPhoneCode,
  setPhoneNumber,
  setRuleCheck,
  signup,
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
    setPasswordCheck: (payload: string) => {
      dispatch(setPasswordCheck(payload));
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
    sendVertifyCode: (payload: string) => {
      dispatch(sendVertifyCode({ email: payload }));
    },
    checkVertifyCode: (payload: { phoneNumber: string; code: string }) => {
      dispatch(
        checkVertifyCode({
          email: payload.phoneNumber,
          code: payload.code,
        }),
      );
    },
    signup: (payload: { phoneNumber: string; password: string; name: string }) => {
      dispatch(
        signup({
          email: payload.phoneNumber,
          password: payload.password,
          name: payload.name,
        }),
      );
    },
  };
  return { state, setState };
};

export default useSignup;
