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
  application_type: '',
  socialType: '사회통합전형',
  is_daejeon: undefined,
  educational_status: '',
  graduationMonth: 1,
  graduationYear: 2022,
  graduated_at: '',
  application_remark: null,
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
        application_type: action.payload,
      };
    case SOCIALTYPE:
      return {
        ...state,
        socialType: action.payload,
      };
    case AREA:
      return {
        ...state,
        is_daejeon: action.payload,
      };
    case GRADUATION:
      return {
        ...state,
        educational_status: action.payload,
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
        application_remark: action.payload,
      };
    case SELECTTYPE:
      return {
        ...state,
        isSuccessSaveSelectType: undefined,
        application_remark: action.payload.application_remark,
        is_daejeon: action.payload.is_daejeon,
        application_type: action.payload.application_type,
        educational_status: action.payload.educational_status,
        graduated_at: action.payload.graduated_at,
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
        application_remark: action.payload.application_remark,
        is_daejeon: action.payload.is_daejeon,
        application_type: action.payload.application_type,
        educational_status: action.payload.educational_status,
        graduated_at: action.payload.graduated_at,
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
        application_remark: action.payload.application_remark,
        is_daejeon: action.payload.is_daejeon,
        application_type: action.payload.application_type,
        educational_status: action.payload.educational_status,
        graduated_at: action.payload.graduated_at,
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
