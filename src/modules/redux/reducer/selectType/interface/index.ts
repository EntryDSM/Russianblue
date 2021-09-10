import { error } from '../../../../../models/error';

interface SelectTypeState {
  applicationType: string;
  socialType: string;
  isDaejeon: boolean | null;
  educationalStatus: string;
  graduationYear: number;
  graduationMonth: number;
  applicationRemark: string | null;
  headcount: string | null;
  error: error;
  graduatedAt: string;
  isSuccessSaveSelectType: boolean | undefined;
  isSuccessGetSelectType: boolean | undefined;
}

export default SelectTypeState;
