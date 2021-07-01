import { previewActionType } from '../../action/preview';
import { PREVIEW } from '../../action/preview/interface';
import PreviewState from './interface';

const initState: PreviewState = {
  preview: '',
};

const previewReducer = (
  state: PreviewState = initState,
  action: previewActionType,
): PreviewState => {
  switch (action.type) {
    case PREVIEW:
      return {
        ...state,
        preview: action.payload,
      };
    default:
      return state;
  }
};

export default previewReducer;
