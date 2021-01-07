import { modalActionType, MODAL_OFF, MODAL_ON } from '../../action/modal';
import IModalState from './interface';

const InitState: IModalState = {
  firstNotifyModal: false,
  secondNotifyModal: false,
  loginModal: false,
};

const ModalReducer = (action: modalActionType, state: IModalState = InitState) => {
  switch (action.type) {
    case MODAL_ON: {
      return { ...state, [action.payload]: true };
    }
    case MODAL_OFF: {
      return { ...state, [action.payload]: false };
    }
  }
};

export default ModalReducer;
