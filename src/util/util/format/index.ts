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

export const isEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
