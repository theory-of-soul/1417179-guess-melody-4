import {nameSpaces} from "../nameSpaces";

export const getStep = (state) => {
  return state[nameSpaces.GAME].step;
};

export const getUserErrors = (state) => {
  return state[nameSpaces.GAME].errors;
};

export const getMaxError = (state) => {
  return state[nameSpaces.GAME].maxErrors;
};
