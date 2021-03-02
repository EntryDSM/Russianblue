import React, { FC } from 'react';
import Modal from '../../components/modal';
import { useModal } from '../../util/hooks/modal';
const ModalContainer: FC = () => {
  const { state, setState } = useModal();
  return <Modal type={state.type} setType={setState.setModalOn} />;
};

export default ModalContainer;
