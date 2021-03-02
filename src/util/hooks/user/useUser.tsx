import { useDispatch } from 'react-redux';
import { setName, setPhoneNumber } from '../../../modules/redux/action/user';
import { useSelectState } from '../default';

const useSignup = () => {
  const dispatch = useDispatch();
  const state = useSelectState().user;
  const setState = {
    setName: (payload: string) => {
      dispatch(setName(payload));
    },
    setPhoneNumber: (payload: string) => {
      dispatch(setPhoneNumber(payload));
    },
  };
  return { state, setState };
};

export default useSignup;
