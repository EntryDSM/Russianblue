import {
  addressType,
  gedInformationType,
  getGedInformationType,
  getInformationType,
  informationType,
  schoolArrayType,
} from 'src/constance/information';
import { error } from '../../../../models/error';
import {
  INPUT,
  GENDER,
  BIRTHDATE,
  BIRTHMONTH,
  BIRTHYEAR,
  IMAGEURL,
  IMAGEFILE,
  SCHOOLCODE,
  ADDRESS_AND_CODE,
  INFORMATION,
  INFORMATION_FAILURE,
  INFORMATION_SUCCESS,
  AUTOSAVE_INFORMATION,
  AUTOSAVE_INFORMATION_FAILURE,
  AUTOSAVE_INFORMATION_SUCCESS,
  GET_INFORMATION,
  GET_INFORMATION_FAILURE,
  GET_INFORMATION_SUCCESS,
  INFORMATION_IMAGE,
  INFORMATION_IMAGE_FAILURE,
  INFORMATION_IMAGE_SUCCESS,
  SEARCH_SCHOOL,
  SEARCH_SCHOOL_FAILURE,
  SEARCH_SCHOOL_SUCCESS,
  GEDINFORMATION,
  GEDINFORMATION_FAILURE,
  GEDINFORMATION_SUCCESS,
  GET_GEDINFORMATION,
  GET_GEDINFORMATION_FAILURE,
  GET_GEDINFORMATION_SUCCESS,
  AUTOSAVE_GEDINFORMATION,
  AUTOSAVE_GEDINFORMATION_FAILURE,
  AUTOSAVE_GEDINFORMATION_SUCCESS,
} from './interface';

export const setInput = (payload: { name: string; value: string }) => ({
  type: INPUT,
  payload,
});

export const setGender = (payload: string) => ({
  type: GENDER,
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
  type: IMAGEURL,
  payload,
});

export const setImageFile = (payload: File) => ({
  type: IMAGEFILE,
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

export const informationImage = (payload: File) => ({
  type: INFORMATION_IMAGE,
  payload,
});

export const informationImageSuccess = (payload: string) => ({
  type: INFORMATION_IMAGE_SUCCESS,
  payload,
});

export const informationImageFailure = (payload: error) => ({
  type: INFORMATION_IMAGE_FAILURE,
  payload,
});

export const gedInformation = (payload: gedInformationType) => ({
  type: GEDINFORMATION,
  payload,
});

export const gedInformationSuccess = () => ({
  type: GEDINFORMATION_SUCCESS,
});

export const gedInformationFailure = (payload: error) => ({
  type: GEDINFORMATION_FAILURE,
  payload,
});

export const getGedInformation = () => ({
  type: GET_GEDINFORMATION,
});

export const getGedInformationSuccess = (payload: getGedInformationType) => ({
  type: GET_GEDINFORMATION_SUCCESS,
  payload,
});

export const getGedInformationFailure = (payload: error) => ({
  type: GET_GEDINFORMATION_FAILURE,
  payload,
});

export const information = (payload: informationType) => ({
  type: INFORMATION,
  payload,
});

export const informationSuccess = (payload: boolean) => ({
  type: INFORMATION_SUCCESS,
  payload,
});

export const informationFailure = (payload: error) => ({
  type: INFORMATION_FAILURE,
  payload,
});

export const autoSaveInformation = (payload: informationType) => {
  return {
    type: AUTOSAVE_INFORMATION,
    payload,
  };
};

export const autoSaveInformationSuccess = () => ({
  type: AUTOSAVE_INFORMATION_SUCCESS,
});

export const autoSaveInformationFailure = (payload: error) => ({
  type: AUTOSAVE_INFORMATION_FAILURE,
  payload,
});

export const autoSaveGedInformation = (payload: gedInformationType) => {
  return {
    type: AUTOSAVE_GEDINFORMATION,
    payload,
  };
};

export const autoSaveGedInformationSuccess = () => ({
  type: AUTOSAVE_GEDINFORMATION_SUCCESS,
});

export const autoSaveGedInformationFailure = (payload: error) => ({
  type: AUTOSAVE_GEDINFORMATION_FAILURE,
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

export const searchSchool = (payload: {
  schoolSearchName: string;
  size: number;
  page: number;
}) => ({
  type: SEARCH_SCHOOL,
  payload,
});

export const searchSchoolSuccess = (payload: {
  content: Array<schoolArrayType>;
  total_pages: number;
}) => ({
  type: SEARCH_SCHOOL_SUCCESS,
  payload,
});

export const searchSchoolFailure = (payload: error) => ({
  type: SEARCH_SCHOOL_FAILURE,
  payload,
});

export type informationActionType =
  | ReturnType<typeof setInput>
  | ReturnType<typeof setBirthYear>
  | ReturnType<typeof setBirthMonth>
  | ReturnType<typeof setBirthDate>
  | ReturnType<typeof setGender>
  | ReturnType<typeof setImageUrl>
  | ReturnType<typeof setImageFile>
  | ReturnType<typeof setSchoolCode>
  | ReturnType<typeof setAddress>
  | ReturnType<typeof information>
  | ReturnType<typeof informationSuccess>
  | ReturnType<typeof informationFailure>
  | ReturnType<typeof autoSaveInformation>
  | ReturnType<typeof autoSaveInformationSuccess>
  | ReturnType<typeof autoSaveInformationFailure>
  | ReturnType<typeof getInformation>
  | ReturnType<typeof getInformationSuccess>
  | ReturnType<typeof getInformationFailure>
  | ReturnType<typeof informationImage>
  | ReturnType<typeof informationImageSuccess>
  | ReturnType<typeof informationImageFailure>
  | ReturnType<typeof searchSchool>
  | ReturnType<typeof searchSchoolSuccess>
  | ReturnType<typeof searchSchoolFailure>
  | ReturnType<typeof gedInformation>
  | ReturnType<typeof gedInformationSuccess>
  | ReturnType<typeof gedInformationFailure>
  | ReturnType<typeof getGedInformation>
  | ReturnType<typeof getGedInformationSuccess>
  | ReturnType<typeof getGedInformationFailure>
  | ReturnType<typeof autoSaveGedInformation>
  | ReturnType<typeof autoSaveGedInformationSuccess>
  | ReturnType<typeof autoSaveGedInformationFailure>;
