import React, { FC, Suspense } from 'react';
import { useModal } from '../../util/hooks/modal';
const Modal = React.lazy(() => import('../../components/modal'));

const ModalContainer: FC = () => {
  const { state, setState } = useModal();
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Modal type={state.type} setType={setState.setModalOn} />;
    </Suspense>
  );
};

export default ModalContainer;
