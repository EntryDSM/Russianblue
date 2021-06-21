import IStatusState from './interface';
import { IS_END, IS_START, PROCESS, STATUS, statusActionType } from '../../action/status';
import mainConstance, { NOT_APPLICATION_PERIOD, statusType } from './mainConstance';
import { STATUS_FAILURE, STATUS_SUCCESS } from '../../action/status/interface';

const InitState: IStatusState = {
  status: NOT_APPLICATION_PERIOD,
  isEnd: false,
  isStart: true,
  processes: mainConstance,
  date: [
    {
      year: '2022',
      type: 'START_DATE',
      date: '2022-10-31',
    },
    {
      year: '2022',
      type: 'END_DATE',
      date: '2022-10-31',
    },
    {
      year: '2022',
      type: 'FIRST_ANNOUNCE',
      date: '2022-10-31',
    },
    {
      year: '2022',
      type: 'SECOND_ANNOUNCE',
      date: '2022-10-31',
    },
    {
      year: '2022',
      type: 'INTERVIEW',
      date: '2022-10-31',
    },
    {
      year: '2022',
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
        // status: action.payload.current_status as statusType,
        status: 'BEFORE_FIRST_ANNOUNCE',
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
