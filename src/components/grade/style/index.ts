import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const Grade = styled.div`
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

export const TableName = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  letter-spacing: -0.4px;
  font-weight: 400;
`;

export const VolunteerTable = styled.div`
  width: 1220px;
  height: 210px;
  border-top: 3px solid #000000;
  border-bottom: 3px solid #000000;
  display: flex;
  margin-bottom: 77px;
  > div:nth-child(2) > div {
    display: flex;
  }
`;

export const GradeTable = styled(VolunteerTable)`
  height: 670px;
  margin-bottom: 0px;
  display: block;
  > div:nth-child(2) > div {
    display: flex;
  }
  > div:nth-child(2) > div:first-child {
    display: block;
  }
`;

export const TableTitle = styled.div<{
  height: number;
  padding: number;
}>`
  width: 151px;
  background-color: ${color.light};
  font-size: 20px;
  box-sizing: border-box;
  text-align: center;
  ${({ height, padding }) => css`
    height: ${height}px;
    padding: ${padding}px 0px;
  `}
`;

export const TableTd = styled.div<{
  border?: boolean;
}>`
  width: 530px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 32px;
  font-size: 18px;
  border-bottom: 1px solid ${color.middleBar};
  > div {
    display: flex;
    align-items: center;
    > p {
      margin-left: 15px;
    }
    > input {
      text-align: center;
      font-size: 18px;
    }
  }
  ${({ border }) => css`
    border-right: ${border ? `1px solid ${color.middleBar}` : 'none'};
  `}
`;

export const GradeColumn = styled.div`
  display: flex;
`;

export const GradeTableTd = styled(TableTd)<{
  disabled?: boolean;
}>`
  width: 267.75px;
  height: 75px;
  justify-content: center;
  > p:last-child {
    margin: 0px;
  }
  ${({ disabled }) => css`
    background-color: ${disabled ? 'rgba(0, 0, 0, 0.05)' : 'white'};
  `}
`;

export const CheckBtnBox = styled.div<{
  disabled?: boolean;
}>`
  width: 19px;
  height: 19px;
  border: 1px solid #000000;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 3px;
  ${({ disabled }) => css`
    cursor: ${disabled ? 'default' : 'pointer'};
  `}
`;

export const CheckedBtnBox = styled.div<{
  disabled?: boolean;
}>`
  width: 11px;
  height: 11px;
  border-radius: 2px;
  ${({ disabled }) => css`
    background-color: ${disabled ? color.disable : color.main};
    cursor: ${disabled ? 'default' : 'pointer'};
  `}
`;

export const GradeTr = styled.div`
  width: 1220px;
  height: 145px;
  display: flex;
  > div > div {
    display: flex;
  }
`;

export const GradeTd = styled.div<{
  width: number;
}>`
  font-size: 20px;
  box-sizing: border-box;
  padding: 30px 0px;
  height: 80px;
  text-align: center;
  background-color: ${color.light};
  ${({ width }) => css`
    width: ${width}px;
  `}
`;

export const SemesterTd = styled(GradeTd)`
  font-size: 18px;
  height: 65px;
  padding: 24px 0px;
`;

export const ResetGrade = styled.div`
  width: 1220px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  > div {
    display: flex;
    align-items: center;
  }
`;

export const ResetTitle = styled.p`
  font-size: 16px;
  margin-right: 11px;
`;

export const GradeBtn = styled.div<{
  isClick: boolean;
}>`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  font-size: 15px;
  margin-left: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ isClick }) => css`
    border: 1px solid ${isClick ? color.main : color.disable};
    color: ${isClick ? color.main : '#000000'};
  `}
`;

export const ScoreBtn = styled.p<{
  disabled?: boolean;
}>`
  font-size: 18px;
  margin-right: 6px;
  ${({ disabled }) => css`
    cursor: ${disabled ? 'default' : 'pointer'};
    :hover {
      color: ${disabled ? 'black' : color.main};
      font-weight: ${disabled ? 'normal' : '900'};
    }
  `}
`;
