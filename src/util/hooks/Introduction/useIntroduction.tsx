import { useDispatch } from 'react-redux';
import {
  setSelfIntroduction,
  setStudyPlan,
  saveBoth,
} from '../../../modules/redux/action/Introduction';
import { useSelectState } from '../default';

const useIntroduction = () => {
  const dispatch = useDispatch();
  const state = useSelectState().introduce;
  const setState = {
    setIntroduction: (payload: string) => {
      dispatch(setSelfIntroduction(payload));
    },
    setStudyPlan: (payload: string) => {
      dispatch(setStudyPlan(payload));
    },
    saveBoth: (payload: { selfIntroduction: string; studyPlan: string }) => {
      dispatch(saveBoth(payload));
    },
  };
  return { state, setState };
};

export default useIntroduction;
