interface IntroductionState {
  selfIntroduction: string;
  studyPlan: string;
  isSuccessSaveSelfIntroduction: boolean | undefined;
  isSuccessSaveStudyPlan: boolean | undefined;
  isSuccessGetSelfIntroduction: boolean | undefined;
  isSuccessGetStudyPlan: boolean | undefined;
}

export default IntroductionState;
