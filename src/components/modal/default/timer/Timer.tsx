import React, { FC } from 'react';
import * as S from '../../style';

interface Props {
  time: number;
}

const Timer: FC<Props> = ({ time }) => {
  const getMinutes = (time: number) => Math.floor(time / 60);
  const getSeconds = (time: number) => {
    const seconds = time % 60;
    if (seconds < 10) {
      return `0${seconds}`;
    }
    return seconds;
  };
  return (
    <S.ModalTimer>
      <p>{getMinutes(time)}</p>
      <p>:</p>
      <p>{getSeconds(time)}</p>
    </S.ModalTimer>
  );
};

export default Timer;
