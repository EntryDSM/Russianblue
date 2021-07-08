import { color, pxToRem } from '../../../../style';
import styled, { css } from 'styled-components';
import { eye, eye_active } from '../../../../assets/default';

export const Input = styled.input<{
  width?: number;
  height?: number;
  disable?: boolean;
  margin?: string;
}>`
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid ${color.fail};
  padding: 0px 10px;
  font-size: ${pxToRem(14)}rem;
  ${({ width, height, margin }) => css`
    width: ${pxToRem(width)}rem;
    height: ${height ? pxToRem(height) : pxToRem(40)}rem;
    margin: ${margin ? margin : ''};
  `}
`;

export const PasswordInput = styled.div<{
  width: number;
  height?: number;
  margin?: string;
}>`
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  ${({ width, height, margin }) => css`
    width: ${pxToRem(width)}rem;
    height: ${height ? pxToRem(height) : pxToRem(40)}rem;
    margin: ${margin ? margin : ''};
  `}
  border: 1px solid ${color.fail};
  padding: 0px 15px;
  display: flex;
  align-items: center;
  > input {
    width: ${({ width }) => pxToRem(width - 37)}rem;
    height: 100%;
    font-size: ${pxToRem(14)}rem;
    border: none;
    outline: none;
    padding: 0px;
  }
  > label {
    > input[type='checkbox'] {
      display: none;
    }
    > input[type='checkbox']:checked ~ div {
      background-image: url(${eye_active});
      background-position: 0px 1px;
    }
    > div {
      width: ${pxToRem(20)}rem;
      height: ${pxToRem(16)}rem;
      background-image: url(${eye});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;
