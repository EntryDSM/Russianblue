import { informationActionType } from '../../action/information';
import {
  INPUT,
  GENDER,
  BIRTHDATE,
  BIRTHMONTH,
  BIRTHYEAR,
  IMAGEURL,
  IMAGEFILE,
  INFORMATION,
  INFORMATION_SUCCESS,
  INFORMATION_FAILURE,
  AUTOSAVE_INFORMATION,
  AUTOSAVE_INFORMATION_SUCCESS,
  AUTOSAVE_INFORMATION_FAILURE,
  GET_INFORMATION,
  GET_INFORMATION_SUCCESS,
  GET_INFORMATION_FAILURE,
} from '../../action/information/interface';
import InformationState from './interface';

const initState: InformationState = {
  name: '',
  gender: '',
  birthDay: '',
  birthYear: 2006,
  birthMonth: 1,
  birthDate: 1,
  schoolName: '',
  schoolPhoneNumber: '',
  parentName: '',
  parentPhoneNumber: '',
  phoneNumber: '',
  homePhoneNumber: '',
  zipCode: '',
  fullAddress: '',
  baseAddress: '',
  detailAddress: '',
  grade: '',
  stdGrade: '',
  stdClass: '',
  stdNumber: '',
  imageUrl: '',
  imageFile: '',
  isGraduated: false,
  error: null,
  isSuccessGetInformation: undefined,
  isSuccessSaveInformation: undefined,
};

const informationReducer = (
  state: InformationState = initState,
  action: informationActionType,
): InformationState => {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case BIRTHYEAR:
      return {
        ...state,
        birthYear: action.payload,
      };
    case BIRTHMONTH:
      return {
        ...state,
        birthMonth: action.payload,
      };
    case BIRTHDATE:
      return {
        ...state,
        birthDate: action.payload,
      };
    case IMAGEURL:
      return {
        ...state,
        imageUrl: action.payload,
      };
    case IMAGEFILE:
      return {
        ...state,
        imageFile: action.payload,
      };
    case INFORMATION:
      return {
        ...state,
        isSuccessSaveInformation: undefined,
        name: action.payload.name,
        gender: action.payload.grade,
        birthDay: action.payload.birthDay,
        schoolName: action.payload.schoolName,
        schoolPhoneNumber: action.payload.schoolPhoneNumber,
        parentName: action.payload.parentName,
        parentPhoneNumber: action.payload.parentPhoneNumber,
        phoneNumber: action.payload.phoneNumber,
        homePhoneNumber: action.payload.homePhoneNumber,
        baseAddress: action.payload.baseAddress,
        detailAddress: action.payload.detailAddress,
        zipCode: action.payload.zipcode,
        imageFile: action.payload.imageFile,
        grade: action.payload.grade,
        isGraduated: action.payload.isGraduated,
      };
    case INFORMATION_SUCCESS:
      return {
        ...state,
        isSuccessSaveInformation: true,
      };
    case INFORMATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case AUTOSAVE_INFORMATION:
      return {
        ...state,
        isSuccessSaveInformation: undefined,
        name: action.payload.name,
        gender: action.payload.grade,
        birthDay: action.payload.birthDay,
        schoolName: action.payload.schoolName,
        schoolPhoneNumber: action.payload.schoolPhoneNumber,
        parentName: action.payload.parentName,
        parentPhoneNumber: action.payload.parentPhoneNumber,
        phoneNumber: action.payload.phoneNumber,
        homePhoneNumber: action.payload.homePhoneNumber,
        baseAddress: action.payload.baseAddress,
        detailAddress: action.payload.detailAddress,
        zipCode: action.payload.zipcode,
        imageFile: action.payload.imageFile,
        grade: action.payload.grade,
        isGraduated: action.payload.isGraduated,
      };
    case AUTOSAVE_INFORMATION_SUCCESS:
      return {
        ...state,
      };
    case AUTOSAVE_INFORMATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_INFORMATION_SUCCESS:
      return {
        ...state,
        isSuccessSaveInformation: true,
        name: action.payload.name,
        gender: action.payload.sex,
        birthDay: action.payload.birthday,
        schoolName: action.payload.school_code,
        schoolPhoneNumber: action.payload.school_tel,
        parentName: action.payload.parent_name,
        parentPhoneNumber: action.payload.parent_tel,
        phoneNumber: action.payload.telephone_number,
        homePhoneNumber: action.payload.home_tel,
        baseAddress: action.payload.address,
        detailAddress: action.payload.detail_address,
        zipCode: action.payload.post_code,
        imageFile: action.payload.photo_file_name,
        grade: action.payload.student_number,
        isGraduated: action.payload.is_graduated,
      };
    case GET_INFORMATION_FAILURE:
      return {
        ...state,
        isSuccessGetInformation: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default informationReducer;
