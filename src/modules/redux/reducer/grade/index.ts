import { gradeActionType } from '../../action/grade';
import { INPUT, GRADE } from '../../action/grade/interface';
import GradeState from './interface';

const initState: GradeState = {
  volunteerTime: 0,
  absence: 0,
  leave: 0,
  lateness: 0,
  truancy: 0,
  grade: {
    korean: { 11: '0', 12: '0', 21: '0', 22: '0', 31: '0' },
    social: { 11: '0', 12: '0', 21: '0', 22: '0', 31: '0' },
    history: { 11: '0', 12: '0', 21: '0', 22: '0', 31: '0' },
    math: { 11: '0', 12: '0', 21: '0', 22: '0', 31: '0' },
    science: { 11: '0', 12: '0', 21: '0', 22: '0', 31: '0' },
    technical: { 11: '0', 12: '0', 21: '0', 22: '0', 31: '0' },
    english: { 11: '0', 12: '0', 21: '0', 22: '0', 31: '0' },
  },
};

const gradeReducer = (state: GradeState = initState, action: gradeActionType): GradeState => {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case GRADE:
      return {
        ...state,
        grade: action.payload.grade,
      };
    default:
      return state;
  }
};

export default gradeReducer;
