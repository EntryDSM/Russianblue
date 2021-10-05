import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const introduction = async (access_token: string, introductionRequest: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.introduction, { content: introductionRequest });
  } catch (error) {
    throw error;
  }
};

export const studyPlan = async (access_token: string, studyPlanRequest: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.studyPlan, { content: studyPlanRequest });
  } catch (error) {
    throw error;
  }
};

export const saveBoth = async (
  access_token: string,
  saveBothRequest: {
    selfIntroduction: string;
    studyPlan: string;
  },
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.introduction, { content: saveBothRequest.selfIntroduction });
    await request.patch(uri.studyPlan, { content: saveBothRequest.studyPlan });
  } catch (error) {
    throw error;
  }
};

export const getIntroduction = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token, 'text');
    const data = await request.get(uri.introduction);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getStudyPlan = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token, 'text');
    return await request.get(uri.studyPlan);
  } catch (error) {
    throw error;
  }
};
