import React, { FC, useState } from 'react';
import * as S from './style';
import DaumPostcode, { AddressData } from 'react-daum-postcode';
import { addressType } from 'src/constance/information';

interface Props {
  setAddress: (payload: addressType) => void;
  setIsClickAddressBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddressModal: FC<Props> = ({ setAddress, setIsClickAddressBtn }) => {
  const onComplete = (data: AddressData) => {
    const { zonecode, roadAddress } = data;
    setAddress({
      baseAddress: roadAddress,
      zipCode: zonecode,
    });
    setIsClickAddressBtn(false);
  };

  return (
    <S.AddressModalWrapper>
      <DaumPostcode width={438} height={629} onComplete={onComplete} animation />
    </S.AddressModalWrapper>
  );
};

export default AddressModal;
