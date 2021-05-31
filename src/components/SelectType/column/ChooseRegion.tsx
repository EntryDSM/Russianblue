import React, { FC, useState } from 'react';
import * as S from '../style';
import { AREA } from '../../../constance/SelectType';

interface Props {
  setArea: (payload: string) => void;
}

const ChooseRegion: FC<Props> = ({ setArea }) => {
  const [isCheck, setIsCheck] = useState({ daejeon: false, country: false });
  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    switch (dataId) {
      case 'daejeon':
        setIsCheck({ daejeon: true, country: false });
        setArea('대전');
        break;
      case 'country':
        setIsCheck({ daejeon: false, country: true });
        setArea('전국');
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
