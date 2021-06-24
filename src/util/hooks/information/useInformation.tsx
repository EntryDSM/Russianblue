import { useDispatch } from 'react-redux';
import {
  setInput,
  setGender,
  setBirthDate,
  setBirthMonth,
  setBirthYear,
  setImageUrl,
  setImageFile,
  information,
  autoSaveInformation,
  informationImage,
} from '../../../modules/redux/action/information';
import { useSelectState } from '../default';

const useInformation = () => {
  const dispatch = useDispatch();
  const state = useSelectState().information;
  const setState = {
    setInput: (payload: { name: string; value: string }) => {
      dispatch(setInput(payload));
    },
    setGender: (payload: string) => {
      dispatch(setGender(payload));
    },
    setBirthYear: (payload: number) => {
      dispatch(setBirthYear(payload));
    },
    setBirthMonth: (payload: number) => {
      dispatch(setBirthMonth(payload));
    },
    setBirthDate: (payload: number) => {
      dispatch(setBirthDate(payload));
    },
    setImageUrl: (payload: string) => {
      dispatch(setImageUrl(payload));
    },
    setImageFile: (payload: File) => {
      dispatch(setImageFile(payload));
    },
    information: (payload: {
      name: string;
      gender: string;
      birthDay: string;
      schoolName: string;
      schoolPhoneNumber: string;
      parentName: string;
      parentPhoneNumber: string;
      phoneNumber: string;
      homePhoneNumber: string;
      baseAddress: string;
      detailAddress: string;
      zipcode: string;
      imageUrl: string;
      grade: string;
      isGraduated: boolean;
    }) => {
      dispatch(information(payload));
    },
    autoSaveInformation: (payload: {
      name: string;
      gender: string;
      birthDay: string;
      schoolName: string;
      schoolPhoneNumber: string;
      parentName: string;
      parentPhoneNumber: string;
      phoneNumber: string;
      homePhoneNumber: string;
      baseAddress: string;
      detailAddress: string;
      zipcode: string;
      imageUrl: string;
      grade: string;
      isGraduated: boolean;
    }) => {
      dispatch(autoSaveInformation(payload));
    },
    informationImage: (payload: File) => {
      dispatch(informationImage(payload));
    },
  };
  return { state, setState };
};

export default useInformation;
