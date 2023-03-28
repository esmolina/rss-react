export const nameCheck = (name: string) => {
  return name.length >= 2;
};

export const dateCheck = (date: string) => {
  return new Date(date) && new Date(date) < new Date() && new Date(date) > new Date('2020-01-01');
};

export const selectCheck = (select: string) => {
  return select !== 'not selected';
};

export const radioCheck = (...params: Array<boolean>) => {
  const radios = [...params];
  let result = false;
  let i = 0;
  while (!result && i < radios.length) {
    if (radios[i]) result = true;
    i += 1;
  }
  return result;
};

export const fileCheck = (filePath: string) => {
  return filePath.length > 0;
};

export const agreementCheck = (agreement: boolean) => {
  return agreement;
};
