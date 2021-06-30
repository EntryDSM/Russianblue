import { useDispatch } from 'react-redux';
import { addressType, gedInformationType, informationType } from 'src/constance/information';
import {
  setInput,
  setGender,
  setBirthDate,
  setBirthMonth,
  setBirthYear,
  setImageUrl,
  setImageFile,
  gedInformation,
  information,
  autoSaveInformation,
  informationImage,
  searchSchool,
  setSchoolCode,
  setAddress,
  autoSaveGedInformation,
} from '../../../modules/redux/action/information';
import { useSelectState } from '../default';

const useInformation = () => {
  const dispatch = useDispatch();
  const state = useSelectState().information;
  const educationalStatus = useSelectState().selectType.educationalStatus;
  let autoSaveInformationState;
  const autoSaveState = {
    name: state.name,
    gender: state.gender,
    birthYear: state.birthYear,
    birthMonth: state.birthMonth,
    birthDate: state.birthDate,
    schoolCode: state.schoolCode,
    schoolPhoneNumber: state.schoolPhoneNumber,
    parentName: state.parentName,
    parentPhoneNumber: state.parentPhoneNumber,
    phoneNumber: state.phoneNumber,
    homePhoneNumber: state.homePhoneNumber,
    baseAddress: state.baseAddress,
    detailAddress: state.detailAddress,
    zipCode: state.zipCode,
    stdGrade: state.stdGrade,
    stdClass: state.stdClass,
    stdNumber: state.stdNumber,
  };
  const autoSaveGedState = {
    name: state.name,
    gender: state.gender,
    birthYear: state.birthYear,
    birthMonth: state.birthMonth,
    birthDate: state.birthDate,
    parentName: state.parentName,
    parentPhoneNumber: state.parentPhoneNumber,
    phoneNumber: state.phoneNumber,
    homePhoneNumber: state.homePhoneNumber,
    baseAddress: state.baseAddress,
    detailAddress: state.detailAddress,
    zipCode: state.zipCode,
    totalScore: state.totalScore,
  };

  let autoSaveInformationRequest;
  if (educationalStatus === 'QUALIFICATION_EXAM') {
    autoSaveInformationRequest = autoSaveGedInformation;
    autoSaveInformationState = autoSaveState;
  } else {
    autoSaveInformationRequest = autoSaveInformation;
    autoSaveInformationState = autoSaveGedState;
  }
  const setState = {
    setInput: (payload: { name: string; value: string }) => {
      dispatch(setInput(payload));
      dispatch(
        autoSaveInformationRequest({
          ...autoSaveInformationState,
          [payload.name]: payload.value,
        }),
      );
    },
    setGender: (payload: string) => {
      dispatch(
        autoSaveInformationRequest({
          ...autoSaveInformationState,
          gender: payload,
        }),
      );
      dispatch(setGender(payload));
    },
    setBirthYear: (payload: number) => {
      dispatch(
        autoSaveInformationRequest({
          ...autoSaveInformationState,
          birthYear: payload,
        }),
      );
      dispatch(setBirthYear(payload));
    },
    setBirthMonth: (payload: number) => {
      dispatch(
        autoSaveInformationRequest({
          ...autoSaveInformationState,
          birthMonth: payload,
        }),
      );
      dispatch(setBirthMonth(payload));
    },
    setBirthDate: (payload: number) => {
      dispatch(
        autoSaveInformationRequest({
          ...autoSaveInformationState,
          birthDate: payload,
        }),
      );
      dispatch(setBirthDate(payload));
    },
    setImageUrl: (payload: string) => {
      dispatch(setImageUrl(payload));
    },
    setImageFile: (payload: File) => {
      dispatch(setImageFile(payload));
    },
    setAddress: (payload: addressType) => {
      dispatch(
        autoSaveInformationRequest({
          ...autoSaveInformationState,
          baseAddress: payload.baseAddress,
          zipCode: payload.zipCode,
        }),
      );
      dispatch(setAddress(payload));
    },
    information: (payload: informationType) => {
      dispatch(information(payload));
    },
    autoSaveInformation: (payload: informationType) => {
      dispatch(autoSaveInformation(payload));
    },
    gedInformation: (payload: gedInformationType) => {
      dispatch(gedInformation(payload));
    },
    informationImage: (payload: File) => {
      dispatch(informationImage(payload));
    },
    searchSchool: (payload: { schoolSearchName: string; size: number; page: number }) => {
      dispatch(searchSchool(payload));
    },
    setSchoolCode: (payload: string) => {
      dispatch(
        autoSaveInformation({
          ...autoSaveState,
          schoolCode: payload,
        }),
      );
      dispatch(setSchoolCode(payload));
    },
  };

  return { state, setState };
};

export default useInformation;
