import { color } from '../../../style';
import styled, { css } from 'styled-components';

export const AllContents = styled.div`
    width: 1220px;
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 150px;
    > div:first-child {
        margin-bottom: 50px;
    }
    > div:nth-child(14) {
        height: 134px;
    }
    > div:nth-child(8) {
        border: none;
    }
    > div:nth-child(9) {
        border-top: 1px solid ${color.middleBar};
    }
    margin: 0 auto;
`;
export const School = styled.p`
    font-size: 20px;
    font-weight: 300;
`;
export const Title = styled.p`
    font-size: 35px;
    letter-spacing: 1.05px;
`;

export const MainLine = styled.div`
    width: 100%;
    height: 3px;
    background-color: ${color.main};
`;
export const ImgBtn = styled.div`
    width: 317px;
    height: 363px;
    border: 2px solid ${color.middleBar};
    border-radius: 4px;
    float: right;
    margin: 18px 10px 0px 0px;
    background-color: #f5f5f5;
    cursor: pointer;
    > img {
        width: 74.2px;
        height: 74.2px;
        display: block;
        margin: 120px auto 14.8px auto;
    }
    > p {
        font-size: 12px;
        text-align: center;
        height: 17px;
    }
    > p:last-child {
        font-weight: 300;
    }
`;

// InfoLine
export const InfoLine = styled.div<{
    width: number;
}>`
    height: 80px;
    border-bottom: 1px solid ${color.middleBar};
    display: flex;
    align-items: center;
    ${({width}) => css`
        width: ${width}px;
    `}
`;
export const SubTitle = styled.p`
    font-size: 20px;
    width: 155px;
    display: flex;
    justify-content: center;
    margin-right: 35px;
`;
export const Essential = styled.p`
    width: 10px;
    font-size: 20px;
    color: ${color.main};
`;
export const Space = styled.p`
    margin-right: 10px;
`;
export const InfoInput = styled.input<{
    width: number;
}>`
    height: 41px;
    border: 1px solid #606060;
    background-color: #fcfcfc;
    font-size: 18px;
    box-sizing: border-box;
    padding-left: 17px;
    ${({width}) => css`
        width: ${width}px;
    `}
`;
export const SearchBtn = styled.div`
    width: 80px;
    height: 40px;
    border: 1px solid #606060;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    margin-left: 17px;
    box-sizing: border-box;
    padding-top: 11px;
    cursor: pointer;
`;
export const Explain = styled.p`
    width: 61%;
    font-size: 12px;
    color: #606060;
    text-align: right;
    > span {
        color: ${color.main};
    }
`;
export const Score = styled.div`
    font-size: 18px;
    margin-left: 9px;
`;

// InfoGender
export const InfoGender = styled.div`
    font-size: 18px;
    display: flex;
    > div {
        display: flex;
    }
    > div:first-child {
        margin-right: 39px;
    }
`;
export const CheckCircle = styled.div`
    width: 21px;
    height: 21px;
    border: 1px solid #606060;
    border-radius: 11px;
    margin-right: 8px;
    cursor: pointer;
`;
export const CheckedCircle = styled.div`
    width: 13px;
    height: 13px;
    background-color: ${color.main};
    border-radius: 7px;
    margin: 4px auto;
`;

// InfoGrade
export const InfoGrade = styled.div`
    display: flex;
    align-items: center;
`;
export const InfoGradeInput = styled.input`
    width: 63px;
    height: 42px;
    border: 1px solid #606060;
    border-radius: 4px;
    box-sizing: border-box;
    padding-left: 17px;
    font-size: 18px;
`;
export const InfoGradeTitle = styled.p`
    font-size: 18px;
    margin: 0px 38px 0px 8px;
`;

// InfoBirth
export const InfoBirth = styled.div`
    font-size: 18px;
    display: flex;
    align-items: center;
    > p {
        margin: 0px 37px 0px 9px;
    }
`;
export const InfoBirthBtn = styled.div<{
    width: number;
}>`
    ${({width}) => css`
        width: ${width}px;
    `}
    height: 42px;
    border: 1px solid #606060;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 16px;
    justify-content: space-between;
    position: relative;
`;
export const InfoDropdown = styled.img`
    width: 13px;
    height: 11px;
`;
export const InfoBirthSubSelect = styled.div`
    display: none;
    width: 100%;
    height: 195px;
    background-color: white;
    position: absolute;
    border: 1px solid #606060;
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    top: 35px;
    left: -1px;
    overflow: auto;
    font-size: 16px;
    font-weight: 300;
    > div {
        margin: 0px 0px 8px 17px;
    }
    > div:first-child {
        margin-top: 6px;
    }
`;
export const GrayLine = styled.div`
    width: calc(100% - 34px);
    height: 1px;
    background-color: ${color.middleBar};
`;

// InfoAddress
export const InfoAddress = styled.div`
    height: 134px;
    font-size: 16px;
    box-sizing: border-box;
    padding-top: 19px;
    > div {
        display: flex;
        margin-bottom: 12px;
    }
`;
export const InfoAddressInput = styled.input<{
    width: number;
}>`
    ${({width}) => css`
        width: ${width}px;
    `}
    height: 42px;
    border: 1px solid #606060;
    border-radius: 4px;
    box-sizing: border-box;
    padding-left: 17px;
    font-size: 16px;
    margin-right: 18px;
    ::placeholder {
        font-size: 16px;
        color: black;
    }
`;
export const InfoAddressSearchBtn = styled.div`
    width: 80px;
    height: 42px;
    border: 1px solid #606060;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 11px;
    font-size: 17px;
    cursor: pointer;
`;