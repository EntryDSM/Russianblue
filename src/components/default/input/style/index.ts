import { color, pxToRem } from '../../../../style';
import styled, { css } from 'styled-components';

export const Input = styled.input<{
  width: number;
  height?: number;
  disable: boolean;
  margin?: string;
}>`
  ${({ width, height, disable, margin }) => css`
    width: ${pxToRem(width)}rem;
    height: ${height ? pxToRem(height) : pxToRem(40)}rem;
    outline: none;
    margin: ${margin ? margin : ''};
  `}
  border: 1px solid ${color.fail};
  padding: 0px 10px;
`;
