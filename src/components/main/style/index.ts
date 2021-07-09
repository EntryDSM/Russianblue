import styled, { css } from 'styled-components';
import { color, heightRatio, pxToRem, widthRatio } from '../../../style';
import { background } from '../../../assets/main';

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  min-width: ${pxToRem(1320)}rem;
  box-sizing: border-box;
`;

export const MainBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  min-height: ${pxToRem(900)}rem;
  overflow: hidden;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 110%;
  z-index: -100;
  @media (max-width: 1320px) {
    width: ${pxToRem(1320)}rem;
  }
`;

export const MainWrapper = styled.div`
  padding: 0px ${pxToRem(250)}rem;
  padding-top: ${pxToRem(120)}rem;
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const MainContentWrapper = styled.div`
  > .mainDescription {
    margin-bottom: ${pxToRem(63)}rem;
  }
  > .subDescription {
    margin-bottom: ${pxToRem(200)}rem;
  }
`;

export const MainSubTitle = styled.h3`
  font-size: ${pxToRem(20)}rem;
  font-weight: 300;
`;

export const MainTitle = styled.h1`
  font-size: ${pxToRem(35)}rem;
  margin-bottom: ${pxToRem(130)}rem;
  font-weight: 400;
`;

export const MainDescription = styled.p`
  > p {
    font-size: ${pxToRem(30)}rem;
    > span {
      color: ${color.main};
      font-weight: 500;
      font-size: ${pxToRem(34)}rem;
    }
  }
`;

export const MainButton = styled.button`
  width: ${pxToRem(360) * (4 / 5)}rem;
  height: ${pxToRem(100) * (4 / 5)}rem;
  border-radius: ${pxToRem(18)}rem;
  background-color: ${color.main};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-sizing: content-box;
  flex-shrink: 0;
  transition: all 0.3s;
  outline: none;
  cursor: ${props => (props.disabled ? 'pointer' : 'disable')};
  > div {
    width: ${pxToRem(17)}rem;
    height: ${pxToRem(3)}rem;
    border-radius: ${pxToRem(15)}rem;
    background-color: white;
    margin-left: 30px;
    transform: rotate(45deg) translate(-2px, -7px);
    ::after {
      display: block;
      width: ${pxToRem(17)}rem;
      height: ${pxToRem(3)}rem;
      border-radius: ${pxToRem(15)}rem;
      background-color: white;
      content: '';
      transform: rotate(90deg) translate(7px, -7px);
    }
  }
  > p {
    color: white;
    font-size: ${pxToRem(30)}rem;
  }
`;

export const Progress = styled.div``;

export const ProgressText = styled.p<{ isNow: boolean; isPassed: boolean }>`
  color: ${({ isNow, isPassed }) => (isNow ? color.main : isPassed ? 'black' : color.fail)};
  font-size: ${pxToRem(25)}rem;
  font-weight: 500;
`;

export const ProgressSubText = styled.p`
  font-size: ${pxToRem(23)}rem;
  > span {
    color: ${color.main};
  }
`;

export const ProgressContent = styled.div`
  display: flex;
  margin: ${pxToRem(20)}rem 0px ${pxToRem(20)}rem 0px;
`;

export const ProgressIcon = styled.div<{ isPassed: boolean }>`
  width: ${pxToRem(95)}rem;
  height: ${pxToRem(95)}rem;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.16);
  margin: 0px ${pxToRem(65)}rem;
  border-radius: ${pxToRem(95)}rem;
  background-color: white;
  overflow: hidden;
  position: relative;
  > .background {
    width: 100%;
    height: ${props => (props.isPassed ? '100%' : '0%')};
    transition: all 0.5s;
    position: absolute;
    background-color: ${color.main};
  }
  .iconWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props =>
      props.isPassed
        ? css`
            > .icon {
              transform: translate(-2px, 10px);
              > div {
                background-color: ${color.backgorund};
                height: 4px;
              }
              > div:first-child {
                width: ${pxToRem(21)}rem;
                border-radius: 21px;
                transform: rotate(45deg);
              }
              > div:last-child {
                width: ${pxToRem(44)}rem;
                border-radius: 21px;
                transform: translate(10px, -11px) rotate(140deg);
              }
            }
          `
        : css`
            > .icon {
              > div {
                background-color: ${color.fail};
                height: 4px;
              }
              > div:first-child {
                width: ${pxToRem(56)}rem;
                border-radius: 21px;
                transform: rotate(45deg);
              }
              > div:last-child {
                border-radius: 21px;
                transform: translate(0px, -2px) rotate(135deg);
              }
            }
          `};
  }
`;

export const ProgressBlankBar = styled.div`
  width: ${pxToRem(4)}rem;
  height: ${pxToRem(59)}rem;
  border-radius: 1000px;
  background-color: ${color.middleBar};
  margin-left: ${pxToRem(290)}rem;
`;

export const ProgressTextWrapper = styled.div`
  width: ${pxToRem(180)}rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
`;
