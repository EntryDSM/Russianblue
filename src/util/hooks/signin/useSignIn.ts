import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import { setId, setPassword } from '../../../modules/redux/action/signin';

const useProcess = () => {
  const dispatch = useDispatch();
  const state = useSelectState().signin;
  const setState = {
    setId: (payload: string) => {
      dispatch(setId(payload));
    },
    setPassword: (payload: string) => {
      dispatch(setPassword(payload));
    },
  };
  return {
    state,
    setState,
  };
};

export default useProcess;
