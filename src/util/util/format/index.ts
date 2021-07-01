export const isPhoneNumber = (text: string) => {
  const rxg = new RegExp(/^\d{11}$/);
  return rxg.test(text);
};

export const isPassword = (text: string) => {
  const rxg = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
  return rxg.test(text);
};

export const isHaveError = (error: string) => {
  return error.length > 0;
};
