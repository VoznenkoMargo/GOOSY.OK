/* eslint-disable consistent-return */
export const saveToLS = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const removeFromLS = (name) => {
  localStorage.removeItem(name);
};

export const getFromLS = (name) => {
  const valueFromLS = localStorage.getItem(name);
  if (valueFromLS) {
    return JSON.parse(valueFromLS);
  }
};
