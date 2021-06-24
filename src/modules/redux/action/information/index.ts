import { error } from '../../../../models/error';
import {
  INPUT,
  GENDER,
  BIRTHDATE,
  BIRTHMONTH,
  BIRTHYEAR,
  IMAGEURL,
  IMAGEFILE,
  INFORMATION,
  INFORMATION_FAILURE,
  INFORMATION_SUCCESS,
  AUTOSAVE_INFORMATION,
  AUTOSAVE_INFORMATION_FAILURE,
  AUTOSAVE_INFORMATION_SUCCESS,
  GET_INFORMATION,
  GET_INFORMATION_FAILURE,
  GET_INFORMATION_SUCCESS,
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

export const setImageFile = (payload: String) => ({
  type: IMAGEFILE,
  payload,
});

export const information = (payload: {
  name: string;
  gender: string;
  birthDay: string;
  schoolName: string;
  schoolPhoneNumber: string;
  parentName: string;
  parentPhoneNumber: string;
  phoneNumber: string;
  homePhoneNumber: string;
  baseAddress: string;
  detailAddress: string;
  zipcode: string;
  imageFile: string;
  grade: string;
  isGraduated: boolean;
}) => ({
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

export const autoSaveInformation = (payload: {
  name: string;
  gender: string;
  birthDay: string;
  schoolName: string;
  schoolPhoneNumber: string;
  parentName: string;
  parentPhoneNumber: string;
  phoneNumber: string;
  homePhoneNumber: string;
  baseAddress: string;
  detailAddress: string;
  zipcode: string;
  imageFile: string;
  grade: string;
  isGraduated: boolean;
}) => ({
  type: AUTOSAVE_INFORMATION,
  payload,
});

export const autoSaveInformationSuccess = () => ({
  type: AUTOSAVE_INFORMATION_SUCCESS,
});

export const autoSaveInformationFailure = (payload: error) => ({
  type: AUTOSAVE_INFORMATION_FAILURE,
  payload,
});

export const getInformation = () => ({
  type: GET_INFORMATION,
});

export const getInformationSuccess = (payload: {
  name: string;
  sex: string;
  birthday: string;
  school_code: string;
  school_tel: string;
  parent_name: string;
  parent_tel: string;
  telephone_number: string;
  home_tel: string;
  address: string;
  detail_address: string;
  post_code: string;
  photo_file_name: string;
  student_number: string;
  is_graduated: boolean;
}) => ({
  type: GET_INFORMATION_SUCCESS,
  payload,
});

export const getInformationFailure = (payload: error) => ({
  type: GET_INFORMATION_FAILURE,
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
  | ReturnType<typeof information>
  | ReturnType<typeof informationSuccess>
  | ReturnType<typeof informationFailure>
  | ReturnType<typeof autoSaveInformation>
  | ReturnType<typeof autoSaveInformationSuccess>
  | ReturnType<typeof autoSaveInformationFailure>
  | ReturnType<typeof getInformation>
  | ReturnType<typeof getInformationSuccess>
  | ReturnType<typeof getInformationFailure>;
