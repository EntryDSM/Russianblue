import { modalActionType, MODAL_OFF, MODAL_ON } from '../../action/modal';
import IModalState from './interface';

const initState: IModalState = {
  type: '',
};

const ModalReducer = (state: IModalState = initState, action: modalActionType) => {
  switch (action.type) {
    case MODAL_ON: {
      return { ...state, type: action.payload };
    }
    case MODAL_OFF: {
      return { ...state, type: '' };
    }
    default: {
      return state;
    }
  }
};

export default ModalReducer;
