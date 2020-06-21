import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import ArtistQuestionScreen from "../ArtistQuestionScreen/ArtistQuestionScreen";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import GenreQuestionScreen from "../GenreQuestionScreen/GenreQuestionScreen";

const App = (props) => {
  const {
    errorAmount,
    questions
  } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorAmount={errorAmount} onClickHandler={() => {}} />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen question={questions[0]} />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen question={questions[1]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const artistQuestionType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  rightAnswer: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
      PropTypes.shape({
        pic: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
  ).isRequired
});

const genreQuestionType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
      PropTypes.shape({
        genre: PropTypes.string.isRequired,
      })
  ).isRequired
});

App.propTypes = {
  errorAmount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.oneOfType([artistQuestionType, genreQuestionType])).isRequired,
};

export default App;
