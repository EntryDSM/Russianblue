import React from 'react';

export const STATUS = 'status/STATUS' as const;
export const DESCRIPTION = 'status/DESCRIPTION' as const;
export const IS_END = 'status/IS_END' as const;
export const IS_START = 'status/IS_START' as const;
export const PROCESS = 'status/PROCESS' as const;

export interface processType {
  title: React.ReactNode;
  description: React.ReactNode;
  isHaveTerm: boolean;
  buttonText: string;
  isButtonAble: boolean;
}
