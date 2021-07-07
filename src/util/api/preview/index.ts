import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getPreview = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.preview);
  } catch (error) {
    throw error;
  }
};

export const final = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.status);
  } catch (error) {
    throw error;
  }
};
