import { color, pxToRem } from '../../../../style';
import styled from 'styled-components';

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  > p {
    margin-right: ${pxToRem(18)}rem;
  }
  > div {
    width: ${pxToRem(18)}rem;
    height: ${pxToRem(18)}rem;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    > input[type='checkbox'] {
      display: none;
    }
    > div {
      width: ${pxToRem(10)}rem;
      height: ${pxToRem(10)}rem;
      border-radius: 3px;
      background-color: ${color.main};
      display: none;
    }
    > input[type='checkbox']:checked ~ div {
      display: block;
    }
  }
`;
