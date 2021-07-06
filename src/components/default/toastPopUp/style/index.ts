import styled, { css } from 'styled-components';

export const FailureStick = styled.div<{
  isShow: boolean;
}>`
  width: 350px;
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-image: linear-gradient(269deg, #f15968 100%, #f57278 0%);
  position: fixed;
  top: 110px;
  right: 0px;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  color: white;
  transition: opacity 0.5s, visibility 0.5s, transform 0.5s;
  display: flex;
  ${({ isShow }) => css`
    opacity: ${isShow ? '1' : '0'};
  `}
  > div > p:first-child {
    width: 280px;
    font-size: 15px;
    text-align: right;
    margin-top: 15px;
    margin-bottom: 2px;
  }
  > div > p:last-child {
    width: 280px;
    font-size: 11px;
    font-weight: 300;
    text-align: right;
  }
`;

export const XImg = styled.img`
  width: 26px;
  height: 26px;
  margin: 16px 0px 0px 22px;
`;

export const CheckImg = styled.img`
  width: 26px;
  height: 26px;
  margin: 16px 0px 0px 22px;
`;

export const SuccessStick = styled.div<{
  isShow: boolean;
}>`
  width: 350px;
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-image: linear-gradient(to left, #1a5fff 100%, #1a8dff 1%);
  position: fixed;
  top: 110px;
  right: 0px;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  color: white;
  transition: opacity 0.5s, visibility 0.5s, transform 0.5s;
  display: flex;
  ${({ isShow }) => css`
    opacity: ${isShow ? '1' : '0'};
  `}
  > div > p:first-child {
    width: 280px;
    font-size: 15px;
    text-align: right;
    margin-top: 15px;
    margin-bottom: 2px;
  }
  > div > p:last-child {
    width: 280px;
    font-size: 11px;
    font-weight: 300;
    text-align: right;
  }
`;
