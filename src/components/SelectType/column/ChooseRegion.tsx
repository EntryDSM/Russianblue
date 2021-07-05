import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import { AREA } from '../../../constance/SelectType';

interface Props {
  setArea: (payload: boolean) => void;
  isDaejeon: boolean;
  applicationRemark: string;
  applicationType: string;
  educationalStatus: string;
  graduationYear: number;
  graduationMonth: number;
  autoSaveSelectType: (payload: {
    educationalStatus: string;
    applicationType: string;
    isDaejeon: boolean;
    applicationRemark: string;
    graduatedAt: string;
  }) => void;
}

const ChooseRegion: FC<Props> = ({
  setArea,
  isDaejeon,
  educationalStatus,
  applicationRemark,
  applicationType,
  graduationYear,
  graduationMonth,
  autoSaveSelectType,
}) => {
  const [isCheck, setIsCheck] = useState({ daejeon: false, country: false });
  useEffect(() => {
    if (isDaejeon) {
      setIsCheck({ daejeon: true, country: false });
    } else if (isDaejeon === undefined) {
      setIsCheck({ daejeon: false, country: false });
    } else {
      setIsCheck({ daejeon: false, country: true });
    }
  }, [isDaejeon]);

  useEffect(() => {
    let graduatedDate = '';
    if (String(graduationMonth).length === 1) {
      graduatedDate = String(graduationYear) + '0' + String(graduationMonth);
    } else graduatedDate = String(graduationYear) + String(graduationMonth);
    autoSaveSelectType({
      educationalStatus: educationalStatus,
      applicationType: applicationType,
      isDaejeon: isDaejeon,
      applicationRemark: applicationRemark,
      graduatedAt: graduatedDate,
    });
  }, [isDaejeon]);

  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    switch (dataId) {
      case 'daejeon':
        setIsCheck({ daejeon: true, country: false });
        setArea(true);
        break;
      case 'country':
        setIsCheck({ daejeon: false, country: true });
        setArea(false);
        break;
    }
  };

  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>지역 선택
      </S.LineTitle>
      {AREA.map(data => {
        return (
          <S.SelectBox margin={117} key={data.id}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
              {isCheck[data.id] && <S.CheckedCircle />}
            </S.CheckCircle>
            <p>{data.content}</p>
          </S.SelectBox>
        );
      })}
    </S.Line>
  );
};

export default ChooseRegion;
