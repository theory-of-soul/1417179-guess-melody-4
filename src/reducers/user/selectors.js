import {nameSpaces} from "../nameSpaces";
import {createSelector} from "reselect";
import {authorizationStatus} from "./user";

export const getUserAuthStatus = (state) => {
  return state[nameSpaces.USER].status;
};

export const isUserAuth = createSelector(
    getUserAuthStatus,
    (status) => status === authorizationStatus.AUTH
);
