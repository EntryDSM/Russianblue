import uri from '../../../constance/uri';
import {
  signupRequest,
  signupVertifyCodeRequest,
  resetPasswordVertifyCodeRequest,
  checkVertifyCodeRequest,
} from '../../../models/dto/request/signupRequest';
import { getRequest } from '../default';

export const signup = async (signupRequest: signupRequest) => {
  try {
    const request = getRequest();
    await request.post(uri.signup, signupRequest);
  } catch (error) {
    throw error;
  }
};

export const sendSignUpVertifyCode = async (signupVertifyCodeRequest: signupVertifyCodeRequest) => {
  try {
    const request = getRequest();
    await request.post(uri.sendVertify, signupVertifyCodeRequest);
  } catch (error) {
    throw error;
  }
};

export const sendResetPasswordVertifyCode = async (
  resetPasswordVertifyCodeRequest: resetPasswordVertifyCodeRequest,
) => {
  try {
    const request = getRequest();
    await request.post(uri.sendPasswordVertify, resetPasswordVertifyCodeRequest);
  } catch (error) {
    throw error;
  }
};

export const chekckVertifyCode = async (checkVertifyRequest: checkVertifyCodeRequest) => {
  try {
    const request = getRequest();
    await request.put(uri.sendVertify, checkVertifyRequest);
  } catch (error) {
    throw error;
  }
};
