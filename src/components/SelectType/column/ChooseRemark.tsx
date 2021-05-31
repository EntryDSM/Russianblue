import React, { FC, useState } from 'react';
import * as S from '../style';
import { REMARKS, REMARK_EXPLAIN } from '../../../constance/SelectType';

interface Props {
  setRemark: (payload: string) => void;
}

const ChooseRemark: FC<Props> = ({ setRemark }) => {
  const [isCheck, setIsCheck] = useState({ nationalMerit: false, specialAdmission: false });
  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    switch (dataId) {
      case 'nationalMerit':
        setIsCheck({ nationalMerit: true, specialAdmission: false });
        setRemark('국가 유공자');
        break;
      case 'specialAdmission':
        setIsCheck({ nationalMerit: false, specialAdmission: true });
        setRemark('특례 입학 대상자');
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
              {isCheck[data.id] && <S.CheckedCircle />}
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
