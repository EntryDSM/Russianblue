import IStatusState from './interface';
import { IS_END, IS_START, PROCESS, STATUS, statusActionType } from '../../action/status';
import mainConstance from './mainConstance';
import { STATUS_FAILURE, STATUS_SUCCESS } from '../../action/status/interface';
const InitState: IStatusState = {
  status: 'START_DATE',
  isEnd: false,
  isStart: true,
  processes: mainConstance,
  date: [],
  error: 0,
};

const statusReducer = (state: IStatusState = InitState, action: statusActionType): IStatusState => {
  switch (action.type) {
    case STATUS: {
      return { ...state, status: action.payload };
    }
    case IS_START: {
      return { ...state, isStart: action.payload };
    }
    case IS_END: {
      return { ...state, isEnd: action.payload };
    }
    case PROCESS: {
      return { ...state, processes: action.payload };
    }
    case STATUS_SUCCESS: {
      return {
        ...state,
        date: action.payload,
      };
    }
    case STATUS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default statusReducer;
