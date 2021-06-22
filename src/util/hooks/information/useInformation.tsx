import { useDispatch } from 'react-redux';
import {
  setInput,
  setGender,
  setBirthDate,
  setBirthMonth,
  setBirthYear,
  setImageUrl,
  setImageFile,
} from '../../../modules/redux/action/information';
import { useSelectState } from '../default';

const useInformation = () => {
  const dispatch = useDispatch();
  const state = useSelectState().information;
  const setState = {
    setInput: (payload: { name: string; value: string }) => {
      dispatch(setInput(payload));
    },
    setGender: (payload: string) => {
      dispatch(setGender(payload));
    },
    setBirthYear: (payload: number) => {
      dispatch(setBirthYear(payload));
    },
    setBirthMonth: (payload: number) => {
      dispatch(setBirthMonth(payload));
    },
    setBirthDate: (payload: number) => {
      dispatch(setBirthDate(payload));
    },
    setImageUrl: (payload: string) => {
      dispatch(setImageUrl(payload));
    },
    setImageFile: (payload: File) => {
      dispatch(setImageFile(payload));
    },
  };
  return { state, setState };
};

export default useInformation;
