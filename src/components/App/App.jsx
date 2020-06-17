import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";

const App = (props) => {
  const {errorAmount} = props;
  return (
    <WelcomeScreen errorAmount={errorAmount} />
  );
};

App.propTypes = {
  errorAmount: PropTypes.number
};

export default App;
