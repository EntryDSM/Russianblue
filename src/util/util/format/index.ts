export const isPhoneNumber = (text: string) => {
  const rxg = new RegExp(/^\d{11}$/);
  return rxg.test(text);
};

export const isHaveError = (error: string) => {
  return error.length > 0;
};
