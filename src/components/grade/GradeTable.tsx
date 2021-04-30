import React from 'react';
import * as S from './style';
import GradeTableTd from './GradeTableTd';

const GradeTable = () => {
  return (
    <S.GradeTable>
      <tr>
        <S.FristLine></S.FristLine>
        <td colSpan={2} className='bg'>
          1학년
        </td>
        <td colSpan={2} className='bg'>
          2학년
        </td>
        <td className='bg'>3학년</td>
      </tr>
      <tr>
        <S.FristLine></S.FristLine>
        <td className='bg'>1학기</td>
        <td className='bg'>2학기</td>
        <td className='bg'>1학기</td>
        <td className='bg'>2학기</td>
        <td className='bg'>1학기</td>
      </tr>
      <tr>
        <S.FristLine>미이수 학기</S.FristLine>
        {Array(5)
          .fill('')
          .map(i => (
            <td>
              <S.CheckBox>
                <S.CheckedBox />
              </S.CheckBox>
            </td>
          ))}
      </tr>
      <GradeTableTd title='국어' />
      <GradeTableTd title='사회' />
      <GradeTableTd title='역사' />
      <GradeTableTd title='수학' />
      <GradeTableTd title='과학' />
      <GradeTableTd title='기술가정' />
      <GradeTableTd title='영어' />
    </S.GradeTable>
  );
};

export default GradeTable;
