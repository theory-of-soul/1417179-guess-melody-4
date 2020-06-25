import React from "react";
import PropTypes from "prop-types";

const ArtistQuestionScreen = (props) => {
  const {
    question,
    handleAnswer
  } = props;
  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        {/*  <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">*/}
        {/*  <circle className="timer__line" cx="390" cy="390" r="370"*/}
        {/*    style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>*/}
        {/*  </svg>*/}

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {
            question.answers.map((answer, index) => {
              return (
                <div className="artist" key={`${answer.name}`}>
                  <input
                    className="artist__input visually-hidden"
                    type="radio"
                    name="answer"
                    value={`artist-${index}`}
                    id={`answer-${index}`}
                  />
                  <label
                    className="artist__name"
                    htmlFor={`answer-${index}`}
                    onClick={() => {
                      handleAnswer(question, answer);
                    }}
                  >
                    <img className="artist__picture" src={answer.pic} alt={answer.name} />
                    {answer.name}
                  </label>
                </div>
              );
            })
          }
        </form>
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    rightAnswer: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          pic: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
    ).isRequired
  }),
  handleAnswer: PropTypes.func.isRequired
};

export default ArtistQuestionScreen;
