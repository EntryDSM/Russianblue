import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const selectType = async (
  access_token: string,
  selectTypeRequest: {
    educational_status: string;
    application_type: string;
    is_daejeon: boolean;
    application_remark: string | null;
    graduated_at: string;
  },
) => {
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

export const autoSaveSelectType = async (
  access_token: string,
  selectTypeRequest: {
    educational_status: string;
    application_type: string;
    is_daejeon: boolean;
    application_remark: string | null;
    graduated_at: string;
  },
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.selectType, selectTypeRequest);
  } catch (error) {
    throw error;
  }
};
