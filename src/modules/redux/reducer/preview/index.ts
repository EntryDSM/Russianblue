import { previewActionType } from '../../action/preview';
import { GET_PREVIEW_FAILURE, GET_PREVIEW_SUCCESS } from '../../action/preview/interface';
import PreviewState from './interface';

const initState: PreviewState = {
  preview: '',
  error: null,
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
    default:
      return state;
  }
};

export default previewReducer;
