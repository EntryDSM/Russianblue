import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import { AREA } from '../../../constance/SelectType';

interface Props {
  setArea: (payload: boolean) => void;
  is_daejeon: boolean;
  application_remark: string;
  application_type: string;
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

const ChooseRegion: FC<Props> = ({
  setArea,
  is_daejeon,
  educational_status,
  application_remark,
  application_type,
  graduationYear,
  graduationMonth,
  autoSaveSelectType,
}) => {
  const [isCheck, setIsCheck] = useState({ daejeon: false, country: false });
  useEffect(() => {
    if (is_daejeon) {
      setIsCheck({ daejeon: true, country: false });
    } else if (is_daejeon === undefined) {
      setIsCheck({ daejeon: false, country: false });
    } else {
      setIsCheck({ daejeon: false, country: true });
    }
  }, [is_daejeon]);

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
  }, [is_daejeon]);

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
