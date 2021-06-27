import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const information = async (
  access_token: string,
  informationRequest: {
    name: string;
    gender: string;
    birthDay: string;
    schoolCode: string;
    schoolPhoneNumber: string;
    parentName: string;
    parentPhoneNumber: string;
    phoneNumber: string;
    homePhoneNumber: string;
    baseAddress: string;
    detailAddress: string;
    zipCode: string;
    imageFile: string;
    grade: string;
    isGraduated: boolean;
  },
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.patch(uri.information, {
      name: informationRequest.name,
      sex: informationRequest.gender,
      birthday: informationRequest.birthDay,
      school_code: informationRequest.schoolCode,
      school_tel: informationRequest.schoolPhoneNumber,
      parent_name: informationRequest.parentName,
      parent_tel: informationRequest.parentPhoneNumber,
      telephone_number: informationRequest.phoneNumber,
      home_tel: informationRequest.homePhoneNumber,
      address: informationRequest.baseAddress,
      detail_address: informationRequest.detailAddress,
      post_code: informationRequest.zipCode,
      student_number: informationRequest.grade,
      is_graduated: informationRequest.isGraduated,
    });
  } catch (error) {
    throw error;
  }
};

export const autoSaveInformation = async (
  access_token: string,
  informationRequest: {
    name: string;
    gender: string;
    birthDay: string;
    schoolCode: string;
    schoolPhoneNumber: string;
    parentName: string;
    parentPhoneNumber: string;
    phoneNumber: string;
    homePhoneNumber: string;
    baseAddress: string;
    detailAddress: string;
    zipCode: string;
    imageFile: string;
    grade: string;
    isGraduated: boolean;
  },
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.patch(uri.information, {
      name: informationRequest.name,
      sex: informationRequest.gender,
      birthday: informationRequest.birthDay,
      school_code: informationRequest.schoolCode,
      school_tel: informationRequest.schoolPhoneNumber,
      parent_name: informationRequest.parentName,
      parent_tel: informationRequest.parentPhoneNumber,
      telephone_number: informationRequest.phoneNumber,
      home_tel: informationRequest.homePhoneNumber,
      address: informationRequest.baseAddress,
      detail_address: informationRequest.detailAddress,
      post_code: informationRequest.zipCode,
      student_number: informationRequest.grade,
      is_graduated: informationRequest.isGraduated,
    });
  } catch (error) {
    throw error;
  }
};

export const getInformation = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.information);
  } catch (error) {
    throw error;
  }
};

export const informationImage = async (access_token: string, informationImageRequest) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.post(uri.informationImage, { file: informationImageRequest });
  } catch (error) {
    throw error;
  }
};

export const searchSchool = async (access_token: string, searchSchoolRequest) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(
      `${uri.searchSchool}?name=${encodeURI(searchSchoolRequest.schoolSearchName)}&size=${
        searchSchoolRequest.size
      }&page=${searchSchoolRequest.page}`,
    );
  } catch (error) {
    throw error;
  }
};
