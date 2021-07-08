import uri from '../../../constance/uri';
import { statusRequest } from 'src/models/dto/request/statusRequest';
import { statusResponse } from 'src/models/dto/response/statusResponse';
import { getRequest } from '../default';

export const getStatus = async (statusRequest: statusRequest) => {
  const request = getRequest();
  const response = await request.get<statusResponse>(uri.schedule);
  return response;
};
