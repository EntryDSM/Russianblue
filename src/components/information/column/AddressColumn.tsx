import React, { FC } from 'react';
import * as S from '../style';
import Input from '../../default/input';

interface Props {
  setInput: (payload: { name: string; value: string }) => void;
}

const AddressColumn: FC<Props> = ({ setInput }) => {
  const addressChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
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
            inputChangeHandler={addressChangeHandler}
            name={'zipCode'}
            placeholder={'우편번호'}
            disable
          />
          <Input
            width={312}
            height={42}
            inputChangeHandler={addressChangeHandler}
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
            inputChangeHandler={addressChangeHandler}
            placeholder={'상세주소'}
            name={'datailAddress'}
          />
        </div>
      </div>
    </S.AddressLine>
  );
};

export default AddressColumn;
