import {
  graduateInformationInterFace,
  informationInterface,
  searchSchoolQueryType,
} from '../../../constance/information';
import { reducerType } from '../../../modules/redux/reducer';
import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

const makeBirthday = (year: number, month: number, date: number) => {
  if (month < 10) {
    if (date < 10) return `${year}0${month}0${date}`;
    else return `${year}0${month}${date}`;
  } else {
    if (date < 10) return `${year}${month}0${date}`;
    else return `${year}${month}${date}`;
  }
};

const makeStudentNumber = (stdGrade: string, stdClass: string, stdNumber: string) => {
  if (stdClass.length === 1) {
    if (stdNumber.length === 1) return `${stdGrade}0${stdClass}0${stdNumber}`;
    else return `${stdGrade.substring(0, 1)}0${stdClass}${stdNumber.substring(0, 2)}`;
  } else {
    if (stdNumber.length === 1) return `${stdGrade}${stdClass.substring(0, 2)}0${stdNumber}`;
    else
      return `${stdGrade.substring(0, 1)}${stdClass.substring(0, 2)}${stdNumber.substring(0, 2)}`;
  }
};

export const informationStateToRequest = (
  state: reducerType['information'],
): informationInterface => {
  return {
    sex: state.sex,
    birthday: makeBirthday(state.birthYear, state.birthMonth, state.birthDate),
    parent_name: state.parentName,
    parent_tel: state.parentTel ? state.parentTel.replace(/\-/g, '') : null,
    telephone_number: state.telephoneNumber ? state.telephoneNumber.replace(/\-/g, '') : null,
    home_tel: state.homeTel ? state.homeTel.replace(/\-/g, '') : null,
    address: state.address,
    detail_address: state.detailAddress,
    post_code: state.postCode,
  };
};

export const information = async (
  access_token: string,
  informationRequest: informationInterface,
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.information, informationRequest);
  } catch (error) {
    throw error;
  }
};

export const graduateInformationStateToRequest = (
  state: reducerType['information'],
): graduateInformationInterFace => {
  return {
    student_number: makeStudentNumber(state.stdGrade, state.stdClass, state.stdNumber),
    school_code: state.schoolCode,
    school_tel: state.schoolTel ? state.schoolTel.replace(/\-/g, '') : null,
  };
};

export const getInformation = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.information);
  } catch (error) {
    throw error;
  }
};

export const graduateInformation = async (
  access_token: string,
  graduateInformationRequest: graduateInformationInterFace,
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.graduateInformation, graduateInformationRequest);
  } catch (error) {
    throw error;
  }
};

export const getGraduateInformation = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.graduateInformation);
  } catch (error) {
    throw error;
  }
};

export const userPhoto = async (access_token: string, userPhotoRequest: File) => {
  try {
    const formData = new FormData();
    formData.append('file', userPhotoRequest);
    const request = getRequestWithAccessToken(access_token);
    return await request.post(uri.userPhoto, formData);
  } catch (error) {
    throw error;
  }
};

export const getSearchSchool = async (
  access_token: string,
  searchSchoolQuery: searchSchoolQueryType,
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(
      `${uri.searchSchool}?name=${encodeURI(searchSchoolQuery.name)}&size=${
        searchSchoolQuery.size
      }&page=${searchSchoolQuery.page}`,
    );
  } catch (error) {
    throw error;
  }
};

export const gedScore = async (access_token: string, gedScoreRequest: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.gedScore, {
      ged_average_score: Number(gedScoreRequest),
    });
  } catch (error) {
    throw error;
  }
};

export const getGedScore = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.gedScore);
  } catch (error) {
    throw error;
  }
};
