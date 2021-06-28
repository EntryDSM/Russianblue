import React, { FC, useMemo } from 'react';
import * as S from '../style';
import Input from '../../default/input';
import { EXPLAIN } from '../../../constance/information';

interface Props {
  title: string;
  inputName: string;
  schoolPhoneNumber?: string;
  parentPhoneNumber?: string;
  phoneNumber?: string;
  homePhoneNumber?: string;
  setInput: (payload: { name: string; value: string }) => void;
}

const PhoneNumberColumn: FC<Props> = ({
  title,
  inputName,
  setInput,
  schoolPhoneNumber,
  parentPhoneNumber,
  phoneNumber,
  homePhoneNumber,
}) => {
  const phoneNumberChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.name, value: e.target.value });
  };

  const phoneNumberInput = useMemo(() => {
    let inputDefaultValue = '';
    if (inputName === 'schoolPhoneNumber') inputDefaultValue = schoolPhoneNumber;
    else if (inputName === 'parentPhoneNumber') inputDefaultValue = parentPhoneNumber;
    else if (inputName === 'phoneNumber') inputDefaultValue = phoneNumber;
    else if (inputName === 'homePhoneNumber') inputDefaultValue = homePhoneNumber;
    return (
      <Input
        width={260}
        height={41}
        inputChangeHandler={phoneNumberChangeHandler}
        name={inputName}
        defaultValue={inputDefaultValue}
      />
    );
  }, [schoolPhoneNumber, parentPhoneNumber, phoneNumber, homePhoneNumber]);

  return (
    <S.InformationLine width={1220}>
      <S.InformationLineTitle>
        <span>{inputName === 'homePhoneNumber' ? '' : '*'}</span>
        {title}
      </S.InformationLineTitle>
      {phoneNumberInput}
      <S.Explain>
        <span>*</span>
        {EXPLAIN}
      </S.Explain>
    </S.InformationLine>
  );
};

export default PhoneNumberColumn;
