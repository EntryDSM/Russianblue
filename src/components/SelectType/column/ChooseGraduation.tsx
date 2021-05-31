import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import * as S from '../style';
import { GRADUATION } from '../../../constance/SelectType';

interface Props {
  setIsProspective: Dispatch<React.SetStateAction<boolean>>;
  setGraduation: (payload: string) => void;
}

const ChooseGraduation: FC<Props> = ({ setIsProspective, setGraduation }) => {
  const [isCheck, setIsCheck] = useState({ 1: false, 2: false, 3: false });
  const onCheckBtnClick = e => {
    let dataId = Number(e.target.dataset.id);
    switch (dataId) {
      case 1:
        setIsCheck({ 1: true, 2: false, 3: false });
        setIsProspective(true);
        setGraduation('졸업예정자');
        break;
      case 2:
        setIsCheck({ 1: false, 2: true, 3: false });
        setIsProspective(false);
        setGraduation('졸업자');
        break;
      case 3:
        setIsCheck({ 1: false, 2: false, 3: true });
        setIsProspective(false);
        setGraduation('검정고시');
        break;
    }
  };
  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>졸업 구분
      </S.LineTitle>
      {GRADUATION.map(data => {
        return (
          <S.SelectBox margin={65} key={data.id}>
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

export default ChooseGraduation;
