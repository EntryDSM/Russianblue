import { schoolArrayType } from 'src/constance/information';
import { error } from '../../../../../models/error';

interface InformationState {
  name: string;
  gender: string;
  birthDay: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  schoolCode: string;
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
  imageUrl: string;
  imageFile: File;
  isGraduated: boolean;
  isSuccessSaveInformationImage: boolean | undefined;
  isSuccessSaveInformation: boolean | undefined;
  isSuccessGetInformation: boolean | undefined;
  isSuccessSaveSearchSchool: boolean | undefined;
  error: error;
  schoolSearchName: string;
  page: number;
  size: number;
  content: Array<schoolArrayType>;
  totalPages: number;
}

export default InformationState;
