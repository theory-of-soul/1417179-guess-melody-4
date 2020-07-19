import extend from "../../helpers/object-extend";

export const authorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

const actions = {
  UPDATE_STATUS: `UPDATE_STATUS`
};

export const actionCreator = {
  updateUserAuthStatus: (status) => ({
    type: actions.UPDATE_STATUS,
    payload: status
  })
};

const initialState = {
  status: authorizationStatus.NO_AUTH
};

export const userOperations = {
  checkAuthStatus: () => (dispatch, getState, api) => {
    return api
      .get(`/login`)
      .then((response) => response)
      .catch((error) => error);
  }
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_STATUS: {
      return extend(
          state, {
            status: action.payload
          }
      );
    }
    default:
      return state;
  }
};
