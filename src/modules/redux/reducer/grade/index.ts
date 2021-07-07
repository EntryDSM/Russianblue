import { gradeActionType } from '../../action/grade';
import {
  INPUT,
  GRADE,
  SAVE_GRADE,
  SAVE_GRADE_SUCCESS,
  SAVE_GRADE_FAILURE,
  GET_GRADE,
  GET_GRADE_SUCCESS,
} from '../../action/grade/interface';
import GradeState from './interface';

const initState: GradeState = {
  volunteerTime: 0,
  absence: 0,
  leave: 0,
  lateness: 0,
  truancy: 0,
  grade: {
    korean: 'XXXXXX',
    social: 'XXXXXX',
    history: 'XXXXXX',
    math: 'XXXXXX',
    science: 'XXXXXX',
    technical: 'XXXXXX',
    english: 'XXXXXX',
    isCheck: {
      freshmanFirst: false,
      freshmanSecond: false,
      sophomoreFirst: false,
      sophomoreSecond: false,
      seniorFirst: false,
      seniorSecond: false,
    },
  },
  isSuccessSaveGrade: undefined,
};

const gradeReducer = (state: GradeState = initState, action: gradeActionType): GradeState => {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        isSuccessSaveGrade: undefined,
      };
    case GRADE:
      return {
        ...state,
        grade: action.payload.grade,
        isSuccessSaveGrade: undefined,
      };
    case SAVE_GRADE:
      return {
        ...state,
        isSuccessSaveGrade: undefined,
      };
    case SAVE_GRADE_SUCCESS:
      return {
        ...state,
        isSuccessSaveGrade: true,
      };
    case SAVE_GRADE_FAILURE:
      return {
        ...state,
        isSuccessSaveGrade: false,
      };
    case GET_GRADE_SUCCESS:
      return {
        ...state,
        volunteerTime: action.payload.volunteer_time,
        absence: action.payload.day_absence_count,
        truancy: action.payload.lecture_absence_count,
        lateness: action.payload.lateness_count,
        leave: action.payload.early_leave_count,
        grade: {
          korean: action.payload.korean_grade,
          social: action.payload.social_grade,
          history: action.payload.history_grade,
          math: action.payload.math_grade,
          science: action.payload.science_grade,
          technical: action.payload.tech_and_home_grade,
          english: action.payload.english_grade,
          isCheck: { ...state.grade.isCheck },
        },
      };
    default:
      return state;
  }
};

export default gradeReducer;
