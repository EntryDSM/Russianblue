import { color } from '../../../style';
import styled from 'styled-components';

export const Grade = styled.div`
  width: 1220px;
  min-height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  > div:first-child {
    margin: 150px 0px 70px 0px;
  }
`;
export const School = styled.p`
  width: 276px;
  height: 34px;
  font-size: 20px;
  font-weight: 300;
`;
export const Title = styled.p`
  width: 374px;
  height: 46px;
  font-size: 35px;
  letter-spacing: 1.05px;
`;

// Volunteer
export const Volunteer = styled.table`
  width: 1220px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  > tr:first-child > td:nth-child(2) {
    border-right: 1px solid #909090;
  }
  > tr:nth-child(2) > td:nth-child(2) {
    border-right: 1px solid #909090;
  }
  > tr:nth-child(3) > td:first-child {
    border-right: 1px solid #909090;
  }
`;
export const ServingTime = styled.td`
  width: 160px;
  height: 70px;
  font-size: 20px;
  background-color: ${color.light};
  padding-left: 43px;
  box-sizing: border-box;
`;
export const Attendance = styled(ServingTime)`
  height: 140px;
  border-top: none;
`;
export const VolunteerTd = styled.td`
  width: 533px;
  border-bottom: 1px solid #909090;
  font-size: 18px;
  > div {
    display: flex;
    align-items: center;
    margin-left: 32px;
  }
`;
export const Input = styled.input`
  width: 76px;
  height: 36px;
  border: 1px solid #606060;
  font-size: 18px;
  border-radius: 4px;
  margin-right: 15px;
  text-align: center;
`;
export const DateInput = styled.div`
  width: 424px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
`;
export const EnterGradeTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin: 77px 0px 13px 0px;
  > div {
    display: flex;
    align-items: center;
    > p {
      margin-right: 13px;
    }
  }
`;
export const AllGradeBtn = styled.div`
  width: 22px;
  height: 22px;
  font-size: 17px;
  border: 1px solid ${color.disable};
  border-radius: 4px;
  background-color: white;
  text-align: center;
  box-sizing: border-box;
  padding-top: 1px;
  cursor: pointer;
  margin-left: 4px;
`;

// GradeTable
export const GradeTable = styled.table`
  width: 1220px;
  > tr,
  td {
    border: 1px solid black;
    text-align: center;
    font-size: 20px;
  }
  .bg {
    background-color: ${color.light};
    border: none;
  }
  > tr {
    border: none;
    > td:first-child {
      border: none;
    }
  }
`;
export const FristLine = styled.td`
  width: 160px;
  height: 74px;
  background-color: ${color.light};
`;
export const CheckBox = styled.div`
  width: 19px;
  height: 19px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 0 auto;
`;
export const CheckedBox = styled.div`
  width: 11px;
  height: 11px;
  background-color: ${color.main};
  border-radius: 2px;
  margin: 4px 0px 0px 4px;
`;
export const GradeBtn = styled.p`
  cursor: pointer;
  font-size: 18px;
`;
