import { signupResponse } from '../../../models/dto/response/signupResponse';
import uri from '../../../constance/uri';
import {
  signupRequest,
  signupVertifyCodeRequest,
  resetPasswordVertifyCodeRequest,
  checkVertifyCodeRequest,
  resetPasswordRequest,
} from '../../../models/dto/request/signupRequest';
import { getRequest } from '../default';

export const signup = async (
  _,
  signupRequest: signupRequest,
): Promise<{ access_token: string }> => {
  try {
    const request = getRequest();
    const { data } = await request.post<signupResponse>(uri.signup, signupRequest);
    window.localStorage.setItem('access_token', data.access_token);
    return data;
  } catch (error) {
    throw error;
  }
};

export const sendSignUpVertifyCode = async (
  _,
  signupVertifyCodeRequest: signupVertifyCodeRequest,
) => {
  try {
    const request = getRequest();
    await request.post(uri.sendVertify, signupVertifyCodeRequest);
  } catch (error) {
    throw error;
  }
};

export const sendResetPasswordVertifyCode = async (
  _,
  resetPasswordVertifyCodeRequest: resetPasswordVertifyCodeRequest,
) => {
  try {
    const request = getRequest();
    await request.post(uri.sendPasswordVertify, resetPasswordVertifyCodeRequest);
  } catch (error) {
    throw error;
  }
};

export const chekckVertifyCode = async (_, checkVertifyRequest: checkVertifyCodeRequest) => {
  try {
    const request = getRequest();
    await request.put(uri.sendVertify, checkVertifyRequest);
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (_, resetPasswordRequest: resetPasswordRequest) => {
  try {
    const request = getRequest();
    await request.put(uri.resetPassword, resetPasswordRequest);
  } catch (error) {
    throw error;
  }
};
