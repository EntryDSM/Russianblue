import { schoolArrayType } from 'src/constance/information';
import { error } from '../../../../../models/error';

interface InformationState {
  userName: string;
  sex: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  parentName: string;
  parentTel: string;
  telephoneNumber: string;
  homeTel: string;
  address: string;
  detailAddress: string;
  postCode: string;
  schoolCode: string;
  schoolTel: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  schoolName: string;
  totalScore: number;
  photoFileName: string;
  pictureUrl: string;
  userPicture: File;
  page: number;
  size: number;
  totalPages: number;
  content: Array<schoolArrayType>;
  error: error;
  isSuccessSaveUserPicture: boolean | undefined;
  isSuccessSaveInformation: boolean | undefined;
  isSuccessSaveGraduateInformation: boolean | undefined;
  isSuccessGetSearchSchool: boolean | undefined;
}

export default InformationState;
