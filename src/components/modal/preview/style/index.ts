import styled, { css } from 'styled-components';
import { pxToRem, color } from '../../../../style';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${pxToRem(60)}rem;
  left: 0;
  z-index: 100;
  padding: 0;
`;

export const ModalTitle = styled.p`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
`;

export const ModalExplain = styled.p`
  font-size: 17px;
  text-align: center;
  > span {
    color: ${color.main};
    font-weight: bold;
  }
`;

export const ModalExplainBox = styled.div`
  margin-top: 30px;
`;

export const AccessBtn = styled.button`
  width: 280px;
  height: 50px;
  background-color: ${color.main};
  display: block;
  color: white;
  border: none;
  text-align: center;
  border-radius: 5px;
  font-size: 18px;
  margin: 0 auto;
  cursor: pointer;
  margin-top: 70px;
`;

export const PrecautionModalMain = styled.div`
  width: 490px;
  height: 490px;
  background-color: white;
  position: absolute;
  top: 50%;
  margin-top: -320px;
  box-sizing: border-box;
  padding: 90px 0px;
  border-radius: 3px;
`;

export const ConfirmSubmissionModal = styled.div`
  width: 420px;
  height: 580px;
  background-color: white;
  position: absolute;
  top: 50%;
  margin-top: -310px;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 105px 0px;
`;

export const CloseBtn = styled.img`
  width: 11px;
  height: 11px;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

export const SubmitImg = styled.img`
  width: 117px;
  height: 106px;
  display: block;
  margin: 60px auto 15px auto;
`;
