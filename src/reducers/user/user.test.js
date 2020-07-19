import {user as reducer} from "../user/user";

const authorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

const initialState = {
  status: authorizationStatus.NO_AUTH
};

const actions = {
  UPDATE_STATUS: `UPDATE_STATUS`
};

describe(`Game reducer tests`, () => {
  it(`reducer without parameters return initialState`, () => {
    expect(reducer(undefined, {})).toMatchObject(initialState);
  });

  it(`update status to auth`, () => {
    expect(reducer(initialState, {
      type: actions.UPDATE_STATUS,
      payload: authorizationStatus.AUTH
    })).toMatchObject({
      status: authorizationStatus.AUTH
    });
  });
});
