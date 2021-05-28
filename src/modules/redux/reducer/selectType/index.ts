import { selectTypeActionType } from '../../action/selectType';
import {
  TYPE,
  SOCIALTYPE,
  AREA,
  GRADUATION,
  GRADUATION_MONTH,
  GRADUATION_YEAR,
  REMARK,
  INPUT,
} from '../../action/selectType/interface';
import SelectTypeState from './interface';

const initState: SelectTypeState = {
  type: '',
  socialType: '사회통합전형',
  area: '',
  graduation: '',
  graduation_month: 1,
  graduation_year: 2022,
  remark: '',
};

const SelectTypeReducer = (
  state: SelectTypeState = initState,
  action: selectTypeActionType,
): SelectTypeState => {
  switch (action.type) {
    case TYPE: {
      return {
        ...state,
        type: action.payload,
      };
    }
    case SOCIALTYPE: {
      return {
        ...state,
        socialType: action.payload,
      };
    }
    case AREA: {
      return {
        ...state,
        area: action.payload,
      };
    }
    case GRADUATION: {
      return {
        ...state,
        graduation: action.payload,
      };
    }
    case GRADUATION_MONTH: {
      return {
        ...state,
        graduation_month: action.payload,
      };
    }
    case GRADUATION_YEAR: {
      return {
        ...state,
        graduation_year: action.payload,
      };
    }
    case REMARK: {
      return {
        ...state,
        remark: action.payload,
      };
    }
    case INPUT: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    default: {
      return state;
    }
  }
};

export default SelectTypeReducer;