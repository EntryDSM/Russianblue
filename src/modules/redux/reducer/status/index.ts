import IStatusState from './interface';
import { IS_END, IS_START, PROCESS, STATUS, statusActionType } from '../../action/status';
import mainConstance, {
  INTERVIEW,
  NOT_APPLICATION_PERIOD,
  START_DATE,
  statusType,
} from './mainConstance';
import { STATUS_FAILURE, STATUS_SUCCESS } from '../../action/status/interface';

const InitState: IStatusState = {
  status: NOT_APPLICATION_PERIOD,
  isEnd: false,
  isStart: true,
  processes: mainConstance,
  date: [
    {
      year: '2021',
      type: 'END_DATE',
      date: '2021-10-21T17:00',
    },
    {
      year: '2021',
      type: 'FIRST_ANNOUNCEMENT',
      date: '2021-10-22T00:00',
    },
    {
      year: '2021',
      type: 'INTERVIEW',
      date: '2021-10-23T00:00',
    },
    {
      year: '2021',
      type: 'SECOND_ANNOUNCEMENT',
      date: '2021-10-25T00:00',
    },
    {
      year: '2021',
      type: 'START_DATE',
      date: '2021-10-18T08:00',
    },
    {
      year: '2021',
      type: 'NOT_APPLICATION_PERIOD',
      date: '2021-10-20',
    },
  ],
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
        date: action.payload.schedules,
        status: action.payload.current_status as statusType,
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
