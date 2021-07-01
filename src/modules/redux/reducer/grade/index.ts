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
