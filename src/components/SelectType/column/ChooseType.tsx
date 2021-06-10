import React, { FC, useState } from 'react';
import * as S from '../style';
import { TypeSelect } from '../Select';
import { CHOOSETYPEINFO } from '../../../constance/SelectType';

interface Props {
  socialType: string;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
}

const ChooseType: FC<Props> = ({ socialType, setType, setSocialType }) => {
  const [isCheck, setIsCheck] = useState({ 1: false, 2: false, 3: false });
  const [disabled, setDisabled] = useState('disabled');
  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    switch (dataId) {
      case 'regular':
        setIsCheck({ 1: true, 2: false, 3: false });
        setDisabled('disabled');
        setType('일반전형');
        break;
      case 'meister':
        setIsCheck({ 1: false, 2: true, 3: false });
        setDisabled('disabled');
        setType('마이스터 인재전형');
        break;
      case 'social':
        setIsCheck({ 1: false, 2: false, 3: true });
        setDisabled('normal');
        setType('사회통합전형');
        break;
    }
  };
  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>전형 선택
      </S.LineTitle>
      {CHOOSETYPEINFO.map(data => {
        return (
          <S.SelectBox margin={86} key={data.id}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
              {isCheck[data.id] && <S.CheckedCircle />}
            </S.CheckCircle>
            <p>{data.content}</p>
          </S.SelectBox>
        );
      })}
      <S.SelectBox margin={86}>
        <S.CheckCircle onClick={onCheckBtnClick} data-id={'social'}>
          {isCheck['social'] && <S.CheckedCircle />}
        </S.CheckCircle>
        <TypeSelect
          socialType={socialType}
          setSocialType={setSocialType}
          disabled={disabled}
          setDisabled={setDisabled}
        />
      </S.SelectBox>
    </S.Line>
  );
};

export default ChooseType;
