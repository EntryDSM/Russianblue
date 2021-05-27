import React, { Dispatch, FC, useState } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active, dropdown_disabled } from '../../../assets/selectType';
import { SOCIAL } from '../../../constance/SelectType';

interface Props {
  disabled: number;
  setDisabled: Dispatch<React.SetStateAction<number>>;
  socialType: string;
  setSocialType: (payload: string) => void;
}

const TypeSelect: FC<Props> = ({ socialType, setSocialType, disabled, setDisabled }) => {
  const onSelectClick = () => {
    if (disabled === 1) {
      setDisabled(2);
    } else if (disabled === 2) {
      setDisabled(1);
    }
  };

  const onSocialTypeClick = e => {
    setSocialType(e.target.innerText);
  };

  return (
    <S.Select width={167} disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent width={135}>
        <p>{socialType}</p>
        {disabled === 0 && <img src={dropdown_disabled} />}
        {disabled === 1 && <img src={dropdown} />}
        {disabled === 2 && <img src={dropdown_active} />}
      </S.SelectContent>
      {disabled === 2 && (
        <S.SubSelect>
          <S.GrayLine width={135} />
          {SOCIAL.map(data => {
            return <p onClick={onSocialTypeClick}>{data.content}</p>;
          })}
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default TypeSelect;
