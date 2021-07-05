import { reducerType } from '../../../modules/redux/reducer';
import { gradeInterface } from '../../../constance/grade';
import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const gradeStateToRequest = (state: reducerType['grade']): gradeInterface => {
  return {
    volunteer_time: state.volunteerTime,
    day_absence_count: state.absence,
    lecture_absence_count: state.truancy,
    lateness_count: state.lateness,
    early_leave_count: state.leave,
    korean_grade: state.grade.korean,
    social_grade: state.grade.social,
    history_grade: state.grade.history,
    math_grade: state.grade.math,
    science_grade: state.grade.science,
    tech_and_home_grade: state.grade.technical,
    english_grade: state.grade.english,
  };
};

export const grade = async (access_token: string, gradeRequest: gradeInterface) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    await request.patch(uri.grade, gradeRequest);
  } catch (error) {
    throw error;
  }
};

export const getGrade = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.grade);
  } catch (error) {
    throw error;
  }
};
