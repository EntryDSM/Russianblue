import { useSelector } from 'react-redux';
import { ReducerType } from '../../../modules/redux/store';

const useSelectState = () => {
  return useSelector((state: ReducerType) => state);
};

export default useSelectState;
