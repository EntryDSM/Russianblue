import {
  addressType,
  getGraduateInformationType,
  getInformationType,
  graduateInformationType,
  informationType,
  searchSchoolQueryType,
  searchSchoolResponse,
} from '../../../../constance/information';
import { error } from '../../../../models/error';
import {
  INPUT,
  SEX,
  BIRTHDATE,
  BIRTHMONTH,
  BIRTHYEAR,
  PICTUREURL,
  SCHOOLCODE,
  ADDRESS_AND_CODE,
  SCHOOL_NAME,
  INFORMATION,
  INFORMATION_FAILURE,
  INFORMATION_SUCCESS,
  GET_INFORMATION,
  GET_INFORMATION_FAILURE,
  GET_INFORMATION_SUCCESS,
  GRADUATE_INFORMATION,
  GRADUATE_INFORMATION_FAILURE,
  GRADUATE_INFORMATION_SUCCESS,
  GET_GRADUATE_INFORMATION,
  GET_GRADUATE_INFORMATION_FAILURE,
  GET_GRADUATE_INFORMATION_SUCCESS,
  USER_PICTURE,
  USER_PICTURE_FAILURE,
  USER_PICTURE_SUCCESS,
  SEARCH_SCHOOL,
  SEARCH_SCHOOL_FAILURE,
  SEARCH_SCHOOL_SUCCESS,
  GED_SCORE,
  GED_SCORE_FAILURE,
  GED_SCORE_SUCCESS,
  GET_GED_SCORE,
  GET_GED_SCORE_FAILURE,
  GET_GED_SCORE_SUCCESS,
} from './interface';

export const setInput = (payload: { name: string; value: string }) => ({
  type: INPUT,
  payload,
});

export const setSex = (payload: string) => ({
  type: SEX,
  payload,
});

export const setBirthYear = (payload: number) => ({
  type: BIRTHYEAR,
  payload,
});

export const setBirthMonth = (payload: number) => ({
  type: BIRTHMONTH,
  payload,
});

export const setBirthDate = (payload: number) => ({
  type: BIRTHDATE,
  payload,
});

export const setImageUrl = (payload: string) => ({
  type: PICTUREURL,
  payload,
});

export const setSchoolCode = (payload: string) => ({
  type: SCHOOLCODE,
  payload,
});

export const setAddress = (payload: addressType) => ({
  type: ADDRESS_AND_CODE,
  payload,
});

export const setSchoolName = (payload: string) => ({
  type: SCHOOL_NAME,
  payload,
});

export const information = (payload: informationType) => ({
  type: INFORMATION,
  payload,
});

export const informationSuccess = () => ({
  type: INFORMATION_SUCCESS,
});

export const informationFailure = (payload: error) => ({
  type: INFORMATION_FAILURE,
  payload,
});

export const graduateInformation = (payload: graduateInformationType) => ({
  type: GRADUATE_INFORMATION,
  payload,
});

export const graduateInformationSuccess = () => ({
  type: GRADUATE_INFORMATION_SUCCESS,
});

export const graduateInformationFailure = (payload: error) => ({
  type: GRADUATE_INFORMATION_FAILURE,
  payload,
});

export const getInformation = () => ({
  type: GET_INFORMATION,
});

export const getInformationSuccess = (payload: getInformationType) => ({
  type: GET_INFORMATION_SUCCESS,
  payload,
});

export const getInformationFailure = (payload: error) => ({
  type: GET_INFORMATION_FAILURE,
  payload,
});

export const getGraduateInformation = () => ({
  type: GET_GRADUATE_INFORMATION,
});

export const getGraduateInformationSuccess = (payload: getGraduateInformationType) => ({
  type: GET_GRADUATE_INFORMATION_SUCCESS,
  payload,
});

export const getGraduateInformationFailure = (payload: error) => ({
  type: GET_GRADUATE_INFORMATION_FAILURE,
  payload,
});

export const userPicture = (payload: File) => ({
  type: USER_PICTURE,
  payload,
});

export const userPictureSuccess = (payload: string) => ({
  type: USER_PICTURE_SUCCESS,
  payload,
});

export const userPictureFailure = (payload: error) => ({
  type: USER_PICTURE_FAILURE,
  payload,
});

export const searchSchool = (payload: searchSchoolQueryType) => ({
  type: SEARCH_SCHOOL,
  payload,
});

export const searchSchoolSuccess = (payload: searchSchoolResponse) => ({
  type: SEARCH_SCHOOL_SUCCESS,
  payload,
});

export const searchSchoolFailure = (payload: error) => ({
  type: SEARCH_SCHOOL_FAILURE,
  payload,
});

export const gedScore = (payload: number) => ({
  type: GED_SCORE,
  payload,
});

export const gedScoreSuccess = () => ({
  type: GED_SCORE_SUCCESS,
});

export const gedScoreFailure = (payload: error) => ({
  type: GED_SCORE_FAILURE,
  payload,
});

export const getGedScore = () => ({
  type: GET_GED_SCORE,
});

export const getGedScoreSuccess = (payload: number) => ({
  type: GET_GED_SCORE_SUCCESS,
  payload,
});

export const getGedScoreFailure = (payload: error) => ({
  type: GET_GED_SCORE_FAILURE,
  payload,
});

export type informationActionType =
  | ReturnType<typeof setInput>
  | ReturnType<typeof setBirthYear>
  | ReturnType<typeof setBirthMonth>
  | ReturnType<typeof setBirthDate>
  | ReturnType<typeof setSex>
  | ReturnType<typeof setImageUrl>
  | ReturnType<typeof setSchoolCode>
  | ReturnType<typeof setSchoolName>
  | ReturnType<typeof setAddress>
  | ReturnType<typeof information>
  | ReturnType<typeof informationSuccess>
  | ReturnType<typeof informationFailure>
  | ReturnType<typeof getInformation>
  | ReturnType<typeof getInformationSuccess>
  | ReturnType<typeof getInformationFailure>
  | ReturnType<typeof graduateInformation>
  | ReturnType<typeof graduateInformationSuccess>
  | ReturnType<typeof graduateInformationFailure>
  | ReturnType<typeof getGraduateInformation>
  | ReturnType<typeof getGraduateInformationSuccess>
  | ReturnType<typeof getGraduateInformationFailure>
  | ReturnType<typeof userPicture>
  | ReturnType<typeof userPictureSuccess>
  | ReturnType<typeof userPictureFailure>
  | ReturnType<typeof searchSchool>
  | ReturnType<typeof searchSchoolSuccess>
  | ReturnType<typeof searchSchoolFailure>
  | ReturnType<typeof gedScore>
  | ReturnType<typeof gedScoreSuccess>
  | ReturnType<typeof gedScoreFailure>
  | ReturnType<typeof getGedScore>
  | ReturnType<typeof getGedScoreSuccess>
  | ReturnType<typeof getGedScoreFailure>;
