import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import ArtistQuestionScreen from "../ArtistQuestionScreen/ArtistQuestionScreen";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import GenreQuestionScreen from "../GenreQuestionScreen/GenreQuestionScreen";


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: -1
    };
    this._onNextStep = this._onNextStep.bind(this);
    this._getGameScreen = this._getGameScreen.bind(this);
  }

  _onNextStep() {
    this.setState(({step: prevStep}, props) => {
      const nextStep = prevStep + 1;

      return {
        step: props.questions.length - 1 >= nextStep ? nextStep : -1
      };
    });
  }

  _getGameScreen() {
    const {step} = this.state;
    const {
      errorAmount,
      questions
    } = this.props;

    const nextGameQuestion = this.props.questions[step];

    if (step === -1 || !nextGameQuestion) {
      return (
        <WelcomeScreen
          errorAmount={errorAmount}
          onClickHandler={this._onNextStep}
        />
      );
    }

    if (nextGameQuestion && nextGameQuestion.type) {
      if (nextGameQuestion.type === `artist`) {
        return (
          <ArtistQuestionScreen
            question={questions[step]}
            handleAnswer={this._onNextStep}
          />
        );
      }
      if (nextGameQuestion.type === `genre`) {
        return (
          <GenreQuestionScreen
            question={questions[step]}
            handleAnswer={this._onNextStep}
          />
        );
      }
    }

    return null;
  }

  render() {
    const {
      questions
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._getGameScreen()}
          </Route>
          <Route exact path="/dev-artist">
            <ArtistQuestionScreen
              question={questions[0]}
              handleAnswer={this._onNextStep}
            />
          </Route>
          <Route exact path="/dev-genre">
            <GenreQuestionScreen
              question={questions[1]}
              handleAnswer={this._onNextStep}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

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
