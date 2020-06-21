import React from "react";
import PropTypes from "prop-types";

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userAnswers: {
        0: false,
        1: false,
        2: false,
        3: false
      }
    };

    this._onUserClickHandler = this._onUserClickHandler.bind(this);
  }

  _onUserClickHandler(answerIndex) {
    this.setState(({userAnswers}) => ({
      userAnswers: Object.assign({}, userAnswers, {
        [answerIndex]: !userAnswers[answerIndex]
      })
    }));
  }

  render() {
    const {
      question,
      handleAnswer
    } = this.props;
    const {userAnswers} = this.state;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          {/* <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">*/}
          {/*  <circle className="timer__line" cx="390" cy="390" r="370"*/}
          {/*          style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>*/}
          {/* </svg>*/}

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {question.genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={(event) => {
              event.preventDefault();
              handleAnswer(question, userAnswers);
            }}
          >
            {
              question.answers.map((answer, index) => {
                return (
                  <div className="track" key={`${answer.genre}-${index}`}>
                    <button className="track__button track__button--play" type="button"></button>
                    <div className="track__status">
                      <audio></audio>
                    </div>
                    <div className="game__answer">
                      <input
                        className="game__input visually-hidden"
                        type="checkbox"
                        name="answer"
                        value={`answer-${index}`}
                        id={`answer-${index}`}
                        checked={userAnswers[index]}
                        onChange={() => {
                          this._onUserClickHandler(index);
                        }}
                      />
                      <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
                    </div>
                  </div>
                );
              })
            }

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          genre: PropTypes.string.isRequired,
        })
    ).isRequired
  }),
  handleAnswer: PropTypes.func.isRequired
};

export default GenreQuestionScreen;
