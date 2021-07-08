import { useDispatch } from 'react-redux';
import { GradeType } from '../../../constance/grade';
import { setInput, setGrade } from '../../../modules/redux/action/grade';
import { useSelectState } from '../default';

const useGrade = () => {
  const dispatch = useDispatch();
  const state = useSelectState().grade;
  const setState = {
    setInput: (payload: { name: string; value: number }) => {
      dispatch(setInput(payload));
    },
    setGrade: (payload: { grade: GradeType }) => {
      dispatch(setGrade(payload));
    },
  };
  return { state, setState };
};

export default useGrade;
