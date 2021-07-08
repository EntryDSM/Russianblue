import { color } from '../../../style';
import styled, { css } from 'styled-components';

export const SelectType = styled.div`
  width: 1220px;
  box-sizing: border-box;
  padding-top: 125px;
  margin: 0 auto;
  > div:first-child {
    margin-bottom: 70px;
  }
`;

export const School = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

export const Title = styled.p`
  font-size: 35px;
  letter-spacing: 1.05px;
`;

export const SelectLine = styled.div`
  width: 1220px;
  height: 440px;
  border-top: 3px solid ${color.main};
  border-bottom: 3px solid ${color.main};
`;

export const Line = styled.div`
  width: 1220px;
  height: 88px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${color.middleBar};
  box-sizing: border-box;
  padding-left: 58px;
`;

export const LineTitle = styled.p`
  width: 103px;
  font-size: 21px;
  text-align: center;
  margin-right: 97px;
  > span {
    width: 10px;
    font-size: 21px;
    color: ${color.main};
  }
`;

export const CheckCircle = styled.div<{
  isBlock?: boolean;
}>`
  width: 21px;
  height: 21px;
  border: 1px solid black;
  border-radius: 11px;
  cursor: pointer;
  margin-right: 10px;
  ${({ isBlock }) => css`
    border: 1px solid ${isBlock ? '#7E7E7E' : '#000000'};
  `}
`;

export const CheckedCircle = styled.div<{
  isBlock?: boolean;
}>`
  width: 13px;
  height: 13px;
  border-radius: 7px;
  background-color: ${color.main};
  margin: 4px;
  ${({ isBlock }) => css`
    background-color: ${isBlock ? '#7E7E7E' : color.main};
  `}
`;

export const SelectBox = styled.div<{ margin?: number; isBlock?: boolean }>`
  height: 21px;
  display: flex;
  align-items: center;
  ${({ margin }) => css`
    margin-right: ${margin}px;
  `}
  > p {
    height: 18px;
    font-size: 18px;
    cursor: pointer;
    ${({ isBlock }) => css`
      color: ${isBlock ? '#595959' : '000000'};
    `}
  }
`;

export const Date = styled.p`
  margin-left: 11px;
  margin-right: 41px;
  font-size: 18px;
`;

export const Explain = styled.p`
  font-size: 12px;
  color: #606060;
  position: absolute;
  right: 32px;
  > span {
    color: ${color.main};
  }
`;

export const Select = styled.div<{
  width: number;
  disabled: string;
}>`
  ${({ width, disabled }) => css`
    width: ${width}px;
    border: 1px solid ${disabled === 'disabled' ? color.disable : 'black'};
    color: ${disabled === 'disabled' ? color.disable : 'black'};
    background-color: ${disabled === 'block' ? '#f1f1f1' : '#ffffff'};
  `}
  height: 42px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px 16px;
  position: relative;
  cursor: pointer;
`;

export const SelectContent = styled.div<{
  width: number;
}>`
  ${({ width }) => css`
    width: ${width}px;
  `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  > p {
    font-size: 18px;
  }
  > img {
    width: 13px;
  }
`;

export const SubSelect = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;
  border: 1px solid black;
  border-top: none;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
  left: -1px;
  background-color: white;
  z-index: 10;
  > p {
    height: 24px;
    font-size: 16px;
    font-weight: 300;
    margin-left: 20px;
    margin-bottom: 6px;
    color: black;
    cursor: pointer;
  }
  > p:hover {
    color: ${color.sub};
    font-weight: 500;
  }
`;

export const GrayLine = styled.div<{
  width: number;
}>`
  ${({ width }) => css`
    width: ${width}px;
  `}
  height: 2px;
  background-color: ${color.middleBar};
  margin: 8px auto 10px auto;
`;
