import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import { TypeSelect } from '../Select';
import { CHOOSETYPEINFO } from '../../../constance/SelectType';

interface Props {
  socialType: string;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setRemark: (payload: string) => void;
  application_remark: string;
  application_type: string;
  is_daejeon: boolean;
  educational_status: string;
  graduationYear: number;
  graduationMonth: number;
  autoSaveSelectType: (payload: {
    educational_status: string;
    application_type: string;
    is_daejeon: boolean;
    application_remark: string;
    graduated_at: string;
  }) => void;
}

const ChooseType: FC<Props> = ({
  socialType,
  setType,
  setSocialType,
  setRemark,
  application_remark,
  application_type,
  educational_status,
  is_daejeon,
  graduationYear,
  graduationMonth,
  autoSaveSelectType,
}) => {
  const [isCheck, setIsCheck] = useState({ regular: false, meister: false, social: false });
  const [disabled, setDisabled] = useState('disabled');

  useEffect(() => {
    switch (application_type) {
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
    if (application_type === 'SOCIAL') {
      if (application_remark !== null) {
        setDisabled('normal');
        switch (application_remark) {
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
  }, [application_type]);

  useEffect(() => {
    let graduatedAt = '';
    if (String(graduationMonth).length === 1) {
      graduatedAt = String(graduationYear) + '0' + String(graduationMonth);
    } else graduatedAt = String(graduationYear) + String(graduationMonth);
    autoSaveSelectType({
      educational_status: educational_status,
      application_type: application_type,
      is_daejeon: is_daejeon,
      application_remark: application_remark,
      graduated_at: graduatedAt,
    });
  }, [application_type]);

  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    switch (dataId) {
      case 'regular':
        setIsCheck({ regular: true, meister: false, social: false });
        setDisabled('disabled');
        setType('COMMON');
        if (
          application_remark !== 'PRIVILEGED_ADMISSION' &&
          application_remark !== 'NATIONAL_MERIT'
        )
          setRemark(null);
        break;
      case 'meister':
        setIsCheck({ regular: false, meister: true, social: false });
        setDisabled('disabled');
        setType('MEISTER');
        if (
          application_remark !== 'PRIVILEGED_ADMISSION' &&
          application_remark !== 'NATIONAL_MERIT'
        )
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
          graduationMonth={graduationMonth}
          application_type={application_type}
          is_daejeon={is_daejeon}
          educational_status={educational_status}
          graduationYear={graduationYear}
          application_remark={application_remark}
          autoSaveSelectType={autoSaveSelectType}
        />
      </S.SelectBox>
    </S.Line>
  );
};

export default ChooseType;
