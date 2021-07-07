import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import { REMARKS, REMARK_EXPLAIN } from '../../../constance/SelectType';

interface Props {
  setRemark: (payload: string) => void;
  applicationRemark: string;
}

const ChooseRemark: FC<Props> = ({ setRemark, applicationRemark }) => {
  const [isCheck, setIsCheck] = useState({ nationalMerit: false, specialAdmission: false });

  useEffect(() => {
    switch (applicationRemark) {
      case 'PRIVILEGED_ADMISSION':
        setIsCheck({ nationalMerit: false, specialAdmission: true });
        break;
      case 'NATIONAL_MERIT':
        setIsCheck({ nationalMerit: true, specialAdmission: false });
        break;
      default:
        setIsCheck({ nationalMerit: false, specialAdmission: false });
    }
  }, [applicationRemark]);

  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
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
  };
  return (
    <S.Line>
      <S.LineTitle>
        <span />
        특기사항
      </S.LineTitle>
      {REMARKS.map(data => {
        return (
          <S.SelectBox margin={65} key={data.id}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
              {isCheck[data.id] && <S.CheckedCircle data-id={data.id} onClick={onCheckBtnClick} />}
            </S.CheckCircle>
            <p>{data.content}</p>
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
