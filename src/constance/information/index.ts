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
  { name: 'stdGrade', content: '학년' },
  { name: 'stdClass', content: '반' },
  { name: 'stdNumber', content: '번' },
];

export type informationType = {
  name: string;
  gender: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  schoolCode: string;
  schoolPhoneNumber: string;
  parentName: string;
  parentPhoneNumber: string;
  phoneNumber: string;
  homePhoneNumber: string;
  baseAddress: string;
  detailAddress: string;
  zipCode: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
};

export type getInformationType = {
  name: string;
  sex: string;
  birthday: string;
  school_code: string;
  school_tel: string;
  parent_name: string;
  parent_tel: string;
  telephone_number: string;
  home_tel: string;
  address: string;
  detail_address: string;
  post_code: string;
  photo_file_name: string;
  student_number: string;
  school_name: string;
};

export type gedInformationType = {
  name: string;
  gender: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  parentName: string;
  parentPhoneNumber: string;
  phoneNumber: string;
  homePhoneNumber: string;
  baseAddress: string;
  detailAddress: string;
  zipCode: string;
  totalScore: number;
};

export type getGedInformationType = {
  name: string;
  sex: string;
  birthday: string;
  parent_name: string;
  parent_tel: string;
  telephone_number: string;
  home_tel: string;
  address: string;
  detail_address: string;
  post_code: string;
  photo_file_name: string;
  average_score: number;
};

export type schoolArrayType = {
  code: string;
  name: string;
  information: string;
  address: string;
};

export type addressType = {
  zipCode: string;
  baseAddress: string;
};
