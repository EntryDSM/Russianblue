import { SELF_INTRODUCTION, STUDY_PLAN } from './interface';

export const setSelfIntroduction = (payload: string) => ({
    type: SELF_INTRODUCTION,
    payload,
});

export const setStudyPlan = (payload: string) => ({
    type: STUDY_PLAN,
    payload,
});

export { SELF_INTRODUCTION, STUDY_PLAN };

export type introductionActionType = ReturnType<typeof setSelfIntroduction> | ReturnType<typeof setStudyPlan>;
