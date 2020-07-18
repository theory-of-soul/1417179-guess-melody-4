import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import {applyMiddleware, compose, createStore} from "redux";
import {reducer} from "./reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import api from "./api";

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api())),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
