import { color, pxToRem } from '../../../style';
import styled, { css } from 'styled-components';

export const SignUp = styled.div`
  padding-top: ${pxToRem(60)}rem;
  width: 100%;
  min-width: ${pxToRem(1320)}rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const SignUpSubTitle = styled.h3`
  font-size: ${pxToRem(20)}rem;
  font-weight: 300;
  text-align: left;
`;

export const SignUpTitle = styled.h1`
  font-size: ${pxToRem(35)}rem;
  font-weight: 400;
  text-align: left;
`;

export const SignUpHeaderWrapper = styled.div`
  width: ${pxToRem(1270)}rem;
  margin-bottom: ${pxToRem(50)}rem;
  margin-top: ${pxToRem(90)}rem;
  padding-left: ${pxToRem(20)}rem;
  box-sizing: border-box;
`;

export const SignUpRuleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${pxToRem(280)}rem;
  border-top: 1px solid ${color.main};
  border-bottom: 1px solid ${color.main};
  background-color: ${color.light};
`;

export const SignUpRule = styled.div`
  padding: ${pxToRem(20)}rem ${pxToRem(40)}rem;
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 26px);
  background-color: white;
  > pre {
    margin: 10px 0px;
    font-size: 16px;
  }
  > h4 {
    font-size: 20px;
    margin-top: 5px;
    color: ${color.main};
  }
`;

export const SignUpCheckboxWrapper = styled.div`
  width: 100%;
  height: ${pxToRem(75)}rem;
  padding: 0px ${pxToRem(30)}rem;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid ${color.main};
`;

export const SignUpCheckbox = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
  > p {
    font-size: 16px;
  }
  > div {
    background-color: ${color.disable};
    width: ${pxToRem(20)}rem;
    height: ${pxToRem(20)}rem;
    border-radius: 10px;
    margin-right: 10px;
    position: relative;
    &:after {
      width: ${pxToRem(8)}rem;
      height: ${pxToRem(3)}rem;
      background-color: white;
      border-radius: 5px;
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-85%, 0%) rotate(45deg);
    }
    &:before {
      width: ${pxToRem(10)}rem;
      height: ${pxToRem(3)}rem;
      background-color: white;
      border-radius: 10px;
      content: '';
      display: block;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-25%, -60%) rotate(135deg);
    }
  }
  > input[type='checkbox']:checked ~ div {
    background-color: ${color.main};
  }
  > input[type='checkbox'] {
    display: none;
  }
`;

export const SignUpContent = styled.div`
  width: 100%;
  margin-bottom: ${pxToRem(30)}rem;
`;

export const SignUpItem = styled.div`
  width: 100%;
  > div {
    height: ${pxToRem(75)}rem;
    border-bottom: 1px solid ${color.disable};
    display: flex;
    align-items: center;
  }
`;

export const SignUpItemText = styled.div`
  width: ${pxToRem(220)}rem;
  height: 100%;
  text-align: center;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpSubmitButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${pxToRem(70)}rem;
`;

export const SignUpSubmitButton = styled.div<{ disable: boolean }>`
  width: ${pxToRem(150)}rem;
  height: ${pxToRem(50)}rem;
  border-radius: 8px;
  font-size: ${pxToRem(17.5)}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ disable }) =>
    disable
      ? css`
          background-color: '#fcfcfc';
          border: 2px solid #e1e1e1;
          color: ${color.fail};
        `
      : css`
          background-color: ${color.backgorund};
          border: 2px solid #6d6d6d;
          color: black;
        `};
  > div {
    width: ${pxToRem(12)}rem;
    height: ${pxToRem(3)}rem;
    border-radius: ${pxToRem(15)}rem;
    background-color: ${props => (props.disable ? color.disable : 'black')};
    margin-left: ${pxToRem(20)}rem;
    transform: rotate(45deg) translate(0px, -5px);
    ::after {
      display: block;
      width: ${pxToRem(12)}rem;
      height: ${pxToRem(3)}rem;
      border-radius: ${pxToRem(15)}rem;
      background-color: ${props => (props.disable ? color.disable : 'black')};
      content: '';
      transform: rotate(90deg) translate(5px, -5px);
    }
  }
`;

export const SignUpFormDescription = styled.div`
  font-size: ${pxToRem(12)}rem;
  color: #606060;
  > span {
    color: #f57278;
  }
`;
