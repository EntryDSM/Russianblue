import { userResponse, userResponseToUser } from '../../../models/dto/response/userResponse';
import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getUser = async (token: string) => {
  const request = getRequestWithAccessToken(token);
  const response = await request.get<userResponse>(uri.status);
  const user = userResponseToUser(response.data);
  return { data: user };
};
