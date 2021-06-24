export const SCHOOL = '대덕소프트웨어마이스터고등학교';
export const INFORMATIONTITLE = '2022년 지원자 인적사항';
export const EXPLAIN = "'-'문자를 제외한 숫자만 입력해주세요.";
export const IMG_EXPLAIN = '증명사진을 첨부해주세요';
export const IMG_FORMATS = '(JPG,JPEG,JPEG2000,PNG)';
export const GENDER = [
  { id: 'male', content: '남자' },
  { id: 'female', content: '여자' },
];
export const GRADE = [
  { name: 'grade', content: '학년' },
  { name: 'class', content: '반' },
  { name: 'number', content: '번' },
];

export type informationType = {
  name: string;
  gender: string;
  birthDay: string;
  schoolName: string;
  schoolPhoneNumber: string;
  parentName: string;
  parentPhoneNumber: string;
  phoneNumber: string;
  homePhoneNumber: string;
  baseAddress: string;
  detailAddress: string;
  zipcode: string;
  imageUrl: string;
  grade: string;
  isGraduated: boolean;
};
