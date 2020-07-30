import {NameSpaces} from "../nameSpaces";

export const getQuestions = (state) => {
  return state[NameSpaces.DATA].questions;
};

export const getErrorInfo = (state) => {
  return state[NameSpaces.DATA].hasError;
};
