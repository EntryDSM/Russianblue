import { error } from '../../../../../models/error';

interface SelectTypeState {
  applicationType: string;
  socialType: string;
  isDaejeon: boolean | undefined;
  educationalStatus: string;
  graduationYear: number;
  graduationMonth: number;
  applicationRemark: string | null;
  error: error;
  graduatedAt: string;
  isSuccessSaveSelectType: boolean | undefined;
  isSuccessGetSelectType: boolean | undefined;
}

export default SelectTypeState;
