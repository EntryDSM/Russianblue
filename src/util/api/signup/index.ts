import uri from '../../../constance/uri';
import {
  signupRequest,
  signupVertifyCodeRequest,
  resetPasswordVertifyCodeRequest,
} from '../../../models/dto/request/signupRequest';
import { getRequest } from '../default';

export const signup = async (signupRequest: signupRequest) => {
  const request = getRequest();
  await request.post(uri.signup, signupRequest);
};

export const sendSignUpVertifyCode = async (signupVertifyCodeRequest: signupVertifyCodeRequest) => {
  const request = getRequest();
  await request.post(uri.sendVertify, signupVertifyCodeRequest);
};

export const sendResetPasswordVertifyCode = async (
  resetPasswordVertifyCodeRequest: resetPasswordVertifyCodeRequest,
) => {
  const request = getRequest();
  await request.post(uri.sendPasswordVertify, resetPasswordVertifyCodeRequest);
};
