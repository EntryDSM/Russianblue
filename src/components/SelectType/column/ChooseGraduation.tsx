import React, { Dispatch, FC, useState } from 'react';
import * as S from '../style';
import { GRADUATION } from '../../../constance/SelectType';

interface Props {
  setIsProspective: Dispatch<React.SetStateAction<boolean>>;
  setGraduation: (payload: string) => void;
}

const isCheckInit = {
  prospective: false,
  graduate: false,
  qualification: false,
};

const ChooseGraduation: FC<Props> = ({ setIsProspective, setGraduation }) => {
  const [isCheck, setIsCheck] = useState(isCheckInit);
  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    switch (dataId) {
      case 'prospective':
        setIsCheck({ ...isCheckInit, prospective: true });
        setIsProspective(true);
        setGraduation('졸업예정자');
        break;
      case 'graduate':
        setIsCheck({ ...isCheckInit, graduate: true });
        setIsProspective(false);
        setGraduation('졸업자');
        break;
      case 'qualification':
        setIsCheck({ ...isCheckInit, qualification: true });
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
