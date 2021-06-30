import React, { FC } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  zipCode: string;
  baseAddress: string;
  detailAddress: string;
  setInput: (payload: { name: string; value: string }) => void;
  setIsClickAddressBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddressColumn: FC<Props> = ({
  setInput,
  setIsClickAddressBtn,
  zipCode,
  baseAddress,
  detailAddress,
}) => {
  const addressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };

  const searchBtnClickHandler = () => {
    setIsClickAddressBtn(true);
  };

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
            inputChangeHandler={() => {}}
            name={'zipCode'}
            placeholder={'우편번호'}
            defaultValue={zipCode}
            disable
          />
          <Input
            width={312}
            height={42}
            inputChangeHandler={() => {}}
            name={'basicAddress'}
            placeholder={'기본주소'}
            defaultValue={baseAddress}
            disable
          />
          <S.SearchBtn onClick={searchBtnClickHandler}>검색</S.SearchBtn>
        </div>
        <div>
          <Input
            width={593}
            height={42}
            inputChangeHandler={addressChangeHandler}
            placeholder={'상세주소'}
            defaultValue={detailAddress}
            name={'detailAddress'}
          />
        </div>
      </div>
    </S.AddressLine>
  );
};

export default AddressColumn;
