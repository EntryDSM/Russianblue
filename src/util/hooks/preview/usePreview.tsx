import { useDispatch } from 'react-redux';
import { setPreview } from '../../../modules/redux/action/preview';
import { useSelectState } from '../default';

const usePreview = () => {
  const dispatch = useDispatch();
  const state = useSelectState().preview;
  const setState = {
    setPreview: (payload: string) => {
      dispatch(setPreview(payload));
    },
  };
  return { state, setState };
};

export default usePreview;
