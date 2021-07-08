export const SCHOOL = '대덕소프트웨어마이스터고등학교';
export const SELECTTYPE = '2022년 지원자 전형 구분';
export const CHOOSETYPEINFO = [
  { id: 'regular', content: '일반전형' },
  { id: 'meister', content: '마이스터 인재전형' },
];
export const SOCIAL = [
  { id: 1, content: '기초생활수급자' },
  { id: 2, content: '한부모가족' },
  { id: 3, content: '차상위계층' },
  { id: 4, content: '소년소녀가장' },
  { id: 5, content: '북한이탈주민' },
  { id: 6, content: '다문화가정' },
];
export const AREA = [
  { id: 'daejeon', content: '대전' },
  { id: 'country', content: '전국' },
];
export const GRADUATION = [
  { id: 'prospective', content: '졸업 예정자' },
  { id: 'graduate', content: '졸업자' },
  { id: 'qualification', content: '검정고시' },
];
export const REMARKS = [
  { id: 'nationalMerit', content: '국가 유공자' },
  { id: 'specialAdmission', content: '특례 입학 대상자' },
];
export const GRADUATION_DATE_EXPLAIN = '졸업 예정자의 경우 졸업 예정월만 선택해주세요';
export const REMARK_EXPLAIN = '해당하는 특기사항에 체크해주세요';

export type selectTypeType = {
  educational_status: string | null;
  application_type: string | null;
  is_daejeon: boolean | null;
  application_remark: string | null;
  graduated_at: string | null;
};

export type selectTypeSaveType = {
  educationalStatus: string | null;
  applicationType: string | null;
  isDaejeon: boolean | null;
  applicationRemark: string | null;
  graduationMonth: number | null;
  graduationYear: number | null;
};

export interface selectTypeInterface {
  educational_status: string | null;
  application_type: string | null;
  is_daejeon: boolean | null;
  application_remark: string | null;
  graduated_at: string | null;
}
