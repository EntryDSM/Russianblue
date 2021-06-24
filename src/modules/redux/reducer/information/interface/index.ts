import { error } from '../../../../../models/error';

interface InformationState {
  name: string;
  gender: string;
  birthDay: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  schoolName: string;
  schoolPhoneNumber: string;
  parentName: string;
  parentPhoneNumber: string;
  phoneNumber: string;
  homePhoneNumber: string;
  zipCode: string;
  fullAddress: string;
  baseAddress: string;
  detailAddress: string;
  grade: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  imageUrl: string;
  imageFile: String;
  isGraduated: boolean;
  isSuccessSaveInformation: boolean | undefined;
  isSuccessGetInformation: boolean | undefined;
  error: error;
}

export default InformationState;
