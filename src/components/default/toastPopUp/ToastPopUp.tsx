import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { whiteX, checkImg } from '../../../assets/default';

interface Props {
  isSuccessSave: boolean;
}

const ToastPopUp: FC<Props> = ({ isSuccessSave }) => {
  const [isShowFailureStick, setIsShowFailureStick] = useState<boolean>(false);
  const [isShowSuccessStick, setIsShowSuccessStick] = useState<boolean>(false);
  useEffect(() => {
    if (isSuccessSave === true) {
      setIsShowSuccessStick(true);
      setTimeout(() => {
        setIsShowSuccessStick(false);
      }, 2000);
    } else if (isSuccessSave === false) {
      setIsShowFailureStick(true);
      setTimeout(() => {
        setIsShowFailureStick(false);
      }, 2000);
    }
  }, [isSuccessSave]);

  return (
    <>
      <S.FailureStick isShow={isShowFailureStick}>
        <S.XImg src={whiteX} />
        <div>
          <p>작성되지 않는 부분이 있습니다.</p>
          <p>모두 작성 후 최종 제출 해주시기 바랍니다.</p>
        </div>
      </S.FailureStick>
      <S.SuccessStick isShow={isShowSuccessStick}>
        <S.CheckImg src={checkImg} />
        <div>
          <p>자동 저장 되었습니다.</p>
          <p>현재까지 작성된 내용을 자동으로 저장하였습니다.</p>
        </div>
      </S.SuccessStick>
    </>
  );
};

export default ToastPopUp;
