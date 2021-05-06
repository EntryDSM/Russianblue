import uri from '../../../constance/uri';
import { signinRequest } from '../../../models/dto/request/signinRequest';
import { signinResponse } from '../../../models/dto/response/signinResponse';
import { getRequest } from '../default';

export const signin = async (body: signinRequest) => {
  const request = getRequest();
  const { data } = await request.post<signinResponse>(uri.signin, body);
  return data;
};
