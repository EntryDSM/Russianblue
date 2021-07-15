import { useDispatch } from 'react-redux';
import { final, finalPdf } from '../../../modules/redux/action/preview';
import { useSelectState } from '../default';

const usePreview = () => {
  const dispatch = useDispatch();
  const state = useSelectState().preview;
  const setState = {
    getFinalPdf: () => {
      dispatch(finalPdf());
    },
  };
  return { state, setState };
};

export default usePreview;
