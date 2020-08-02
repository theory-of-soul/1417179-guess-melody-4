import {user as reducer, userOperations} from "../user/user";
import api from "../../api";
import MockAdapter from "axios-mock-adapter";

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

  it(`user logged`, () => {
    const createdApi = api();
    const apiMock = new MockAdapter(createdApi);
    const dispatch = jest.fn();
    const questionLoader = userOperations.login(`fake@email.com`, `fakePassword`);

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    questionLoader(dispatch, () => {}, createdApi)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actions.UPDATE_STATUS,
          payload: authorizationStatus.AUTH,
        });
      });
  });
});
