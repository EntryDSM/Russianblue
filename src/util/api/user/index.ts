import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getUser = async (token: string) => {
  const request = getRequestWithAccessToken(token);
  return await request.get(uri.status);
};
