import { previewActionType } from '../../action/preview';
import {
  FINAL,
  FINAL_FAILURE,
  FINAL_PDF_FAILURE,
  FINAL_PDF_SUCCESS,
  FINAL_SUCCESS,
  GET_PREVIEW_FAILURE,
  GET_PREVIEW_SUCCESS,
} from '../../action/preview/interface';
import PreviewState from './interface';

const initState: PreviewState = {
  preview: '',
  error: null,
  isSuccessSaveFinal: undefined,
  finalPdf: null,
};

const previewReducer = (
  state: PreviewState = initState,
  action: previewActionType,
): PreviewState => {
  switch (action.type) {
    case GET_PREVIEW_SUCCESS:
      return {
        ...state,
        preview: action.payload,
      };
    case GET_PREVIEW_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FINAL:
      return {
        ...state,
        isSuccessSaveFinal: undefined,
      };
    case FINAL_SUCCESS:
      return {
        ...state,
        isSuccessSaveFinal: true,
      };
    case FINAL_FAILURE:
      return {
        ...state,
        isSuccessSaveFinal: false,
      };
    case FINAL_PDF_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case FINAL_PDF_SUCCESS: {
      return {
        ...state,
        finalPdf: action.payload,
      };
    }
    default:
      return state;
  }
};

export default previewReducer;
