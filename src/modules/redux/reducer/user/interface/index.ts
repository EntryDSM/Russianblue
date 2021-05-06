import { error } from 'src/models/error';

interface IUserState {
  phoneNumber: string;
  name: string;
  isfinalSubmitDone: boolean;
  isReceiveMail: boolean;
  isAdmissionFeePayed: boolean;
  selfIntroduceLength: number;
  studyPlanLength: number;
  error: error;
}

export default IUserState;
