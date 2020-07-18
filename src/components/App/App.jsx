import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import ArtistQuestionScreen from "../ArtistQuestionScreen/ArtistQuestionScreen";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import GenreQuestionScreen from "../GenreQuestionScreen/GenreQuestionScreen";
import withAudioPlayer from "../../HOC/withAudioPlayer/withAudioPlayer";
import GameScreen from "../GameScreen/GameScreen";
import {connect} from "react-redux";
import {GameType} from "./GameType";
import withMultiSelectAnswers from "../../HOC/withMultiSelectAnswers/withMultiSelectAnswers";
import FailScreen from "../FailScreen/FailScreen";
import WinScreen from "../WinScreen/WinScreen";
import {actionCreator} from "../../reducers/game/game";
import {createOperations} from "../../reducers/data/data";

const GenreQuestionScreenWithPlayer = withAudioPlayer(withMultiSelectAnswers(GenreQuestionScreen));
const ArtistQuestionScreenWithPlayer = withAudioPlayer(ArtistQuestionScreen);

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this._onUserClickAnswer = this._onUserClickAnswer.bind(this);
    this._getGameScreen = this._getGameScreen.bind(this);
    this._onWelcomeButtonClick = this._onWelcomeButtonClick.bind(this);
    this._onReplayButtonClick = this._onReplayButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.loadQuestions();
  }

  _onWelcomeButtonClick() {
    this.props.onNextStep();
  }

  _onReplayButtonClick() {
    this.props.onResetGame();
  }

  _onUserClickAnswer(question, userAnswer) {
    const {
      onCheckAnswer,
      onNextStep
    } = this.props;

    onCheckAnswer(question, userAnswer);
    onNextStep();
  }

  _getGameScreen() {
    const {
      step,
      userErrors,
      questions,
      errorAmount
    } = this.props;

    const nextGameQuestion = this.props.questions[step];
    const welcomeScreenStepNumber = -1;

    if (step === welcomeScreenStepNumber) {
      return (
        <WelcomeScreen
          errorAmount={errorAmount}
          onClickHandler={this._onWelcomeButtonClick}
        />
      );
    }

    if (userErrors >= errorAmount) {
      return (
        <FailScreen onClickReplayHandler={this._onReplayButtonClick}/>
      );
    }

    if (!nextGameQuestion) {
      return (
        <WinScreen
          questionAmount={questions.length}
          errorAmount={userErrors}
          onClickReplayHandler={this._onReplayButtonClick}
        />
      );
    }

    if (nextGameQuestion && nextGameQuestion.type) {
      if (nextGameQuestion.type === GameType.ARTIST) {
        return (
          <GameScreen userErrors={userErrors}>
            <ArtistQuestionScreenWithPlayer
              question={questions[step]}
              handleAnswer={this._onUserClickAnswer}
            />
          </GameScreen>
        );
      }
      if (nextGameQuestion.type === GameType.GENRE) {
        return (
          <GameScreen userErrors={userErrors}>
            <GenreQuestionScreenWithPlayer
              question={questions[step]}
              handleAnswer={this._onUserClickAnswer}
            />
          </GameScreen>
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
            <GameScreen userErrors={1}>
              <ArtistQuestionScreenWithPlayer
                question={questions[0]}
                handleAnswer={this._onUserClickAnswer}
              />
            </GameScreen>
          </Route>
          <Route exact path="/dev-genre">
            <GameScreen userErrors={2}>
              <GenreQuestionScreenWithPlayer
                question={questions[1]}
                handleAnswer={this._onUserClickAnswer}
              />
            </GameScreen>
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
        audioSrc: PropTypes.string.isRequired
      })
  ).isRequired
});

App.propTypes = {
  errorAmount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.oneOfType([artistQuestionType, genreQuestionType])).isRequired,
  step: PropTypes.number.isRequired,
  onNextStep: PropTypes.func.isRequired,
  onCheckAnswer: PropTypes.func.isRequired,
  onResetGame: PropTypes.func.isRequired,
  userErrors: PropTypes.number.isRequired,
  loadQuestions: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    step: state.step,
    userErrors: state.errors,
    questions: state.questions,
    errorAmount: state.maxErrors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNextStep: () => {
      dispatch(actionCreator.nextStep());
    },
    onCheckAnswer: (question, userAnswer) => {
      dispatch(actionCreator.increaseErrors(question, userAnswer));
    },
    onResetGame: () => {
      dispatch(actionCreator.resetGame());
    },
    loadQuestions: () => {
      dispatch(createOperations.loadQuestions());
    }
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
