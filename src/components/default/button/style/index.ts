import { color, pxToRem } from '../../../../style';
import styled, { css } from 'styled-components';

export const Button = styled.button<{
  width?: number;
  height?: number;
  disable: boolean;
  margin?: string;
}>`
  cursor: pointer;
  ${({ width, height, disable, margin }) => css`
    width: ${width ? pxToRem(width) : pxToRem(78)}rem;
    height: ${height ? pxToRem(height) : pxToRem(40)}rem;
    border: 1px solid ${color.fail};
    background-color: ${disable ? '#f1f1f1' : color.backgorund};
    margin: ${margin ? margin : ''};
    border-radius: 8px;
    color: ${disable ? '#606060' : 'black'};
  `}
`;
