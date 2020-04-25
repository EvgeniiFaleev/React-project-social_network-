export const required = (value) => {
  return value ? undefined : "Обязательное поле!!!";
};

export const maxLengthCreator = (maxLength) => (value) => {
  return value.length >= maxLength ? `Не более ${maxLength} символов` :
    undefined;
};