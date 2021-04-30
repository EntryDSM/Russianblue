import { color } from '../../../../style';
import styled, { css } from 'styled-components';

export const AllContents = styled.div`
    width: 1220px;
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 150px;
    > div:first-child {
        margin-bottom: 50px;
    }
    > div:nth-child(13) {
        height: 134px;
    }
    > div:nth-child(7) {
        border: none;
    }
    > div:nth-child(8) {
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
    width: 270px;
    height: 295px;
    border: 2px solid ${color.middleBar};
    border-radius: 4px;
    float: right;
    margin: 11px 13px 0px 0px;
    background-color: #f5f5f5;
    cursor: pointer;
    > img {
        width: 74.2px;
        height: 74.2px;
        display: block;
        margin: 86px auto 14.8px auto;
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