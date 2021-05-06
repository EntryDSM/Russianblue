import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import {
  setNewPassword,
  setResetPasswordError,
  setVertifyCode,
  setVertifyPhoneNumber,
} from '../../../modules/redux/action/resetPassword';
import { error } from 'src/models/error';

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
  };
  return {
    state,
    setState,
  };
};

export default useResetPassword;
