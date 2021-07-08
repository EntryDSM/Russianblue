import uri from '../../../constance/uri';
import {
  signupRequest,
  signupVertifyCodeRequest,
  resetPasswordVertifyCodeRequest,
  checkVertifyCodeRequest,
  resetPasswordRequest,
} from '../../../models/dto/request/signupRequest';
import { getRequest } from '../default';

export const signup = async (_, signupRequest: signupRequest) => {
  try {
    const request = getRequest();
    await request.post(uri.signup, signupRequest);
  } catch (error) {
    throw error;
  }
};

export const sendSignUpVertifyCode = async (
  accessToken: string,
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
