import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getPreview = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token, 'blob');
    return await request.get(uri.preview);
  } catch (error) {
    throw error;
  }
};

export const final = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.post(uri.finalSubmission);
  } catch (error) {
    throw error;
  }
};

export const getFinalPdf = async (token: string) => {
  const request = getRequestWithAccessToken(token, 'blob');
  const response = await request.get<string>(uri.final);
  const url = window.URL.createObjectURL(response.data);
  const a = document.createElement('a');
  a.href = url;
  a.download = `최종_제출_원서.pdf`;
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
};
