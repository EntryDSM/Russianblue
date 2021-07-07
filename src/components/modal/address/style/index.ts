import styled, { css } from 'styled-components';
import { pxToRem, color } from '../../../../style';

export const AddressModalWrapper = styled.div`
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
