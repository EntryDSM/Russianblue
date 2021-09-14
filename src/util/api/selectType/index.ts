import { selectTypeInterface } from 'src/constance/SelectType';
import { reducerType } from 'src/modules/redux/reducer';
import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const selectTypeStateToRequest = (state: reducerType['selectType']): selectTypeInterface => {
  return {
    educational_status: state.educationalStatus,
    application_type: state.applicationType,
    is_daejeon: state.isDaejeon,
    application_remark: state.applicationRemark,
    graduated_at:
      state.graduationMonth < 10
        ? `${state.graduationYear}0${state.graduationMonth}`
        : `${state.graduationYear}${state.graduationMonth}`,
    headcount: state.headcount,
  };
};

export const selectType = async (access_token: string, selectTypeRequest: selectTypeInterface) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.selectType, selectTypeRequest);
  } catch (error) {
    throw error;
  }
};

export const getSelectType = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.selectType);
  } catch (error) {
    throw error;
  }
};
