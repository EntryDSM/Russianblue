import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import { TypeSelect } from '../Select';
import { CHOOSETYPEINFO } from '../../../constance/SelectType';

interface Props {
  socialType: string;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setRemark: (payload: string) => void;
  applicationRemark: string;
  applicationType: string;
}

const ChooseType: FC<Props> = ({
  socialType,
  setType,
  setSocialType,
  setRemark,
  applicationRemark,
  applicationType,
}) => {
  const [isCheck, setIsCheck] = useState({ regular: false, meister: false, social: false });
  const [disabled, setDisabled] = useState('disabled');

  useEffect(() => {
    switch (applicationType) {
      case 'COMMON':
        setIsCheck({ regular: true, meister: false, social: false });
        break;
      case 'MEISTER':
        setIsCheck({ regular: false, meister: true, social: false });
        break;
      case 'SOCIAL':
        setIsCheck({ regular: false, meister: false, social: true });
        break;
      default:
        setIsCheck({ regular: false, meister: false, social: false });
        break;
    }
    if (applicationType === 'SOCIAL') {
      if (applicationRemark !== null) {
        setDisabled('normal');
        switch (applicationRemark) {
          case 'BASIC_LIVING':
            setSocialType('기초생활수급자');
            break;
          case 'ONE_PARENT':
            setSocialType('한부모가족');
            break;
          case 'LOWEST_INCOME':
            setSocialType('차상위계층');
            break;
          case 'TEEN_HOUSEHOLDER':
            setSocialType('소년소녀가장');
            break;
          case 'FROM_NORTH':
            setSocialType('북한이탈주민');
            break;
          case 'MULTICULTURA':
            setSocialType('다문화가정');
            break;
        }
      }
    }
  }, [applicationType]);

  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    switch (dataId) {
      case 'regular':
        setIsCheck({ regular: true, meister: false, social: false });
        setDisabled('disabled');
        setType('COMMON');
        if (applicationRemark !== 'PRIVILEGED_ADMISSION' && applicationRemark !== 'NATIONAL_MERIT')
          setRemark(null);
        break;
      case 'meister':
        setIsCheck({ regular: false, meister: true, social: false });
        setDisabled('disabled');
        setType('MEISTER');
        if (applicationRemark !== 'PRIVILEGED_ADMISSION' && applicationRemark !== 'NATIONAL_MERIT')
          setRemark(null);
        break;
      case 'social':
        setIsCheck({ regular: false, meister: false, social: true });
        setDisabled('normal');
        setType('SOCIAL');
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
          setRemark={setRemark}
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
