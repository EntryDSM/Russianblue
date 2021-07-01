import React, { FC } from 'react';
import DeleteButton from './default/deleteButton';
import LoginModal from './login/LoginModal';
import * as S from './style';
import {
  SetPhoneNumberModal,
  VertifyCodeModal,
  SetNewPasswordModal,
  EndModal,
} from './resetPassword';
import { AccessErrorModal, FileErrorModal, SubmitModal } from './other';
import NoticeModal from './notice/NoticeModal';
import useResetPassword from '../../util/hooks/resetPassword/useResetPassword';

const MODAL_TYPE = {
  setPhoneNumberModal: 'resetPassword1',
  vertifyCodeModal: 'resetPassword2',
  setNewPasswordModal: 'resetPassword3',
  endSetNewPasswordModal: 'resetPassword4',
  loginModal: 'signin',
  accessErrorModal: 'accessErrorModal',
  fileErrorModal: 'fileErrorModal',
  submitModal: 'submitModal',
  notice: 'notice',
};

interface Props {
  type: string;
  setType: (payload: string) => void;
}

const Modal: FC<Props> = ({ type, setType }) => {
  const { state, setState } = useResetPassword();
  const isAgreeBefore: boolean = localStorage.getItem('agree') === 'true';
  const deleteModal = () => {
    setType('');
  };
  const modalClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const goVertifyCodeModal = () => {
    setType(MODAL_TYPE.vertifyCodeModal);
  };
  const goSetNewPasswordModal = () => {
    setType(MODAL_TYPE.setNewPasswordModal);
  };
  const goSetPhoneNumberModal = () => {
    setType(MODAL_TYPE.setPhoneNumberModal);
  };
  const goEndResetPasswordModal = () => {
    setState.resetPassword({
      email: state.vertifyPhoneNumber,
      password: state.newPassword,
    });
    setType(MODAL_TYPE.endSetNewPasswordModal);
  };
  if (type === '') return <></>;
  if (type === 'notice' && isAgreeBefore != true) return <NoticeModal deleteModal={deleteModal} />;
  return (
    <>
      <S.ModalWrapper onClick={deleteModal}>
        <S.Modal onClick={modalClickHandler}>
          <DeleteButton setType={setType} />
          {type === MODAL_TYPE.loginModal ? <LoginModal /> : ''}
          {type === MODAL_TYPE.setPhoneNumberModal ? (
            <SetPhoneNumberModal goNext={goVertifyCodeModal} />
          ) : (
            ''
          )}
          {type === MODAL_TYPE.vertifyCodeModal ? (
            <VertifyCodeModal goNext={goSetNewPasswordModal} goPrev={goSetPhoneNumberModal} />
          ) : (
            ''
          )}
          {type === MODAL_TYPE.setNewPasswordModal ? (
            <SetNewPasswordModal goNext={goEndResetPasswordModal} goPrev={goVertifyCodeModal} />
          ) : (
            ''
          )}
          {type === MODAL_TYPE.endSetNewPasswordModal ? <EndModal goNext={deleteModal} /> : ''}
          {type === MODAL_TYPE.submitModal ? <SubmitModal goNext={deleteModal} /> : ''}
          {type === MODAL_TYPE.fileErrorModal ? <FileErrorModal goNext={deleteModal} /> : ''}
          {type === MODAL_TYPE.accessErrorModal ? <AccessErrorModal goNext={deleteModal} /> : ''}
        </S.Modal>
      </S.ModalWrapper>
    </>
  );
};

export default Modal;
