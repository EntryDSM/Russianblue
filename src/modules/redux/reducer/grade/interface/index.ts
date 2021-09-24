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
  };
  isSuccessSaveGrade: boolean;
}

export enum Grade {
  morePreviousSemester = 2,
  previousSemester = 3,
  seniorFirst = 4,
  seniorSecond = 5,
}

export default GradeState;
