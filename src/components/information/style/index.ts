import { color } from '../../../style';
import styled, { css } from 'styled-components';

export const Information = styled.div`
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

export const InformationForm = styled.div`
  width: 1220px;
  height: 935px;
  border-top: 3px solid ${color.main};
  border-bottom: 3px solid ${color.main};
  position: relative;
  > div:first-child {
    border: none;
  }
`;

export const QualificationForm = styled(InformationForm)`
  height: 774px;
`;

export const InformationLine = styled.div<{
  width: number;
}>`
  height: 80px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${color.middleBar};
  box-sizing: border-box;
  position: relative;
  ${({ width }) => css`
    width: ${width}px;
  `};
`;

export const AddressLine = styled(InformationLine)`
  height: 134px;
  > div:nth-child(2) {
    height: 96px;
  }
  > div:nth-child(2) > div {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    > input:first-child {
      margin-right: 18px;
    }
  }
`;

export const InformationLineTitle = styled.p`
  width: 190px;
  text-align: center;
  font-size: 20px;
  > span {
    width: 10px;
    color: ${color.main};
  }
`;

export const SelectBox = styled.div`
  height: 21px;
  display: flex;
  align-items: center;
  margin-right: 39px;
  > p {
    height: 18px;
    font-size: 18px;
  }
`;

export const CheckCircle = styled.div`
  width: 21px;
  height: 21px;
  border: 1px solid black;
  border-radius: 11px;
  margin-right: 10px;
  cursor: pointer;
`;

export const CheckedCircle = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 7px;
  background-color: ${color.main};
  margin: 4px;
`;

export const Select = styled.div<{
  width: number;
}>`
  ${({ width }) => css`
    width: ${width}px;
  `}
  height: 42px;
  border: 1px solid #606060;
  border-radius: 4px;
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
  border: 1px solid #606060;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
    color: ${color.main};
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

export const Unit = styled.p`
  font-size: 18px;
  margin: 0px 37px 0px 9px;
`;

export const SearchBtn = styled.div`
  width: 80px;
  height: 42px;
  box-sizing: border-box;
  color: #606060;
  font-size: 16px;
  text-align: center;
  padding: 12px 0px;
  border: 1px solid #606060;
  border-radius: 4px;
  margin-left: 18px;
  cursor: pointer;
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

export const PictureBtn = styled.label<{
  width: number;
  height: number;
  top: number;
  paddingTop: number;
  paddingSide: number;
}>`
  position: absolute;
  right: 20px;
  box-sizing: border-box;
  border: 2px solid ${color.middleBar};
  border-radius: 4px;
  background-color: #f5f5f5;
  cursor: pointer;
  ${({ width, height, paddingTop, paddingSide, top }) => css`
    width: ${width}px;
    height: ${height}px;
    padding: ${paddingTop}px ${paddingSide}px;
    top: ${top}px;
  `}
  > img {
    width: 74.2px;
    height: 74.2px;
    margin: 0px 0px 15px 28px;
  }
  > p:nth-child(2) {
    font-size: 12px;
    margin-left: 7px;
  }
  > p:last-child {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const Picture = styled.img`
  width: 100% !important;
  height: 100% !important;
  position: absolute;
  top: 0;
  right: 0;
`;
