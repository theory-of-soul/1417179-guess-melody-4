import {NameSpaces} from "../nameSpaces";
import {createSelector} from "reselect";
import {authorizationStatus} from "./user";

export const getUserAuthStatus = (state) => {
  return state[NameSpaces.USER].status;
};

export const isUserAuth = createSelector(
    getUserAuthStatus,
    (status) => status === authorizationStatus.AUTH
);
