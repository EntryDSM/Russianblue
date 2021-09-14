import styled, { css } from 'styled-components';
import { pxToRem, color } from '../../../style';
import {
  access_error,
  file_error,
  move,
  move_active,
  password_reset_success,
  submit,
} from '../../../assets/modal';

const windowWidthRatio = window.innerWidth / 1920;
const windowHeightRatio = window.innerHeight / 1080;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
`;

export const Modal = styled.div`
  width: ${pxToRem(420)}rem;
  height: ${pxToRem(580)}rem;
  background-color: ${color.backgorund};
  padding: 12px;
  box-sizing: border-box;
`;

export const ModalMain = styled.div`
  padding: 0px ${pxToRem(58)}rem;
`;

export const ModalDeleteButton = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
  cursor: pointer;
  > div {
    position: absolute;
    width: ${pxToRem(Math.sqrt(144 + 144))}rem;
    height: ${pxToRem(2)}rem;
    border-radius: 10px;
    background-color: #3d3d3d;
  }
  div:first-child {
    transform: rotate(45deg);
  }
  div:last-child {
    transform: rotate(135deg);
  }
`;

export const ModalDeleteButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ModalDefaultButton = styled.div`
  width: 100%;
  height: ${pxToRem(50)}rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.main};
  color: ${color.backgorund};
  font-size: 18px;
  cursor: pointer;
`;

export const ModalDefaultButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: ${pxToRem(18)}rem;
  display: flex;
  > div.multiple:first-child {
    margin-right: 8px;
  }
  > div.multiple:last-child {
    margin-left: 8px;
  }
`;

export const ModalSubButton = styled.div`
  font-size: 13px;
  color: #5a5a5a;
  text-align: center;
  margin: 3px;
  cursor: pointer;
`;

export const ModalErrorText = styled.div`
  font-size: 14px;
  height: ${pxToRem(20)}rem;
  color: ${color.main};
  text-align: center;
  margin-bottom: ${pxToRem(18)}rem;
`;

export const ModalTitle = styled.h3<{ top?: number; bottom?: number }>`
  font-size: ${pxToRem(32)}rem;
  text-align: center;
  font-weight: 500;
  margin-top: ${props => (props.top ? pxToRem(props.top) : pxToRem(48))}rem;
  margin-bottom: ${props => (props.bottom ? pxToRem(props.bottom) : pxToRem(100))}rem;
`;

export const ModalSubTitle = styled.p`
  font-size: 14px;
  height: ${pxToRem(20)}rem;
  color: #5a5a5a;
  margin: ${pxToRem(18)}rem 0px;
  text-align: center;
`;

export const ModalNextButton = styled.div<{ disable: boolean }>`
  width: ${pxToRem(100)}rem;
  height: ${pxToRem(45)}rem;
  border-radius: 5px;
  display: flex;
  padding: 0px 13px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 17px;
  }
  > div {
    width: 12px;
    height: 20px;
  }
  > div.prev {
    transform: rotate(180deg);
  }
  ${({ disable }) =>
    disable
      ? css`
          > p {
            color: ${color.disable};
          }
          > div {
            background-image: url(${move});
          }
          cursor: not-allowed;
          border: solid 1px ${color.disable};
        `
      : css`
          > p {
            color: black;
          }
          > div {
            background-image: url(${move_active});
          }
          border: solid 1px black;
          cursor: pointer;
        `}
`;

export const ModalMoveButtonWrapper = styled.div`
  margin-top: ${pxToRem(66)}rem;
  display: flex;
  justify-content: space-between;
`;

export const ModalTimer = styled.div<{ top?: number; bottom?: number; left?: number }>`
  ${({ top, bottom, left }) => css`
    margin-top: ${typeof top === 'number' ? pxToRem(top) : '0'}rem;
    margin-bottom: ${typeof bottom === 'number' ? pxToRem(bottom) : pxToRem(45)}rem;
    margin-left: ${typeof left === 'number' ? left : 0}px;
  `}
  display: flex;
  justify-content: center;
  > p {
    color: ${color.main};
    font-weight: 600;
    font-size: ${pxToRem(19)}rem;
  }
`;

export const ModalResetPasswordSuccessImage = styled.div`
  width: ${pxToRem(90)}rem;
  height: ${pxToRem(105)}rem;
  background-image: url(${password_reset_success});
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-top: ${pxToRem(80)}rem;
  margin-bottom: ${pxToRem(90)}rem;
`;

export const ModalFileErrorImage = styled(ModalResetPasswordSuccessImage)`
  background-image: url(${file_error});
`;

export const ModalAccessErrorImage = styled(ModalResetPasswordSuccessImage)`
  background-image: url(${access_error});
`;

export const ModalSubmitImage = styled(ModalResetPasswordSuccessImage)`
  background-image: url(${submit});
`;

export const ModalNotice = styled.div`
  width: ${pxToRem(1200 * windowWidthRatio)}rem;
  height: ${pxToRem(835 * windowHeightRatio)}rem;
  padding: 40px;
  background-color: white;
  overflow: scroll;
`;

export const ModalNoticeTitle = styled.div`
  font-size: ${pxToRem(30)}rem;
  font-weight: 500;
  margin-bottom: ${pxToRem(12)}rem;
`;

export const ModalNoticeSubTitle = styled.div`
  font-size: ${pxToRem(20)}rem;
  margin-top: ${pxToRem(28)}rem;
`;

export const ModalNoticeText = styled.div`
  font-size: ${pxToRem(18)}rem;
  margin: ${pxToRem(8)}rem;
`;
export const ModalNoticeCheckboxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${pxToRem(68)}rem;
`;

export const ModalNoticeCheckboxText = styled.div`
  margin-right: ${pxToRem(15)}rem;
`;

export const ModalNoticeButtonWrapper = styled.div`
  margin-top: ${pxToRem(18)}rem;
  display: flex;
  justify-content: flex-end;
  > div {
    width: ${pxToRem(240)}rem;
  }
`;
