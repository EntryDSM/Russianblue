import { selectTypeActionType } from '../../action/selectType';
import {
  TYPE,
  SOCIALTYPE,
  AREA,
  GRADUATION,
  GRADUATION_MONTH,
  GRADUATION_YEAR,
  REMARK,
  SELECTTYPE,
  SELECTTYPE_SUCCESS,
  SELECTTYPE_FAILURE,
  GET_SELECTTYPE_FAILURE,
  GET_SELECTTYPE_SUCCESS,
  AUTOSAVE_SELECTTYPE,
  AUTOSAVE_SELECTTYPE_SUCCESS,
  AUTOSAVE_SELECTTYPE_FAILURE,
} from '../../action/selectType/interface';
import SelectTypeState from './interface';

const initState: SelectTypeState = {
  applicationType: '',
  socialType: '사회통합전형',
  isDaejeon: undefined,
  educationalStatus: '',
  graduationMonth: 1,
  graduationYear: 2022,
  graduatedAt: '',
  applicationRemark: null,
  error: null,
  isSuccessSaveSelectType: undefined,
  isSuccessGetSelectType: undefined,
};

const SelectTypeReducer = (
  state: SelectTypeState = initState,
  action: selectTypeActionType,
): SelectTypeState => {
  switch (action.type) {
    case TYPE:
      return {
        ...state,
        applicationType: action.payload,
      };
    case SOCIALTYPE:
      return {
        ...state,
        socialType: action.payload,
      };
    case AREA:
      return {
        ...state,
        isDaejeon: action.payload,
      };
    case GRADUATION:
      return {
        ...state,
        educationalStatus: action.payload,
      };
    case GRADUATION_MONTH:
      return {
        ...state,
        graduationMonth: action.payload,
      };
    case GRADUATION_YEAR:
      return {
        ...state,
        graduationYear: action.payload,
      };
    case REMARK:
      return {
        ...state,
        applicationRemark: action.payload,
      };
    case SELECTTYPE:
      return {
        ...state,
        isSuccessSaveSelectType: undefined,
        applicationRemark: action.payload.applicationRemark,
        isDaejeon: action.payload.isDaejeon,
        applicationType: action.payload.applicationType,
        educationalStatus: action.payload.educationalStatus,
        graduatedAt: action.payload.graduatedAt,
      };
    case SELECTTYPE_SUCCESS:
      return {
        ...state,
        isSuccessSaveSelectType: true,
      };
    case SELECTTYPE_FAILURE:
      return {
        ...state,
        isSuccessSaveSelectType: false,
        error: action.payload,
      };
    case AUTOSAVE_SELECTTYPE:
      return {
        ...state,
        applicationRemark: action.payload.applicationRemark,
        isDaejeon: action.payload.isDaejeon,
        applicationType: action.payload.applicationType,
        educationalStatus: action.payload.educationalStatus,
        graduatedAt: action.payload.graduatedAt,
      };
    case AUTOSAVE_SELECTTYPE_SUCCESS:
      return {
        ...state,
      };
    case AUTOSAVE_SELECTTYPE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_SELECTTYPE_SUCCESS:
      return {
        ...state,
        isSuccessGetSelectType: true,
        applicationRemark: action.payload.application_remark,
        isDaejeon: action.payload.is_daejeon,
        applicationType: action.payload.application_type,
        educationalStatus: action.payload.educational_status,
        graduatedAt: action.payload.graduated_at,
      };
    case GET_SELECTTYPE_FAILURE:
      return {
        ...state,
        isSuccessGetSelectType: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default SelectTypeReducer;
