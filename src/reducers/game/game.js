import {GameType} from "../../components/App/GameType";
import extend from "../../helpers/object-extend";

const actions = {
  INCREASE_ERRORS: `INCREASE_ERRORS`,
  NEXT_STEP: `NEXT_STEP`,
  RESET_GAME: `RESET_GAME`
};

const initialState = {
  maxErrors: 3,
  errors: 0,
  step: -1,
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
  nextStep: () => ({
    type: actions.NEXT_STEP,
    payload: 1
  }),
  resetGame: () => ({
    type: actions.RESET_GAME
  })
};

export const game = (state = initialState, action) => {
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
      return extend(state, initialState);
    }
    default:
      return state;
  }
};
