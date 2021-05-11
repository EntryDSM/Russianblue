import React from 'react';
import * as S from './style';
import { SCHOOL, SELECTTYPE } from '../../constance/SelectType';
import Pagination from '../default/Pagination';
import SelectLine from './SelectLine';

const SelectType = () => {
  return (
    <S.SelectType>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{SELECTTYPE}</S.Title>
      </div>
      <SelectLine />
      <Pagination nowPage={[true, false, false, false, false]} />
    </S.SelectType>
  );
};

export default SelectType;
