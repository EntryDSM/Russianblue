import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const introduction = async (access_token: string, introductionRequest: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.introduction, introductionRequest);
  } catch (error) {
    throw error;
  }
};

export const studyPlan = async (access_token: string, studyPlanRequest: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.studyPlan, studyPlanRequest);
  } catch (error) {
    throw error;
  }
};

export const saveBoth = async (access_token: string, introduction: string, studyPlan: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.introduction, introduction);
    await request.patch(uri.studyPlan, studyPlan);
  } catch (error) {
    throw error;
  }
};

export const getIntroduction = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.introduction);
  } catch (error) {
    throw error;
  }
};

export const getStudyPlan = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.studyPlan);
  } catch (error) {
    throw error;
  }
};
