import { informationActionType } from '../../action/information';
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
  INFORMATION_SUCCESS,
  INFORMATION_FAILURE,
  AUTOSAVE_INFORMATION,
  AUTOSAVE_INFORMATION_SUCCESS,
  AUTOSAVE_INFORMATION_FAILURE,
  INFORMATION_IMAGE,
  INFORMATION_IMAGE_FAILURE,
  INFORMATION_IMAGE_SUCCESS,
  SEARCH_SCHOOL,
  SEARCH_SCHOOL_FAILURE,
  SEARCH_SCHOOL_SUCCESS,
  GET_INFORMATION_SUCCESS,
  GET_INFORMATION_FAILURE,
  GEDINFORMATION,
  GEDINFORMATION_SUCCESS,
  GEDINFORMATION_FAILURE,
  GET_GEDINFORMATION_SUCCESS,
  GET_GEDINFORMATION_FAILURE,
  AUTOSAVE_GEDINFORMATION,
  AUTOSAVE_GEDINFORMATION_FAILURE,
  AUTOSAVE_GEDINFORMATION_SUCCESS,
} from '../../action/information/interface';
import InformationState from './interface';

const initState: InformationState = {
  name: '',
  gender: '',
  birthYear: 2006,
  birthMonth: 1,
  birthDate: 1,
  schoolCode: '',
  schoolName: '',
  schoolPhoneNumber: '',
  parentName: '',
  parentPhoneNumber: '',
  phoneNumber: '',
  homePhoneNumber: '',
  zipCode: '',
  baseAddress: '',
  detailAddress: '',
  grade: '',
  stdGrade: '',
  stdClass: '',
  stdNumber: '',
  totalScore: 0,
  imageUrl: '',
  imageFile: null,
  schoolSearchName: '',
  page: 0,
  size: 10,
  content: null,
  totalPages: 0,
  error: null,
  isSuccessSaveInformationImage: undefined,
  isSuccessGetInformation: undefined,
  isSuccessSaveInformation: undefined,
  isSuccessSaveSearchSchool: undefined,
  isSuccessSaveGedInformation: undefined,
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
    case SCHOOLCODE:
      return {
        ...state,
        schoolCode: action.payload,
      };
    case ADDRESS_AND_CODE:
      return {
        ...state,
        baseAddress: action.payload.baseAddress,
        zipCode: action.payload.zipCode,
      };
    case GEDINFORMATION:
      return {
        ...state,
      };
    case GEDINFORMATION_SUCCESS:
      return {
        ...state,
        isSuccessSaveGedInformation: true,
      };
    case GEDINFORMATION_FAILURE:
      return {
        ...state,
        isSuccessSaveGedInformation: false,
        error: action.payload,
      };
    case GET_GEDINFORMATION_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        gender: action.payload.sex,
        birthYear: Number(action.payload.birthday.slice(0, 4)),
        birthMonth: Number(action.payload.birthday.slice(5, 7)),
        birthDate: Number(action.payload.birthday.slice(8)),
        parentName: action.payload.parent_name,
        parentPhoneNumber: action.payload.parent_tel,
        phoneNumber: action.payload.telephone_number,
        homePhoneNumber: action.payload.home_tel,
        baseAddress: action.payload.address,
        detailAddress: action.payload.detail_address,
        zipCode: action.payload.post_code,
        imageUrl: action.payload.photo_file_name,
        totalScore: action.payload.average_score,
      };
    case GET_GEDINFORMATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case INFORMATION:
      return {
        ...state,
        isSuccessSaveInformation: undefined,
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
    case AUTOSAVE_GEDINFORMATION:
      return {
        ...state,
        isSuccessSaveGedInformation: undefined,
      };
    case AUTOSAVE_GEDINFORMATION_SUCCESS:
      return {
        ...state,
      };
    case AUTOSAVE_GEDINFORMATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_INFORMATION_SUCCESS:
      return {
        ...state,
        isSuccessGetInformation: true,
        name: action.payload.name,
        gender: action.payload.sex,
        birthYear: Number(action.payload.birthday.slice(0, 4)),
        birthMonth: Number(action.payload.birthday.slice(5, 7)),
        birthDate: Number(action.payload.birthday.slice(8)),
        schoolCode: action.payload.school_code,
        schoolPhoneNumber: action.payload.school_tel,
        parentName: action.payload.parent_name,
        parentPhoneNumber: action.payload.parent_tel,
        phoneNumber: action.payload.telephone_number,
        homePhoneNumber: action.payload.home_tel,
        baseAddress: action.payload.address,
        detailAddress: action.payload.detail_address,
        zipCode: action.payload.post_code,
        imageUrl: action.payload.photo_file_name,
        stdGrade: action.payload.student_number.slice(0, 1),
        stdClass: action.payload.student_number.slice(1, 2),
        stdNumber: action.payload.student_number.slice(3),
        schoolName: action.payload.school_name,
      };
    case GET_INFORMATION_FAILURE:
      return {
        ...state,
        isSuccessGetInformation: false,
        error: action.payload,
      };
    case INFORMATION_IMAGE:
      return {
        ...state,
        isSuccessSaveInformationImage: undefined,
        imageFile: action.payload,
      };
    case INFORMATION_IMAGE_SUCCESS:
      return {
        ...state,
        imageUrl: action.payload,
        isSuccessSaveInformationImage: true,
      };
    case INFORMATION_IMAGE_FAILURE:
      return {
        ...state,
        isSuccessSaveInformationImage: false,
        error: action.payload,
      };
    case SEARCH_SCHOOL:
      return {
        ...state,
        isSuccessSaveSearchSchool: undefined,
        schoolSearchName: action.payload.schoolSearchName,
        page: action.payload.page,
        size: action.payload.size,
      };
    case SEARCH_SCHOOL_SUCCESS:
      return {
        ...state,
        isSuccessSaveSearchSchool: true,
        content: state.content
          ? state.content.concat(action.payload.content)
          : action.payload.content,
        totalPages: action.payload.total_pages,
      };
    case SEARCH_SCHOOL_FAILURE:
      return {
        ...state,
        isSuccessSaveSearchSchool: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default informationReducer;
