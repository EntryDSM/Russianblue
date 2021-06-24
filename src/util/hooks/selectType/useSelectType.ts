import { useDispatch } from 'react-redux';
import {
  selectType,
  setArea,
  setGraduation,
  setGraduationMonth,
  setGraduationYear,
  setRemark,
  setSocialType,
  setType,
  autoSaveSelectType,
} from '../../../modules/redux/action/selectType';
import { useSelectState } from '../default';

const useSelectType = () => {
  const dispatch = useDispatch();
  const state = useSelectState().selectType;
  const setState = {
    setType: (payload: string) => {
      dispatch(setType(payload));
    },
    setSocialType: (payloade: string) => {
      dispatch(setSocialType(payloade));
    },
    setArea: (payload: boolean) => {
      dispatch(setArea(payload));
    },
    setGraduation: (payload: string) => {
      dispatch(setGraduation(payload));
    },
    setGraduationYear: (payload: number) => {
      dispatch(setGraduationYear(payload));
    },
    setGraduationMonth: (payload: number) => {
      dispatch(setGraduationMonth(payload));
    },
    setRemark: (payload: string) => {
      dispatch(setRemark(payload));
    },
    selectType: (payload: {
      educationalStatus: string;
      applicationType: string;
      isDaejeon: boolean;
      applicationRemark: string;
      graduatedAt: string;
    }) => {
      dispatch(selectType(payload));
    },
    autoSaveSelectType: (payload: {
      educationalStatus: string;
      applicationType: string;
      isDaejeon: boolean;
      applicationRemark: string;
      graduatedAt: string;
    }) => {
      dispatch(autoSaveSelectType(payload));
    },
  };
  return {
    state,
    setState,
  };
};

export default useSelectType;
