import { color, pxToRem } from '../../../style';
import styled from 'styled-components';
import { logo } from '../../../assets/main';

export const Header = styled.div`
  width: 100%;
  height: ${pxToRem(60)}rem;
  box-shadow: 0 ${pxToRem(3)}rem ${pxToRem(6)}rem 0 rgba(0, 0, 0, 0.16);
  padding: 0px 15%;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  background-color: white;
  z-index: 10;
`;

export const HeaderIcon = styled.div`
  width: ${pxToRem(96)}rem;
  height: ${pxToRem(30)}rem;
  background-image: url(${logo});
  cursor: pointer;
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
  background-color: white;
  > input[type='checkbox'] {
    display: none;
  }
  > div {
    width: ${pxToRem(337)}rem;
    transform: translate(-133px, 0px);
    cursor: default;
  }
  > input:checked ~ div {
    height: ${pxToRem(403)}rem;
  }
  > input:checked ~ i {
    transform: rotate(0deg);
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
  border-top: 12px solid ${color.main};
  transition: all 0.3s;
  transform: rotate(180deg);
`;

export const HeaderDropdownContent = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  height: 0;
  transition: height 0.3s;
  background-color: ${color.backgorund};
  box-shadow: 0 ${pxToRem(2)}rem ${pxToRem(3)}rem 0 rgba(0, 0, 0, 0.16);
  top: ${pxToRem(30)}rem;
  border-radius: 6px;
  padding: 0px 35px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const HeaderDropdownColumn = styled.div`
  height: ${pxToRem(54)}rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cbcbcb;
  &:last-child {
    border-bottom: none;
  }
`;

export const HeaderDropdownContentTitle = styled.p`
  width: 80px;
  margin: 0 22px 0px 0px;
  font-size: 16px;
  color: #000000;
`;

export const HeaderDropdownContentText = styled.p`
  margin: 18px 3px 18px 0;
  font-size: 13px;
  font-weight: 300;
`;

export const HeaderDropdownContentProcessText = styled.div<{ isComplete: boolean }>`
  font-size: 13px;
  font-weight: 500;
  color: ${({ isComplete }) => (isComplete ? 'black' : color.main)};
  display: flex;
  align-items: center;
`;

export const HeaderDropdownContentProcessSubText = styled.p`
  font-size: 10px;
  color: #606060;
  margin-top: 3px;
`;

export const HeaderDropdownContentProcessButton = styled.button`
  width: ${pxToRem(60)}rem;
  height: ${pxToRem(25)}rem;
  border-radius: 2px;
  background-color: ${color.main};
  font-size: 11px;
  font-weight: 500;
  color: #ffffff;
  border: none;
  margin-left: ${pxToRem(72)}rem;
  cursor: pointer;
`;

export const HeaderDropdownContentIntroduceText = styled.div`
  font-size: 13px;
`;
