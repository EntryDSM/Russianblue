import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import SelectType from '../../components/SelectType';
import useSelectType from '../../util/hooks/selectType';

const SelectTypeContainer = () => {
  const { state, setState } = useSelectType();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_SELECTTYPE });
  }, []);
  useEffect(() => {
    let graduated_at = '';
    if (String(state.graduationMonth).length === 1) {
      graduated_at = String(state.graduationYear) + '0' + String(state.graduationMonth);
    } else graduated_at = String(state.graduationYear) + String(state.graduationMonth);
    setState.autoSaveSelectType({
      educational_status: state.educational_status,
      application_type: state.application_type,
      is_daejeon: state.is_daejeon,
      application_remark: state.application_remark,
      graduated_at: graduated_at,
    });
  }, [
    state.application_remark,
    state.educational_status,
    state.application_type,
    state.graduationYear,
    state.graduationMonth,
    state.is_daejeon,
  ]);
  return <SelectType {...state} {...setState} />;
};

export default SelectTypeContainer;
