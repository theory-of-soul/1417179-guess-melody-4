import {nameSpaces} from "../nameSpaces";

export const getQuestions = (state) => {
  return state[nameSpaces.DATA].questions;
};
