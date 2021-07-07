import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';

const usePreview = () => {
  const dispatch = useDispatch();
  const state = useSelectState().preview;
  const setState = {};
  return { state, setState };
};

export default usePreview;
