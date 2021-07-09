import { color } from '../../../style';
import styled from 'styled-components';

export const AllContents = styled.div`
  width: 1220px;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 125px;
  margin: 0 auto;
  > div:first-child {
    margin-bottom: 10px;
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

export const SubTitle = styled.p`
  width: 130px;
  height: 36px;
  font-size: 25px;
  margin: 80px 0px 2px 0px;
`;
export const Explain = styled.p`
  font-weight: 300;
  font-size: 18px;
  width: 1068px;
  margin-bottom: 20px;
  line-height: 1.33;
`;

export const SubContent = styled.div`
  width: 1220px;
  height: 518px;
`;
export const TextBox = styled.div`
  width: 1220px;
  height: 410px;
  border: 2px solid #606060;
  border-radius: 4px;
`;
export const Textarea = styled.textarea`
  width: 1200px;
  height: 336px;
  resize: none;
  box-sizing: border-box;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 300;
  line-height: 1.5;
  margin: 18px 10px 6px 10px;
  overflow-y: auto;
  border: none;
  ::-webkit-scrollbar {
    width: 19px;
  }
  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 6px solid transparent;
    border-radius: 10px;
    background-color: ${color.main};
  }
  ::-webkit-scrollbar-track {
    border-radius: 4px;
  }
  :focus {
    & + div {
      display: block;
    }
  }
`;
export const CountText = styled.div`
  width: 100%;
  height: 45px;
  display: none;
  background-color: rgba(255, 155, 159, 0.7);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  > span {
    font-size: 17px;
    color: #606060;
    float: right;
    margin-top: 14px;
  }
  > span:first-child {
    margin-right: 18px;
  }
  > span:nth-child(2) {
    margin-left: 7px;
    margin-right: 7px;
  }
`;
