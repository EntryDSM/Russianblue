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

export const PdfHeader = styled.div`
  width: 1220px;
  height: 52px;
  background-color: #353b3e;
  margin: 0 auto;
  color: white;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
  padding: 13px 0px 13px 25px;
`;

export const PdfBox = styled.div`
  width: 1220px;
  height: 1024px;
  background-color: #535759;
  margin: 0 auto;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 60px 0px;
`;

export const Pdf = styled.div`
  width: 690px;
  margin: 0 auto;
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
