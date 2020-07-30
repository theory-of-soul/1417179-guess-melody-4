import {NameSpaces} from "../nameSpaces";

export const getStep = (state) => {
  return state[NameSpaces.GAME].step;
};

export const getUserErrors = (state) => {
  return state[NameSpaces.GAME].errors;
};

export const getMaxError = (state) => {
  return state[NameSpaces.GAME].maxErrors;
};
