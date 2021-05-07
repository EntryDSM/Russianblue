import { color } from '../../../../style';
import styled, { css } from 'styled-components';

export const Page = styled.div`
  width: 1220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0px 120px 0px;
`;

export const PageBtn = styled.div<{ disabled?: boolean }>`
  width: 140px;
  height: 50px;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  cursor: pointer;
  ${({ disabled }) => css`
    border: 2px solid ${disabled ? '#e1e1e1' : 'black'};
    color: ${disabled ? color.disable : 'black'};
  `}
`;

export const PageMoving = styled.div`
  width: 229px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Circle = styled.div<{
  nowPage: boolean;
}>`
  ${({ nowPage }) => css`
    width: ${nowPage ? '27px' : '21px'};
    height: ${nowPage ? '27px' : '21px'};
    background-color: ${nowPage ? color.main : color.light};
  `}
  border-radius: 14px;
`;
