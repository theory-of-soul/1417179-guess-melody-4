import {GameType} from "./components/App/GameType";
import questionResponseAdapter from "./helpers/question-response-adapter";
import extend from "./helpers/object-extend";

const actions = {
  INCREASE_ERRORS: `INCREASE_ERRORS`,
  NEXT_STEP: `NEXT_STEP`,
  RESET_GAME: `RESET_GAME`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`
};

const gameStatisticInitialState = {
  maxErrors: 3,
  errors: 0,
  step: -1,
};

const initialState = extend(gameStatisticInitialState, {
  questions: []
});

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
  nextStep: () => ({
    type: actions.NEXT_STEP,
    payload: 1
  }),
  resetGame: () => ({
    type: actions.RESET_GAME
  }),
  loadQuestions: (questions) => ({
    type: actions.LOAD_QUESTIONS,
    payload: questions
  })
};

export const createOperations = {
  loadQuestions: () => (dispatch, getState, api) => {
    api
      .get(`/questions`)
      .then((response) => {
        const questions = questionResponseAdapter(response.data);
        dispatch(actionCreator.loadQuestions(questions));
      })
      .catch((e) => {
        throw new Error(e);
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.NEXT_STEP: {
      return extend(state, {
        step: state.step + action.payload
      });
    }
    case actions.INCREASE_ERRORS: {
      return extend(
          state, {
            errors: state.errors + action.payload
          }
      );
    }
    case actions.RESET_GAME: {
      return extend(state, gameStatisticInitialState);
    }
    case actions.LOAD_QUESTIONS: {
      return extend(
          state, {
            questions: action.payload
          }
      );
    }
    default:
      return state;
  }
};
