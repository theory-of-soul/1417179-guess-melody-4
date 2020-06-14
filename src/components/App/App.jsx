import React from "react";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorAmount} = props;
  return (
    <WelcomeScreen errorAmount={errorAmount} />
  );
};

export default App;
