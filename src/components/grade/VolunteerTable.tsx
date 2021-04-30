import React from 'react';
import * as S from './style';
import DateInput from './DateInput';

const VolunteerTable = () => {
  return (
    <S.Volunteer>
      <tr>
        <S.ServingTime>봉사시간</S.ServingTime>
        <S.VolunteerTd>
          <div>
            <S.Input />
            <p>시간</p>
          </div>
        </S.VolunteerTd>
        <S.VolunteerTd></S.VolunteerTd>
      </tr>
      <tr>
        <S.Attendance rowSpan={2}>출석정보</S.Attendance>
        <S.VolunteerTd>
          <DateInput subTitle='전체 무단(미인정) 결석 일수' />
        </S.VolunteerTd>
        <S.VolunteerTd>
          <DateInput subTitle='전체 무단 조퇴 일수' />
        </S.VolunteerTd>
      </tr>
      <tr>
        <S.VolunteerTd>
          <DateInput subTitle='전체 무단 지각 일수' />
        </S.VolunteerTd>
        <S.VolunteerTd>
          <DateInput subTitle='전체 무단 결과 일수' />
        </S.VolunteerTd>
      </tr>
    </S.Volunteer>
  );
};

export default VolunteerTable;
