import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import {
  resetPassword,
  sendResetPasswordVertifyCode,
  setNewPassword,
  setResetPasswordError,
  setVertifyCode,
  setVertifyPhoneNumber,
  checkVertifyCode,
  resetState,
} from '../../../modules/redux/action/resetPassword';
import { error } from '../../../models/error';
import {
  checkVertifyCodeRequest,
  resetPasswordRequest,
  resetPasswordVertifyCodeRequest,
} from '../../../models/dto/request/signupRequest';

const useResetPassword = () => {
  const dispatch = useDispatch();
  const state = useSelectState().resetPassword;
  const setState = {
    setVertifyCode: (payload: string) => {
      dispatch(setVertifyCode(payload));
    },
    setVertifyPhoneNumber: (payload: string) => {
      dispatch(setVertifyPhoneNumber(payload));
    },
    setNewPassword: (payload: string) => {
      dispatch(setNewPassword(payload));
    },
    setResetPasswordError: (payload: error) => {
      dispatch(setResetPasswordError(payload));
    },
    sendVertifyCode: (payload: resetPasswordVertifyCodeRequest) => {
      dispatch(sendResetPasswordVertifyCode(payload));
    },
    checkVertifyCode: (payload: checkVertifyCodeRequest) => {
      dispatch(checkVertifyCode(payload));
    },
    resetPassword: (payload: resetPasswordRequest) => {
      dispatch(resetPassword(payload));
    },
    resetState: () => {
      dispatch(resetState());
    },
  };
  return {
    state,
    setState,
  };
};

export default useResetPassword;
