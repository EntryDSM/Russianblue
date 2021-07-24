import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import { REMARKS, REMARK_EXPLAIN } from '../../../constance/SelectType';

interface Props {
  setRemark: (payload: string) => void;
  applicationRemark: string;
  applicationType: string;
}

const ChooseRemark: FC<Props> = ({ setRemark, applicationRemark, applicationType }) => {
  const [isCheck, setIsCheck] = useState({ nationalMerit: false, specialAdmission: false });
  const [isBlock, setIsBlock] = useState(false);

  useEffect(() => {
    if (applicationType === 'SOCIAL') {
      setIsCheck({ nationalMerit: true, specialAdmission: true });
      setIsBlock(true);
    } else {
      setIsCheck({ nationalMerit: false, specialAdmission: false });
      setIsBlock(false);
    }
  }, [applicationType]);

  useEffect(() => {
    switch (applicationRemark) {
      case 'PRIVILEGED_ADMISSION':
        setIsCheck({ nationalMerit: false, specialAdmission: true });
        break;
      case 'NATIONAL_MERIT':
        setIsCheck({ nationalMerit: true, specialAdmission: false });
        break;
      default:
        if (applicationType !== 'SOCIAL')
          setIsCheck({ nationalMerit: false, specialAdmission: false });
        break;
    }
  }, [applicationRemark, applicationType]);

  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    if (applicationType !== 'SOCIAL') {
      switch (dataId) {
        case 'nationalMerit':
          setIsCheck({ nationalMerit: !isCheck.nationalMerit, specialAdmission: false });
          if (!isCheck.nationalMerit) {
            setRemark('NATIONAL_MERIT');
          } else setRemark(null);
          break;
        case 'specialAdmission':
          setIsCheck({ nationalMerit: false, specialAdmission: !isCheck.specialAdmission });
          if (!isCheck.specialAdmission) {
            setRemark('PRIVILEGED_ADMISSION');
          } else setRemark(null);
          break;
      }
    }
  };
  return (
    <S.Line>
      <S.LineTitle>
        <span />
        특기사항
      </S.LineTitle>
      {REMARKS.map(data => {
        return (
          <S.SelectBox margin={65} key={data.id} isBlock={isBlock}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id} isBlock={isBlock}>
              {isCheck[data.id] && (
                <S.CheckedCircle data-id={data.id} isBlock={isBlock} onClick={onCheckBtnClick} />
              )}
            </S.CheckCircle>
            <p onClick={onCheckBtnClick} data-id={data.id}>
              {data.content}
            </p>
          </S.SelectBox>
        );
      })}
      <S.Explain>
        <span>*</span>
        {REMARK_EXPLAIN}
      </S.Explain>
    </S.Line>
  );
};

export default ChooseRemark;
