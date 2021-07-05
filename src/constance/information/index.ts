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
  userName: string;
  sex: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  parentName: string;
  parentTel: string;
  telephoneNumber: string;
  homeTel: string;
  address: string;
  detailAddress: string;
  postCode: string;
};

export interface informationInterface {
  name: string | null;
  sex: string | null;
  birthday: string | null;
  parent_name: string | null;
  parent_tel: string | null;
  telephone_number: string | null;
  home_tel: string | null;
  address: string | null;
  detail_address: string | null;
  post_code: string | null;
}

export type graduateInformationType = {
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  schoolCode: string;
  schoolTel: string;
};

export interface graduateInformationInterFace {
  student_number: string | null;
  school_code: string | null;
  school_tel: string | null;
}

export type getGraduateInformationType = {
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
  student_number: string;
  school_code: string;
  school_tel: string;
  school_name: string;
  photo_file_name: string;
};

export type getInformationType = {
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
};

export type searchSchoolQueryType = {
  name: string;
  size: number;
  page: number;
};

export type schoolArrayType = {
  code: string;
  name: string;
  information: string;
};

export type searchSchoolResponse = {
  content: Array<schoolArrayType>;
  total_pages: number;
};

export type addressType = {
  postCode: string;
  address: string;
};
