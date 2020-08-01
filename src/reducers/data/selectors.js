import {nameSpaces} from "../nameSpaces";

export const getQuestions = (state) => {
  return state[nameSpaces.DATA].questions;
};

export const getErrorInfo = (state) => {
  return state[nameSpaces.DATA].hasError;
};
