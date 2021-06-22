import { error } from '../../../../../models/error';

interface SelectTypeState {
  application_type: string;
  socialType: string;
  is_daejeon: boolean | undefined;
  educational_status: string;
  graduationYear: number;
  graduationMonth: number;
  application_remark: string | null;
  error: error;
  graduated_at: string;
  isSuccessSaveSelectType: boolean | undefined;
  isSuccessGetSaveSelectType: boolean | undefined;
}

export default SelectTypeState;
