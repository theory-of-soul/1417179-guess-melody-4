import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import questions from "./mocks/questions";

const gameSettings = {
  errorAmount: 3,
  questions
};

ReactDOM.render(
    <App errorAmount={gameSettings.errorAmount} questions={gameSettings.questions} />,
    document.getElementById(`root`)
);
