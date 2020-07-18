import questionResponseAdapter from "../../helpers/question-response-adapter";
import extend from "../../helpers/object-extend";

const actions = {
  LOAD_QUESTIONS: `LOAD_QUESTIONS`
};

const initialState = {
  questions: []
};

export const actionCreator = {
  loadQuestions: (questions) => ({
    type: actions.LOAD_QUESTIONS,
    payload: questions
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
    default:
      return state;
  }
};
