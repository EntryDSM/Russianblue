export interface userResponse {
  name: string;
  email: string;
  phone_number: string;
  is_submit: boolean;
  is_printed_arrived: boolean;
  application_type: string;
  self_introduce: number;
  study_plan: number;
}

export const userResponseToUser = (response: userResponse) => {
  return {
    phoneNumber: response.phone_number,
    name: response.name,
    isfinalSubmitDone: response.is_submit,
    isReceiveMail: response.is_printed_arrived,
    selfIntroduceLength: response.self_introduce,
    studyPlanLength: response.study_plan,
    applicationType: response.application_type,
  };
};
