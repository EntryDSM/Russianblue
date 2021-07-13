import { error } from 'src/models/error';

interface IUserState {
  phoneNumber: string;
  name: string;
  isfinalSubmitDone: boolean;
  isReceiveMail: boolean;
  selfIntroduceLength: number;
  studyPlanLength: number;
  applicationType: string;
  error: error;
}

export default IUserState;
