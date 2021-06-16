import { useDispatch } from 'react-redux';
import {
  checkVertifyCode,
  sendVertifyCode,
  setName,
  setPassword,
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
      dispatch(sendVertifyCode(payload));
    },
    checkVertifyCode: (payload: { phoneNumber: string; code: string }) => {
      dispatch(
        checkVertifyCode({
          phone_number: payload.phoneNumber,
          code: payload.code,
        }),
      );
    },
    signup: (payload: { phoneNumber: string; password: string; name: string }) => {
      dispatch(
        signup({
          phone_number: payload.phoneNumber,
          password: payload.password,
          name: payload.name,
        }),
      );
    },
  };
  return { state, setState };
};

export default useSignup;
