import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import { HEADCOUNT } from '../../../constance/SelectType';

interface Props {
  headcount: string;
  setHeadCount: (payload: string) => void;
}

const HeadCount: FC<Props> = ({ headcount, setHeadCount }) => {
  const [isCheck, setIsCheck] = useState({ inOfHeadCount: false, outOfHeadCount: false });

  const onCheckBtnClick = e => {
    let dataId = e.target.dataset.id;
    switch (dataId) {
      case 'inOfHeadCount':
        setIsCheck({ inOfHeadCount: true, outOfHeadCount: false });
        setHeadCount('IN_OF_HEADCOUNT');
        break;
      case 'outOfHeadCount':
        setIsCheck({ inOfHeadCount: false, outOfHeadCount: true });
        setHeadCount('OUT_OF_HEADCOUNT');
        break;
    }
  };

  useEffect(() => {
    if (headcount === 'IN_OF_HEADCOUNT') setIsCheck({ inOfHeadCount: true, outOfHeadCount: false });
    else if (headcount === 'OUT_OF_HEADCOUNT')
      setIsCheck({ inOfHeadCount: false, outOfHeadCount: true });
  }, [headcount]);

  return (
    <S.Line>
      <S.LineTitle>정원 내・외</S.LineTitle>
      {HEADCOUNT.map(data => {
        return (
          <S.SelectBox margin={100} key={data.id}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
              {isCheck[data.id] && <S.CheckedCircle />}
            </S.CheckCircle>
            <p data-id={data.id}>{data.content}</p>
          </S.SelectBox>
        );
      })}
    </S.Line>
  );
};

export default HeadCount;
