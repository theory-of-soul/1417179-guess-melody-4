import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer as reducer} from "./reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import api from "./api";
import {actionCreator, authorizationStatus, userOperations} from "./reducers/user/user";

const onUnauthorized = () => {
  store.dispatch(actionCreator.updateUserAuthStatus(authorizationStatus.NO_AUTH));
};

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api(onUnauthorized))),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(userOperations.checkAuthStatus());

export const AppUrls = {
  BASE: `/`,
  AUTH: `/login`,
  LOSE: `/lose`,
  WIN: `/result`
};

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
