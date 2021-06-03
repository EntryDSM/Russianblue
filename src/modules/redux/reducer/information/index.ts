import { informationActionType } from '../../action/information';
import {
  INPUT,
  GENDER,
  BIRTHDATE,
  BIRTHMONTH,
  BIRTHYEAR,
  IMAGEURL,
  IMAGEFILE,
} from '../../action/information/interface';
import InformationState from './interface';

const initState: InformationState = {
  name: '',
  value: '',
  gender: '',
  birthYear: 2006,
  birthMonth: 1,
  birthDate: 1,
  imageUrl: '',
  imageFile: null,
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
    default:
      return state;
  }
};

export default informationReducer;
