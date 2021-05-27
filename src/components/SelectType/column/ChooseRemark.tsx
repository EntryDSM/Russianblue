import React, { FC, useState } from 'react';
import * as S from '../style';
import { REMARKS, REMARK_EXPLAIN } from '../../../constance/SelectType';

interface Props {
  remark: string;
  setRemark: (payload: string) => void;
}

const ChooseRemark: FC<Props> = () => {
  const [isCheck, setIsCheck] = useState({ 1: false, 2: false });
  const onCheckBtnClick = e => {
    let dataId = Number(e.target.dataset.id);
    switch (dataId) {
      case 1:
        setIsCheck({ 1: true, 2: false });
        break;
      case 2:
        setIsCheck({ 1: false, 2: true });
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
