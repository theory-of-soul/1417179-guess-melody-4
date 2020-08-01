import {game as reducer} from "./game";

const actions = {
  INCREASE_ERRORS: `INCREASE_ERRORS`,
  NEXT_STEP: `NEXT_STEP`,
  RESET_GAME: `RESET_GAME`,
};

const initialState = {
  errors: 0,
  step: -1,
  maxErrors: 3
};


describe(`Game reducer tests`, () => {
  it(`reducer without parameters return initialState`, () => {
    expect(reducer(undefined, {})).toMatchObject(initialState);
  });

  it(`reducer add next step`, () => {
    expect(reducer({
      step: -1,
      errors: 0,
      maxErrors: 3
    }, {
      type: actions.NEXT_STEP,
      payload: 1
    })).toMatchObject({
      step: 0,
      errors: 0,
      maxErrors: 3
    });
  });

  it(`after reset state reducer return initialState`, () => {
    expect(reducer({
      step: 0,
      errors: 3,
      maxErrors: 3
    }, {
      type: actions.RESET_GAME
    })).toMatchObject({
      step: -1,
      errors: 0,
      maxErrors: 3,
    });
  });

  it(`reducer increase errors`, () => {
    expect(reducer({
      step: 0,
      errors: 0,
      maxErrors: 3
    }, {
      type: actions.INCREASE_ERRORS,
      payload: 1
    })).toMatchObject({
      step: 0,
      errors: 1,
      maxErrors: 3
    });
  });
});
