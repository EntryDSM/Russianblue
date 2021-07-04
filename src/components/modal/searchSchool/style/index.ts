import styled, { css } from 'styled-components';
import { pxToRem, color } from '../../../../style';

export const ModalSearchSchoolWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${pxToRem(60)}rem;
  left: 0;
  z-index: 100;
  padding: 0;
`;

export const ModalSearchSchool = styled.div`
  width: 438px;
  height: 629px;
  background-color: white;
  position: absolute;
  top: 8%;
  padding: 0px 15px 0px 36px;
  border-radius: 3px;
  box-sizing: border-box;
`;

export const ModalSearchSchoolTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin: 26px 0px 19px 0px;
`;

export const ModalSearchSchoolX = styled.img`
  width: 11px;
  height: 11px;
  float: right;
  margin-top: 12px;
  cursor: pointer;
`;

export const ModalSearchSChoolInputDiv = styled.div`
  width: 365px;
  height: 45px;
  border: 1px solid #878787;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

export const ModalSearchSchoolInput = styled.input`
  width: 319px;
  height: 100%;
  border: none;
  margin-left: 15px;
  padding: 0px;
  ::placeholder {
    font-size: 15px;
    color: #878787;
  }
`;

export const ModalSearchSchoolSearchBtn = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const ModalSearchSchoolContentBox = styled.div`
  width: 388px;
  height: 480px;
  overflow-y: auto;
  margin-top: 30px;
`;

export const ModalSearchSchoolContentLine = styled.div`
  width: 365px;
  height: 55px;
  border-top: 1px solid ${color.middleBar};
  box-sizing: border-box;
  padding: 11px 0px 11px 15px;
`;

export const ModalSearchSchoolName = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 3px;
  cursor: pointer;
`;

export const ModalSearchSchoolAddress = styled.p`
  font-size: 13px;
  font-weight: 300;
`;
