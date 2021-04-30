import React from 'react';
import * as S from './style';

const InfoAddress = () => {
  return (
    <S.InfoAddress>
      <div>
        <S.InfoAddressInput width={166} placeholder='우편번호' />
        <S.InfoAddressInput width={312} placeholder='기본주소' />
        <S.InfoAddressSearchBtn>검색</S.InfoAddressSearchBtn>
      </div>
      <S.InfoAddressInput width={593} placeholder='상세주소' />
    </S.InfoAddress>
  );
};

export default InfoAddress;
