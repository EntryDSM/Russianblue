import IStatusState from './interface';
import { IS_END, IS_START, STATUS, DESCRIPTION, statusActionType } from '../../action/status';

const InitState: IStatusState = {
  status: '',
  description: '',
  isEnd: false,
  isStart: true,
};

const statusReducer = (action: statusActionType, state: IStatusState = InitState): IStatusState => {
  switch (action.type) {
    case STATUS: {
      return { ...state, status: action.payload };
    }
    case DESCRIPTION: {
      return { ...state, description: action.payload };
    }
    case IS_START: {
      return { ...state, isStart: action.payload };
    }
    case IS_END: {
      return { ...state, isEnd: action.payload };
    }
  }
};

export default statusReducer;
