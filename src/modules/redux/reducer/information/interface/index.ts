import { schoolArrayType } from 'src/constance/information';
import { error } from '../../../../../models/error';

interface InformationState {
  name: string;
  gender: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  schoolCode: string;
  schoolName: string;
  schoolPhoneNumber: string;
  parentName: string;
  parentPhoneNumber: string;
  phoneNumber: string;
  homePhoneNumber: string;
  zipCode: string;
  baseAddress: string;
  detailAddress: string;
  grade: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  totalScore: number;
  imageUrl: string;
  imageFile: File;
  schoolSearchName: string;
  page: number;
  size: number;
  content: Array<schoolArrayType>;
  totalPages: number;
  isSuccessSaveInformationImage: boolean | undefined;
  isSuccessSaveInformation: boolean | undefined;
  isSuccessGetInformation: boolean | undefined;
  isSuccessSaveSearchSchool: boolean | undefined;
  isSuccessSaveGedInformation: boolean | undefined;
  error: error;
}

export default InformationState;
