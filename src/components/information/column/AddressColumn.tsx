import React from 'react';
import * as S from '../style';
import Input from '../../default/input';

const AddressColumn = () => {
  const zipCodeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const basicAddressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const detailAddressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <S.AddressLine width={1220}>
      <S.InformationLineTitle>
        <span>*</span>주소
      </S.InformationLineTitle>
      <div>
        <div>
          <Input
            width={166}
            height={42}
            inputChangeHandler={zipCodeChangeHandler}
            name={'zipCode'}
            placeholder={'우편번호'}
            disable
          />
          <Input
            width={312}
            height={42}
            inputChangeHandler={basicAddressChangeHandler}
            name={'basicAddress'}
            placeholder={'기본주소'}
            disable
          />
          <S.SearchBtn>검색</S.SearchBtn>
        </div>
        <div>
          <Input
            width={593}
            height={42}
            inputChangeHandler={detailAddressChangeHandler}
            placeholder={'상세주소'}
            name={'datailAddress'}
          />
        </div>
      </div>
    </S.AddressLine>
  );
};

export default AddressColumn;
