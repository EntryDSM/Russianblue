import React from 'react';
import SelectType from '../../components/SelectType';
import { useSelectType } from '../../util/hooks/selectType';

const SelectTypeContainer = () => {
  const { state, setState } = useSelectType();
  return <SelectType {...state} {...setState} />;
};

export default SelectTypeContainer;
