import { useDispatch } from 'react-redux';
import { useSelectState } from '../default';
import { setProcess, setIsEnd, setIsStart, setStatus } from '../../../modules/redux/action/status';
import { processType } from 'src/modules/redux/action/status/interface';

const useProcess = () => {
  const dispatch = useDispatch();
  const state = useSelectState().status;
  const setState = {
    setStatus: (payload: string) => dispatch(setStatus(payload)),
    setIsStart: (payload: boolean) => dispatch(setIsStart(payload)),
    setIsEnd: (payload: boolean) => dispatch(setIsEnd(payload)),
    setProcess: (payload: processType[]) => dispatch(setProcess(payload)),
  };
  return {
    state,
    setState,
  };
};

export default useProcess;
