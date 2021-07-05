interface GradeState {
  volunteerTime: number;
  absence: number;
  leave: number;
  lateness: number;
  truancy: number;
  grade: {
    korean: string;
    social: string;
    history: string;
    math: string;
    science: string;
    technical: string;
    english: string;
    isCheck: {
      freshmanFirst: boolean;
      freshmanSecond: boolean;
      sophomoreFirst: boolean;
      sophomoreSecond: boolean;
      seniorFirst: boolean;
      seniorSecond: boolean;
    };
  };
  isSuccessSaveGrade: boolean;
}

export enum Grade {
  freshmanFirst = 0,
  freshmanSecond = 1,
  sophomoreFirst = 2,
  sophomoreSecond = 3,
  seniorFirst = 4,
  seniorSecond = 5,
}

export default GradeState;
