import questions from "./mocks/questions";

const actions = {
  INCREASE_ERRORS: `INCREASE_ERRORS`,
  NEXT_STEP: `NEXT_STEP`,
  START_NEW_GAME: `START_NEW_GAME`
};

const initialState = {
  errors: 0,
  step: -1,
  questions,
  maxErrors: 3
};

export const actionCreator = {
  increaseErrors: () => {
    return {
      type: actions.INCREASE_ERRORS,
      payload: 1
    };
  },
  nextStep: () => {
    return {
      type: actions.NEXT_STEP,
      payload: 1
    };
  },
  startNewGame: () => {
    return {
      type: actions.START_NEW_GAME,
    };
  },
};

const extend = (state, extendState) => {
  return Object.assign({}, state, extendState);
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.NEXT_STEP: {
      return extend(
          state, {
            step: state.step + action.payload
          }
      );
    }
    case actions.INCREASE_ERRORS: {
      return extend(
          state, {
            errors: state.errors + action.payload
          }
      );
    }
    case actions.START_NEW_GAME: {
      return initialState;
    }
    default:
      return state;
  }
};
