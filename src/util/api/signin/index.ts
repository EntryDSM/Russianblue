import uri from '../../../constance/uri';
import { signinRequest } from '../../../models/dto/request/signinRequest';
import { refreshResponse, signinResponse } from '../../../models/dto/response/signinResponse';
import { getRequest } from '../default';

export const signin = async (body: signinRequest) => {
  try {
    const request = getRequest();
    const response = await request.post<signinResponse>(uri.signin, body);
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const request = getRequest();
    const { data } = await request.put<refreshResponse>(uri.signin);
    localStorage.setItem('access_token', data.access_token);
    return data;
  } catch (error) {
    throw error;
  }
};
