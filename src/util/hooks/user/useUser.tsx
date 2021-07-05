import { useDispatch } from 'react-redux';
import { getUser, setName, setPhoneNumber } from '../../../modules/redux/action/user';
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
    getUser: () => {
      dispatch(getUser());
    },
  };
  return { state, setState };
};

export default useSignup;
