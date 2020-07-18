import questionResponseAdapter from "../../helpers/question-response-adapter";
import extend from "../../helpers/object-extend";

const actions = {
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  ERROR_LOAD_QUESTIONS: `ERROR_LOAD_QUESTIONS`,
};

const initialState = {
  questions: [],
  hasError: false
};

export const actionCreator = {
  loadQuestions: (questions) => ({
    type: actions.LOAD_QUESTIONS,
    payload: questions
  }),
  errorLoadQuestion: () => ({
    type: actions.ERROR_LOAD_QUESTIONS
  })
};

export const createOperations = {
  loadQuestions: () => (dispatch, getState, api) => {
    return api
      .get(`/questions`)
      .then((response) => {
        const questions = questionResponseAdapter(response.data);
        dispatch(actionCreator.loadQuestions(questions));
      })
      .catch((e) => {
        dispatch(actionCreator.errorLoadQuestion());
        throw new Error(e);
      });
  }
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_QUESTIONS: {
      return extend(
          state, {
            questions: action.payload
          }
      );
    }
    case actions.ERROR_LOAD_QUESTIONS: {
      return extend(
          state, {
            hasError: true
          }
      );
    }
    default:
      return state;
  }
};
