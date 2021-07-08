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
import { createAction } from 'typesafe-actions'


export const setInput = createAction(INPUT)<{ name: string; value: string }>();
export const setSex = createAction(SEX)<string>();
export const setBirthYear = createAction(BIRTHYEAR)<number>();
export const setBirthMonth = createAction(BIRTHMONTH)<number>();
export const setBirthDate = createAction(BIRTHDATE)<number>();
export const setImageUrl = createAction(PICTUREURL)<string>();
export const setSchoolCode = createAction(SCHOOLCODE)<string>();
export const setAddress = createAction(ADDRESS_AND_CODE)<addressType>();
export const setSchoolName = createAction(SCHOOL_NAME)<string>();
export const information = createAction(INFORMATION)<informationType>();
export const informationSuccess = createAction(INFORMATION_SUCCESS)();
export const informationFailure = createAction(INFORMATION_FAILURE)<string>();
export const graduateInformation = createAction(GRADUATE_INFORMATION)<graduateInformationType>();
export const graduateInformationSuccess = createAction(GRADUATE_INFORMATION_SUCCESS)();
export const graduateInformationFailure = createAction(GRADUATE_INFORMATION_FAILURE)<error>();
export const getInformation = createAction(GET_INFORMATION)();
export const getInformationSuccess = createAction(GET_INFORMATION_SUCCESS)<getInformationType>();
export const getInformationFailure = createAction(GET_INFORMATION_FAILURE)<error>();
export const getGraduateInformation = createAction(GET_GRADUATE_INFORMATION)();
export const getGraduateInformationSuccess = createAction(GET_GRADUATE_INFORMATION_SUCCESS)<getGraduateInformationType>();
export const getGraduateInformationFailure = createAction(GET_GRADUATE_INFORMATION_FAILURE)<error>();
export const userPicture = createAction(USER_PICTURE)<File>();
export const userPictureSuccess = createAction(USER_PICTURE_SUCCESS)<string>();
export const userPictureFailure = createAction(USER_PICTURE_FAILURE)<error>();
export const searchSchool = createAction(SEARCH_SCHOOL)<searchSchoolQueryType>();
export const searchSchoolSuccess = createAction(SEARCH_SCHOOL_SUCCESS)<searchSchoolResponse>();
export const searchSchoolFailure = createAction(SEARCH_SCHOOL_FAILURE)<error>();
export const gedScore = createAction(GED_SCORE)<string>();
export const gedScoreSuccess = createAction(GED_SCORE_SUCCESS)();
export const gedScoreFailure = createAction(GED_SCORE_FAILURE)<error>();
export const getGedScore = createAction(GET_GED_SCORE)();
export const getGedScoreSuccess = createAction(GET_GED_SCORE_SUCCESS)<{ average_score: number }>();
export const getGedScoreFailure = createAction(GET_GED_SCORE_FAILURE)<error>();


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
