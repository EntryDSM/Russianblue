import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import { AREA } from '../../../constance/SelectType';

interface Props {
  setArea: (payload: boolean) => void;
  isDaejeon: boolean;
}

const ChooseRegion: FC<Props> = ({ setArea, isDaejeon }) => {
  const [isCheck, setIsCheck] = useState({ daejeon: false, country: false });
  const [region, setRegion] = useState(null);
  useEffect(() => {
    if (isDaejeon) setRegion('daejeon');
    else if (isDaejeon === null) setRegion(null);
    else setRegion('country');
  }, [isDaejeon]);

  useEffect(() => {
    if (region === 'daejeon') setIsCheck({ daejeon: true, country: false });
    else if (region === 'country') setIsCheck({ daejeon: false, country: true });
    else setIsCheck({ daejeon: false, country: false });
  }, [region]);

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
            <p data-id={data.id} onClick={onCheckBtnClick}>
              {data.content}
            </p>
          </S.SelectBox>
        );
      })}
    </S.Line>
  );
};

export default ChooseRegion;
