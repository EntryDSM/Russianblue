export const isSignUpDataAble = (...texts: string[]) => {
  let flag = false;
  texts.forEach(text => {
    if (text.length <= 0) {
      flag = true;
    }
  });
  return flag;
};
