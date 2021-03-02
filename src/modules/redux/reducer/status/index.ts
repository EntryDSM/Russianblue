import IStatusState from './interface';
import { IS_END, IS_START, PROCESS, STATUS, statusActionType } from '../../action/status';
import mainConstance from './mainConstance';
const InitState: IStatusState = {
  status: 'finalAnnouncement',
  isEnd: false,
  isStart: true,
  processes: mainConstance,
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
    default: {
      return state;
    }
  }
};

export default statusReducer;
