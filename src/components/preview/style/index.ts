import styled from 'styled-components';
import { color } from '../../../style';

export const Preview = styled.div`
  width: 1220px;
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 125px;
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

export const PreviewIframe = styled.iframe`
  width: 1220px;
  height: 1024px;
`;

export const DownloadBtn = styled.div`
  width: 152px;
  height: 41px;
  color: white;
  border-radius: 5px;
  background-color: ${color.main};
  text-align: center;
  box-sizing: border-box;
  padding: 11px 0px;
  font-size: 18px;
  margin: 0 auto;
  cursor: pointer;
`;
