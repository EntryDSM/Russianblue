import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  isPassed: boolean;
}

const ProgressIcon: FC<Props> = ({ isPassed }) => {
  return (
    <S.ProgressIcon isPassed={isPassed}>
      <div className='background' />
      <div className='iconWrapper'>
        <div className='icon'>
          <div />
          <div />
        </div>
      </div>
    </S.ProgressIcon>
  );
};

export default ProgressIcon;
