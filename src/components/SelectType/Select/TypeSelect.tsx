import React, { Dispatch, FC, useMemo } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active, dropdown_disabled } from '../../../assets/selectType';
import { SOCIAL } from '../../../constance/SelectType';

interface Props {
  socialType: string;
  disabled: string;
  setDisabled: Dispatch<React.SetStateAction<string>>;
  setSocialType: (payload: string) => void;
}

const TypeSelect: FC<Props> = ({ socialType, setSocialType, disabled, setDisabled }) => {
  const onSelectClick = () => {
    if (disabled === 'normal') {
      setDisabled('enabled');
    } else if (disabled === 'enabled') {
      setDisabled('normal');
    }
  };

  const onSocialTypeClick = e => {
    setSocialType(e.target.innerText);
  };

  const dropDown = useMemo(() => {
    if (disabled === 'disabled') {
      return <img src={dropdown_disabled} />;
    } else if (disabled === 'normal') {
      return <img src={dropdown} />;
    } else {
      return <img src={dropdown_active} />;
    }
  }, [disabled]);

  return (
    <S.Select width={167} disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent width={135}>
        <p>{socialType}</p>
        {dropDown}
      </S.SelectContent>
      {disabled === 'enabled' && (
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
