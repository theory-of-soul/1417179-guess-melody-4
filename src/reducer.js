import questions from "./mocks/questions";
import {GameType} from "./components/App/GameType";

const actions = {
  INCREASE_ERRORS: `INCREASE_ERRORS`,
  NEXT_STEP: `NEXT_STEP`,
};

const initialState = {
  errors: 0,
  step: -1,
  questions,
  maxErrors: 3
};

const isArtistAnswerCorrect = (question, userAnswer) => userAnswer.name === question.rightAnswer;

const isGenreAnswerCorrect = (question, userAnswer) => Object
  .values(userAnswer)
  .every((checkedSong, i) => checkedSong === (question.answers[i].genre === question.genre));


export const actionCreator = {
  increaseErrors: (question, userAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST: {
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      }
      case GameType.GENRE: {
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
      }
    }

    return {
      type: actions.INCREASE_ERRORS,
      payload: answerIsCorrect ? 0 : 1
    };
  },
  nextStep: () => {
    return {
      type: actions.NEXT_STEP,
      payload: 1
    };
  }
};

const extend = (state, extendState) => {
  return Object.assign({}, state, extendState);
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.NEXT_STEP: {
      const nextStep = state.step + action.payload;
      const nextQuestion = state.questions[nextStep];
      const gameIsContinue = state.errors < state.maxErrors && nextQuestion;
      const newState = gameIsContinue ? {
        step: nextStep
      } : initialState;
      return extend(state, newState);
    }
    case actions.INCREASE_ERRORS: {
      return extend(
          state, {
            errors: state.errors + action.payload
          }
      );
    }
    default:
      return state;
  }
};
