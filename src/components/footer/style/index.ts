import { color, pxToRem } from '../../../style';
import styled from 'styled-components';

export const FooterDiv = styled.div`
  > div {
    width: 100%;
    height: ${pxToRem(204)}rem;
    min-width: ${pxToRem(1320)}rem;
    background-color: ${color.sub};
    color: ${color.backgorund};
    padding: ${pxToRem(20)}rem 0px;
    display: flex;
    justify-content: space-between;
    padding: 0 15%;
    align-items: center;
    flex-shrink: 0;
    box-sizing: border-box;
    > div {
      box-sizing: content-box;
    }
    @media (max-width: 1120px) {
      width: auto;
      padding: 0px 5%;
      box-sizing: border-box;
    }
  }
`;
export const FooterTitle = styled.p`
  font-size: ${pxToRem(33)}rem;
  margin-bottom: ${pxToRem(8)}rem;
  font-weight: 500;
`;

export const FooterText = styled.div<{ margin?: string }>`
  font-size: ${pxToRem(10)}rem;
  margin-bottom: ${props => (props.margin ? `${props.margin}px` : '10px')};
`;

export const FooterButton = styled.p`
  width: ${pxToRem(80)}rem;
  font-size: ${pxToRem(16)}rem;
  margin: ${pxToRem(16)}rem;
  text-align: right;
  cursor: pointer;
`;

export const FooterImgButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  box-sizing: border-box;
`;

export const FooterImgButton = styled.div`
  width: ${pxToRem(20)}rem;
  height: ${pxToRem(20)}rem;
  padding: 8px 8px 8px 0px;
  cursor: pointer;
`;
