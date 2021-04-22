import { color } from '../../../style';
import styled from 'styled-components';

export const AllContents = styled.div`
    width: 1220px;
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 150px;
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


// SubContents
export const SubTitle = styled.p`
    width: 115px;
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
    > span {
        padding-right: 10px;
    }
`;
export const TextBox = styled.textarea`
    width: 100%;
    height: 410px;
    resize: none;
    box-sizing: border-box;
    padding: 18px 0px 56px 18px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 19px;
    };
    ::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        border: 6px solid transparent;
        border-radius: 10px;
        background-color: ${color.main};
    };
    ::-webkit-scrollbar-track {
        border-radius: 4px;
    };
`;
export const SubContent = styled.div`
    width: 1220px;
    height: 518px;
`;