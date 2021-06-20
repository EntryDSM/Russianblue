import { error } from '../../../../../models/error';

interface IntroductionState {
  error: error;
  selfIntroduction: string;
  studyPlan: string;
  isSuccessSaveSelfIntroduction: boolean | undefined;
  isSuccessSaveStudyPlan: boolean | undefined;
  isSuccessGetSelfIntroduction: boolean | undefined;
  isSuccessGetStudyPlan: boolean | undefined;
  isSuccessSaveBoth: boolean | undefined;
}

export default IntroductionState;
