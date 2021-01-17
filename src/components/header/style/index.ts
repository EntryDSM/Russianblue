import { color, pxToRem } from '../../../style';
import styled from 'styled-components';
import { logo } from '../../../assets/main';

export const Header = styled.div`
  width: 100%;
  height: ${pxToRem(60)}rem;
  box-shadow: 0 ${pxToRem(3)}rem ${pxToRem(6)}rem 0 rgba(0, 0, 0, 0.16);
  padding: 0px 15%;
  min-width: ${pxToRem(1320)}rem;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  background-color: white;
  z-index: 100;
`;

export const HeaderIcon = styled.div`
  width: ${pxToRem(96)}rem;
  height: ${pxToRem(30)}rem;
  background-image: url(${logo});
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderDropDown = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  > input[type='checkbox'] {
    display: none;
  }
  > input:checked ~ div {
    height: ${pxToRem(200)}rem;
  }
  > input:checked ~ i {
    transform: rotate(180deg);
  }
`;

export const HeaderButton = styled.span`
  font-size: ${pxToRem(16)}rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
  &:hover {
    color: ${color.sub};
  }
`;

export const HeaderMenuUser = styled.p`
  > span {
    font-weight: bold;
  }
  margin-right: ${pxToRem(10)}rem;
`;

export const HeaderPartition = styled.div`
  margin: 0px ${pxToRem(15)}rem;
`;

export const HeaderDropdownArrowButton = styled.i`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 12px solid black;
  transition: all 0.3s;
`;

export const HeaderDropdownContent = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  height: 0;
  transition: all 0.3s;
  background-color: ${color.backgorund};
  box-shadow: 0 ${pxToRem(2)}rem ${pxToRem(3)}rem 0 rgba(0, 0, 0, 0.16);
  top: ${pxToRem(30)}rem;
`;
