import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import { setModalOff, setModalOn } from '../../../modules/redux/action/modal';

const useProcess = () => {
  const dispatch = useDispatch();
  const state = useSelectState().modal;
  const setState = {
    setModalOff: (payload: string) => {
      dispatch(setModalOff(payload));
    },
    setModalOn: (payload: string) => {
      dispatch(setModalOn(payload));
    },
  };
  return {
    state,
    setState,
  };
};

export default useProcess;
