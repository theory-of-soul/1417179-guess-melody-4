import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

const gameSettings = {
  errorAmount: 3
};

ReactDOM.render(<App errorAmount={gameSettings.errorAmount} />, document.getElementById(`root`));
