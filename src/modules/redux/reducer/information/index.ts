import { informationActionType } from '../../action/information';
import {
  INPUT,
  SEX,
  BIRTHDATE,
  BIRTHMONTH,
  BIRTHYEAR,
  PICTUREURL,
  SCHOOLCODE,
  ADDRESS_AND_CODE,
  INFORMATION,
  INFORMATION_SUCCESS,
  INFORMATION_FAILURE,
  GRADUATE_INFORMATION,
  GRADUATE_INFORMATION_SUCCESS,
  GRADUATE_INFORMATION_FAILURE,
  GET_INFORMATION_SUCCESS,
  GET_INFORMATION_FAILURE,
  GET_GRADUATE_INFORMATION_SUCCESS,
  GET_GRADUATE_INFORMATION_FAILURE,
  USER_PICTURE,
  USER_PICTURE_SUCCESS,
  USER_PICTURE_FAILURE,
  SEARCH_SCHOOL,
  SEARCH_SCHOOL_SUCCESS,
  SEARCH_SCHOOL_FAILURE,
  SCHOOL_NAME,
  GED_SCORE,
  GED_SCORE_FAILURE,
  GED_SCORE_SUCCESS,
  GET_GED_SCORE_FAILURE,
  GET_GED_SCORE_SUCCESS,
} from '../../action/information/interface';
import InformationState from './interface';

const initState: InformationState = {
  userName: '',
  sex: '',
  birthYear: 2021,
  birthMonth: 1,
  birthDate: 1,
  parentName: '',
  parentTel: '',
  telephoneNumber: '',
  homeTel: '',
  address: '',
  detailAddress: '',
  postCode: '',
  schoolCode: '',
  schoolTel: '',
  stdGrade: '',
  stdClass: '',
  stdNumber: '',
  schoolName: '',
  searchSchoolName: '',
  totalScore: '0',
  photoFileName: '',
  pictureUrl: '',
  userPicture: null,
  page: 0,
  size: 0,
  totalPages: 0,
  content: [],
  error: null,
  isSuccessSaveUserPicture: undefined,
  isSuccessSaveInformation: undefined,
  isSuccessSaveGraduateInformation: undefined,
  isSuccessSaveGedScore: undefined,
  isSuccessGetSearchSchool: undefined,
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
        isSuccessSaveInformation: undefined,
        isSuccessSaveGraduateInformation: undefined,
      };
    case SEX:
      return {
        ...state,
        sex: action.payload,
        isSuccessSaveInformation: undefined,
      };
    case BIRTHYEAR:
      return {
        ...state,
        birthYear: action.payload,
        isSuccessSaveInformation: undefined,
      };
    case BIRTHMONTH:
      return {
        ...state,
        birthMonth: action.payload,
        isSuccessSaveInformation: undefined,
      };
    case BIRTHDATE:
      return {
        ...state,
        birthDate: action.payload,
        isSuccessSaveInformation: undefined,
      };
    case PICTUREURL:
      return {
        ...state,
        pictureUrl: action.payload,
      };
    case SCHOOLCODE:
      return {
        ...state,
        schoolCode: action.payload,
        isSuccessSaveGraduateInformation: undefined,
      };
    case SCHOOL_NAME:
      return {
        ...state,
        schoolName: action.payload,
      };
    case ADDRESS_AND_CODE:
      return {
        ...state,
        address: action.payload.address,
        postCode: action.payload.postCode,
        isSuccessSaveInformation: undefined,
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
        isSuccessSaveInformation: false,
      };
    case GRADUATE_INFORMATION:
      return {
        ...state,
        isSuccessSaveGraduateInformation: undefined,
      };
    case GRADUATE_INFORMATION_SUCCESS:
      return {
        ...state,
        isSuccessSaveGraduateInformation: true,
      };
    case GRADUATE_INFORMATION_FAILURE:
      return {
        ...state,
        isSuccessSaveGraduateInformation: false,
      };
    case GET_INFORMATION_SUCCESS:
      return {
        ...state,
        userName: action.payload.name,
        sex: action.payload.sex,
        birthYear: action.payload.birthday ? Number(action.payload.birthday.slice(0, 4)) : 2021,
        birthMonth: action.payload.birthday ? Number(action.payload.birthday.slice(5, 7)) : 1,
        birthDate: action.payload.birthday ? Number(action.payload.birthday.slice(8)) : 1,
        parentName: action.payload.parent_name,
        parentTel: action.payload.parent_tel,
        telephoneNumber: action.payload.telephone_number,
        homeTel: action.payload.home_tel,
        address: action.payload.address,
        detailAddress: action.payload.detail_address,
        postCode: action.payload.post_code,
        photoFileName: action.payload.photo_file_name,
      };
    case GET_INFORMATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_GRADUATE_INFORMATION_SUCCESS:
      return {
        ...state,
        userName: action.payload.name,
        sex: action.payload.sex,
        birthYear: action.payload.birthday ? Number(action.payload.birthday.slice(0, 4)) : 2021,
        birthMonth: action.payload.birthday ? Number(action.payload.birthday.slice(5, 7)) : 1,
        birthDate: action.payload.birthday ? Number(action.payload.birthday.slice(8)) : 1,
        parentName: action.payload.parent_name,
        parentTel: action.payload.parent_tel,
        telephoneNumber: action.payload.telephone_number,
        homeTel: action.payload.home_tel,
        address: action.payload.address,
        detailAddress: action.payload.detail_address,
        postCode: action.payload.post_code,
        photoFileName: action.payload.photo_file_name,
        stdGrade: action.payload.student_number ? action.payload.student_number.slice(0, 1) : '',
        stdClass: action.payload.student_number ? action.payload.student_number.slice(1, 2) : '',
        stdNumber: action.payload.student_number ? action.payload.student_number.slice(2) : '',
        schoolName: action.payload.school_name,
        schoolCode: action.payload.school_code,
        schoolTel: action.payload.school_tel,
      };
    case GET_GRADUATE_INFORMATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case USER_PICTURE:
      return {
        ...state,
        userPicture: action.payload,
        isSuccessSaveUserPicture: undefined,
      };
    case USER_PICTURE_SUCCESS:
      return {
        ...state,
        isSuccessSaveUserPicture: true,
      };
    case USER_PICTURE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessSaveUserPicture: false,
      };
    case SEARCH_SCHOOL:
      return {
        ...state,
        searchSchoolName: action.payload.name,
        size: action.payload.size,
        page: action.payload.page,
        content: action.payload.name === state.searchSchoolName ? state.content : [],
      };
    case SEARCH_SCHOOL_SUCCESS:
      console.log(action.payload.content);
      return {
        ...state,
        isSuccessGetSearchSchool: true,
        content: state.content
          ? state.content.concat(action.payload.content)
          : action.payload.content,
        totalPages: action.payload.total_pages,
      };
    case SEARCH_SCHOOL_FAILURE:
      return {
        ...state,
        isSuccessGetSearchSchool: false,
      };
    case GED_SCORE:
      return {
        ...state,
        isSuccessSaveGedScore: undefined,
        totalScore: action.payload,
      };
    case GED_SCORE_SUCCESS:
      return {
        ...state,
        isSuccessSaveGedScore: true,
      };
    case GED_SCORE_FAILURE:
      return {
        ...state,
        isSuccessSaveGedScore: false,
        error: action.payload,
      };
    case GET_GED_SCORE_SUCCESS:
      return {
        ...state,
        totalScore: String(action.payload.average_score),
      };
    case GET_GED_SCORE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default informationReducer;
